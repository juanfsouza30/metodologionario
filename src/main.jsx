import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Search,
  BookOpen,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  X,
  Bookmark,
  BookmarkCheck,
  FlaskConical,
  FileText,
  Globe2,
  Layers3,
  Menu,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  LibraryBig,
  Info,
  ShieldCheck,
  Copy,
  Check,
  Download,
  Moon,
  Sun,
  Clock,
  Compass,
  RotateCcw,
  StickyNote,
  Share2,
} from 'lucide-react'
import entries from './data/entries.json'
import './styles.css'

const categories = [
  {
    id: 1,
    title: 'Ciência, conhecimento e método',
    short: 'Fundamentos',
    description: 'Conceitos que sustentam a construção e a avaliação do conhecimento científico.',
    icon: FlaskConical,
    color: 'mint',
  },
  {
    id: 2,
    title: 'Pesquisa: planejamento, tipos e métodos',
    short: 'Pesquisa',
    description: 'Do problema de pesquisa ao desenho metodológico e à avaliação dos resultados.',
    icon: Layers3,
    color: 'blue',
  },
  {
    id: 3,
    title: 'Trabalho científico, escrita e normas',
    short: 'Escrita & normas',
    description: 'Estrutura acadêmica, comunicação escrita, citações e integridade científica.',
    icon: FileText,
    color: 'amber',
  },
  {
    id: 4,
    title: 'Comunicação científica, avaliação e acesso à literatura',
    short: 'Comunicação',
    description: 'Onde encontrar, publicar, compartilhar e avaliar a produção científica.',
    icon: Globe2,
    color: 'violet',
  },
]

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const studyTracks = [
  {
    id: 'tcc',
    title: 'Começando o TCC ou Artigo',
    subtitle: 'Da formulação do problema às normas de escrita',
    keywords: ['conhecimento', 'método', 'problema', 'hipótese', 'revisão', 'abnt', 'citação', 'artigo'],
  },
  {
    id: 'revisao',
    title: 'Revisão da Literatura',
    subtitle: 'Busca, seleção e síntese de trabalhos científicos',
    keywords: ['revisão', 'sistemática', 'bibliográfica', 'base', 'periódico', 'acesso', 'impacto'],
  },
  {
    id: 'empirica',
    title: 'Validação & Pesquisa Empírica',
    subtitle: 'Métodos para avaliar sistemas, experimentos e dados',
    keywords: ['experimento', 'estudo de caso', 'quantitativa', 'qualitativa', 'dados', 'amostra', 'variável'],
  },
]

function normalizeText(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
}

function slugify(str) {
  return normalizeText(str)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function estimateReadingMinutes(item) {
  const words = [item.term, ...(item.definition || [])].join(' ').trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 180))
}

function formatAbntCitation(item) {
  const termUpper = String(item.term || '').toLocaleUpperCase('pt-BR')
  const url = `${window.location.origin}${window.location.pathname}#verbete/${slugify(item.term)}`
  return `${termUpper}. In: METODOLOGIÁRIO: dicionário de metodologia científica para a Ciência da Computação. Patos, PB: UEPB, 2026. Seção ${item.code} (${item.id}). Disponível em: <${url}>.`
}

function formatMarkdownNote(item, personalNote) {
  const cleanRefs = (item.references || []).filter((ref) => !/^\d+\.\d+\s/.test(ref.trim()))
  const lines = [
    `# ${item.term}`,
    '',
    `- **Categoria:** ${item.category}`,
    `- **Código / ID:** ${item.code} · ${item.id}`,
    '',
    '## Definição',
    '',
    ...(item.definition || []).flatMap((p) => [p, '']),
  ]
  if (personalNote && personalNote.trim()) {
    lines.push('## Minhas anotações', '', personalNote.trim(), '')
  }
  if (item.related && item.related.length > 0) {
    lines.push('## Ver também', '', ...item.related.map((r) => `- [[${r}]]`), '')
  }
  if (cleanRefs.length > 0) {
    lines.push('## Referências', '', ...cleanRefs.map((r) => `- ${r}`), '')
  }
  return lines.join('\n')
}

function HighlightedText({ text, query }) {
  const cleanQuery = query.trim()
  if (!cleanQuery || cleanQuery.length < 2) return <>{text}</>
  const regex = new RegExp(`(${escapeRegExp(cleanQuery)})`, 'gi')
  const parts = String(text || '').split(regex)
  return (
    <>
      {parts.map((part, idx) =>
        part.toLocaleLowerCase('pt-BR') === cleanQuery.toLocaleLowerCase('pt-BR') ? (
          <mark key={idx} className="search-hl">
            {part}
          </mark>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        )
      )}
    </>
  )
}

function AutoLinkedParagraph({ text, currentId, allEntries, onOpen }) {
  const linkMap = useMemo(() => {
    const map = new Map()
    allEntries.forEach((e) => {
      if (e.id === currentId) return
      const term = e.term.trim()
      if (term.length >= 5) {
        map.set(term.toLocaleLowerCase('pt-BR'), e)
      }
    })
    return map
  }, [allEntries, currentId])

  const pattern = useMemo(() => {
    const terms = Array.from(linkMap.keys()).sort((a, b) => b.length - a.length)
    if (!terms.length) return null
    return new RegExp(`\\b(${terms.map(escapeRegExp).join('|')})\\b`, 'gi')
  }, [linkMap])

  if (!pattern) return <p>{text}</p>

  const usedIds = new Set()
  const parts = String(text || '').split(pattern)

  return (
    <p>
      {parts.map((part, idx) => {
        const matchedEntry = linkMap.get(part.toLocaleLowerCase('pt-BR'))
        if (matchedEntry && !usedIds.has(matchedEntry.id)) {
          usedIds.add(matchedEntry.id)
          return (
            <button
              type="button"
              key={idx}
              className="inline-term-link"
              onClick={() => onOpen(matchedEntry)}
              title={`Abrir verbete: ${matchedEntry.term}`}
            >
              {part}
            </button>
          )
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>
      })}
    </p>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [letter, setLetter] = useState('')
  const [selected, setSelected] = useState(null)
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('metodo-saved') || '[]')
    } catch {
      return []
    }
  })
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('metodo-notes') || '{}')
    } catch {
      return {}
    }
  })
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('metodo-theme') === 'dark'
    } catch {
      return false
    }
  })
  const [onlySaved, setOnlySaved] = useState(false)
  const [activeTrack, setActiveTrack] = useState(null)
  const [mobileNav, setMobileNav] = useState(false)
  const [view, setView] = useState('home')
  const [searchFocused, setSearchFocused] = useState(false)
  const [activeQuickIdx, setActiveQuickIdx] = useState(0)
  const searchInputRef = useRef(null)
  const searchBoxRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', darkMode)
    try {
      localStorage.setItem('metodo-theme', darkMode ? 'dark' : 'light')
    } catch {}
  }, [darkMode])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash || ''
      if (hash.startsWith('#verbete/')) {
        const slug = decodeURIComponent(hash.replace('#verbete/', ''))
        const found = entries.find((e) => slugify(e.term) === slug || e.id.toLowerCase() === slug.toLowerCase())
        if (found) {
          setSelected(found)
          return
        }
      } else if (hash === '#biblioteca') {
        setSelected(null)
        setView('library')
      } else if (hash === '#sobre') {
        setSelected(null)
        setView('about')
      } else if (hash === '' || hash === '#inicio') {
        setSelected(null)
        setView('home')
      }
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSelected(null)
        setView('home')
        window.history.replaceState(null, '', '#inicio')
        setTimeout(() => {
          searchInputRef.current?.focus()
          searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 50)
      }
      if (e.key === 'Escape') {
        setSearchFocused(false)
      }
    }
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setSearchFocused(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => a.term.localeCompare(b.term, 'pt-BR')),
    []
  )

  const quickMatches = useMemo(() => {
    const q = normalizeText(query.trim())
    if (!q) return []
    return sortedEntries
      .filter((item) => {
        const haystack = normalizeText(
          [item.term, item.category, ...item.definition, ...item.related, ...item.references].join(' ')
        )
        return haystack.includes(q)
      })
      .sort((a, b) => {
        const aTerm = normalizeText(a.term).includes(q) ? 0 : 1
        const bTerm = normalizeText(b.term).includes(q) ? 0 : 1
        if (aTerm !== bTerm) return aTerm - bTerm
        return a.term.localeCompare(b.term, 'pt-BR')
      })
  }, [query, sortedEntries])

  useEffect(() => {
    setActiveQuickIdx(0)
  }, [query])

  const filtered = useMemo(
    () =>
      sortedEntries.filter((item) => {
        const q = normalizeText(query.trim())
        const haystack = normalizeText(
          [item.term, item.category, ...item.definition, ...item.related, ...item.references].join(' ')
        )
        const trackObj = studyTracks.find((t) => t.id === activeTrack)
        const matchesTrack =
          !trackObj ||
          trackObj.keywords.some((kw) =>
            normalizeText(`${item.term} ${item.definition[0] || ''}`).includes(normalizeText(kw))
          )
        return (
          (!q || haystack.includes(q)) &&
          (category === 'all' || item.categoryId === Number(category)) &&
          (!letter || item.term.toLocaleUpperCase('pt-BR').startsWith(letter)) &&
          (!onlySaved || saved.includes(item.id)) &&
          matchesTrack
        )
      }),
    [query, category, letter, onlySaved, saved, activeTrack, sortedEntries]
  )

  const savedEntries = useMemo(
    () => sortedEntries.filter((item) => saved.includes(item.id)),
    [saved, sortedEntries]
  )

  const toggleSaved = (id) => {
    const next = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id]
    setSaved(next)
    localStorage.setItem('metodo-saved', JSON.stringify(next))
  }

  const updateNote = (id, text) => {
    const next = { ...notes, [id]: text }
    if (!text.trim()) delete next[id]
    setNotes(next)
    localStorage.setItem('metodo-notes', JSON.stringify(next))
  }

  const openEntry = (item) => {
    setSelected(item)
    setSearchFocused(false)
    setMobileNav(false)
    window.history.pushState(null, '', `#verbete/${slugify(item.term)}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeEntry = () => {
    setSelected(null)
    const targetHash = view === 'library' ? '#biblioteca' : view === 'about' ? '#sobre' : '#inicio'
    window.history.pushState(null, '', targetHash)
  }

  const openHome = () => {
    setSelected(null)
    setView('home')
    setMobileNav(false)
    window.history.pushState(null, '', '#inicio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openLibrary = () => {
    setSelected(null)
    setView('library')
    setMobileNav(false)
    window.history.pushState(null, '', '#biblioteca')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAbout = () => {
    setSelected(null)
    setView('about')
    setMobileNav(false)
    window.history.pushState(null, '', '#sobre')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetFilters = () => {
    setQuery('')
    setCategory('all')
    setLetter('')
    setOnlySaved(false)
    setActiveTrack(null)
  }

  const selectedIndex = selected ? sortedEntries.findIndex((e) => e.id === selected.id) : -1
  const prevEntry = selectedIndex > 0 ? sortedEntries[selectedIndex - 1] : null
  const nextEntry =
    selectedIndex >= 0 && selectedIndex < sortedEntries.length - 1
      ? sortedEntries[selectedIndex + 1]
      : null

  return (
    <div className="app-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            resetFilters()
            openHome()
          }}
          aria-label="Metodologiário, início"
        >
          <span className="brand-mark">
            <BookOpen size={21} />
          </span>
          <span className="brand-name">
            <strong>Metodologiário</strong>
            <small>CIÊNCIA DA COMPUTAÇÃO</small>
          </span>
        </a>
        <nav className={`top-links ${mobileNav ? 'open' : ''}`}>
          <button
            type="button"
            className={view === 'home' && !selected ? 'nav-active' : ''}
            onClick={() => {
              resetFilters()
              openHome()
            }}
          >
            Explorar
          </button>
          <button
            type="button"
            className={view === 'library' && !selected ? 'nav-active' : ''}
            onClick={openLibrary}
          >
            Minha Biblioteca <span className="saved-count">{saved.length}</span>
          </button>
          <button
            type="button"
            className={view === 'about' && !selected ? 'nav-active' : ''}
            onClick={openAbout}
          >
            Sobre o projeto
          </button>
        </nav>
        <div className="top-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={darkMode ? 'Modo claro' : 'Modo escuro'}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <span className="edition-tag">UEPB · 2026</span>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMobileNav(!mobileNav)}
            aria-label="Abrir menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {selected ? (
        <EntryDetail
          item={selected}
          saved={saved.includes(selected.id)}
          note={notes[selected.id] || ''}
          onSave={() => toggleSaved(selected.id)}
          onNoteChange={(val) => updateNote(selected.id, val)}
          onBack={closeEntry}
          onOpen={openEntry}
          onAbout={openAbout}
          prevEntry={prevEntry}
          nextEntry={nextEntry}
        />
      ) : view === 'library' ? (
        <LibraryView
          items={savedEntries}
          notes={notes}
          onOpen={openEntry}
          onRemove={toggleSaved}
          onBack={openHome}
          onAbout={openAbout}
        />
      ) : view === 'about' ? (
        <About onBack={openHome} onAbout={openAbout} />
      ) : (
        <>
          <main id="inicio">
            <section className="hero">
              <div className="hero-grid"></div>
              <div className="hero-content">
                <div className="eyebrow">
                  <span className="eyebrow-line"></span> UM GUIA PARA QUEM PESQUISA
                </div>
                <h1>
                  Ideias que viram
                  <br />
                  <em>conhecimento.</em>
                </h1>
                <p className="hero-copy">
                  Um dicionário de metodologia científica pensado para a jornada de pesquisa em Ciência da Computação.
                </p>

                <div ref={searchBoxRef} className="search-wrapper">
                  <div className="hero-search">
                    <Search size={20} />
                    <input
                      ref={searchInputRef}
                      value={query}
                      onFocus={() => setSearchFocused(true)}
                      onChange={(e) => {
                        setQuery(e.target.value)
                        setLetter('')
                        setSearchFocused(true)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown' && quickMatches.length > 0) {
                          e.preventDefault()
                          setActiveQuickIdx((prev) =>
                            Math.min(prev + 1, Math.min(quickMatches.length, 6) - 1)
                          )
                        } else if (e.key === 'ArrowUp' && quickMatches.length > 0) {
                          e.preventDefault()
                          setActiveQuickIdx((prev) => Math.max(prev - 1, 0))
                        } else if (e.key === 'Enter' && query.trim()) {
                          if (searchFocused && quickMatches[activeQuickIdx]) {
                            openEntry(quickMatches[activeQuickIdx])
                          } else {
                            setSearchFocused(false)
                            document.getElementById('verbetes')?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }
                      }}
                      placeholder="Busque um conceito, método ou autor..."
                      aria-label="Buscar verbetes"
                    />
                    {query && (
                      <button
                        type="button"
                        className="clear-search-btn"
                        onClick={() => {
                          setQuery('')
                          searchInputRef.current?.focus()
                        }}
                        aria-label="Limpar busca"
                      >
                        <X size={16} />
                      </button>
                    )}
                    <kbd>Ctrl + K</kbd>
                  </div>

                  {searchFocused && query.trim() !== '' && (
                    <div className="search-dropdown" role="listbox" aria-label="Resultados rápidos">
                      {quickMatches.length > 0 ? (
                        <>
                          {quickMatches.slice(0, 6).map((item, idx) => (
                            <button
                              type="button"
                              key={item.id}
                              className={`search-dropdown-item ${idx === activeQuickIdx ? 'active' : ''}`}
                              onMouseEnter={() => setActiveQuickIdx(idx)}
                              onClick={() => openEntry(item)}
                            >
                              <span className="search-dropdown-text">
                                <strong>
                                  <HighlightedText text={item.term} query={query} />
                                </strong>
                                <small>
                                  {item.category} —{' '}
                                  <HighlightedText text={item.definition[0] || ''} query={query} />
                                </small>
                              </span>
                              <ArrowUpRight size={16} />
                            </button>
                          ))}
                          <button
                            type="button"
                            className="search-dropdown-footer"
                            onClick={() => {
                              setSearchFocused(false)
                              document.getElementById('verbetes')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                          >
                            <span>Ver todos os {quickMatches.length} resultados na lista</span>
                            <ChevronRight size={15} />
                          </button>
                        </>
                      ) : (
                        <div className="search-dropdown-empty">
                          Nenhum verbete encontrado para “{query}”.
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="hero-meta">
                  <span>
                    <BookOpen size={15} /> {entries.length} Verbetes
                  </span>
                  <i></i>
                  <span>
                    <Layers3 size={15} /> {categories.length} Categorias
                  </span>
                  <i></i>
                  <span>
                    <ShieldCheck size={15} /> Referências Acadêmicas
                  </span>
                </div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="art-core">
                  <LibraryBig size={56} strokeWidth={1.1} />
                </div>
                <span className="art-chip chip-a">MÉTODO</span>
                <span className="art-chip chip-b">PESQUISA</span>
                <span className="art-chip chip-c">CIÊNCIA</span>
                <span className="art-dot dot-a"></span>
                <span className="art-dot dot-b"></span>
              </div>
              <div className="hero-bottom">
                <span>UNIVERSIDADE ESTADUAL DA PARAÍBA</span>
                <span>CAMPUS VII — PATOS / PB</span>
              </div>
            </section>

            <section className="stats-strip">
              <div>
                <strong>{entries.length}</strong>
                <span>verbetes catalogados</span>
              </div>
              <div>
                <strong>0{categories.length}</strong>
                <span>eixos de conhecimento</span>
              </div>
              <div>
                <strong>A–Z</strong>
                <span>índice alfabético</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>base documental da equipe</span>
              </div>
            </section>

            <section className="content-section category-section">
              <div className="section-heading">
                <div>
                  <div className="eyebrow dark">
                    <span className="eyebrow-line"></span> NAVEGAÇÃO POR ASSUNTO
                  </div>
                  <h2>
                    Explore por <em>categoria.</em>
                  </h2>
                  <p>Encontre o caminho certo para cada etapa da sua pesquisa.</p>
                </div>
                <span className="section-index">01 / 03</span>
              </div>
              <div className="category-grid">
                {categories.map((cat, i) => {
                  const Icon = cat.icon
                  return (
                    <button
                      type="button"
                      className={`category-card ${cat.color} ${category === String(cat.id) ? 'active' : ''}`}
                      key={cat.id}
                      onClick={() => {
                        setCategory(category === String(cat.id) ? 'all' : String(cat.id))
                        setLetter('')
                        setOnlySaved(false)
                        setActiveTrack(null)
                        document.getElementById('verbetes')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <div className="cat-card-top">
                        <span className="cat-icon">
                          <Icon size={22} />
                        </span>
                        <span className="cat-number">0{i + 1}</span>
                      </div>
                      <span className="cat-kicker">{cat.short}</span>
                      <h3>{cat.title}</h3>
                      <p>{cat.description}</p>
                      <div className="cat-card-bottom">
                        <span>{entries.filter((x) => x.categoryId === cat.id).length} verbetes</span>
                        <span className="round-arrow">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="tracks-bar">
                <div className="tracks-label">
                  <Compass size={15} />
                  <span>Trilhas de estudo:</span>
                </div>
                <div className="tracks-list">
                  {studyTracks.map((track) => (
                    <button
                      type="button"
                      key={track.id}
                      className={`track-chip ${activeTrack === track.id ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTrack(activeTrack === track.id ? null : track.id)
                        setCategory('all')
                        setLetter('')
                        setOnlySaved(false)
                        document.getElementById('verbetes')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      title={track.subtitle}
                    >
                      {track.title}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="content-section dictionary-section" id="verbetes">
              <div className="section-heading dictionary-heading">
                <div>
                  <div className="eyebrow dark">
                    <span className="eyebrow-line"></span> DICIONÁRIO CIENTÍFICO
                  </div>
                  <h2>
                    Conhecimento em <em>ordem.</em>
                  </h2>
                  <p>Consulte os verbetes, descubra relações e aprofunde sua compreensão.</p>
                </div>
                <span className="section-index">02 / 03</span>
              </div>
              <div className="dictionary-tools">
                <div className="result-count">
                  <strong>{filtered.length.toString().padStart(2, '0')}</strong>
                  <span>{onlySaved ? 'itens salvos' : 'verbetes encontrados'}</span>
                </div>
                <div className="filter-controls">
                  <button
                    type="button"
                    className={`filter-pill ${onlySaved ? 'selected' : ''}`}
                    onClick={() => setOnlySaved(!onlySaved)}
                  >
                    <Bookmark size={15} /> Salvos
                  </button>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value)
                      setLetter('')
                      setOnlySaved(false)
                      setActiveTrack(null)
                    }}
                    aria-label="Filtrar por categoria"
                  >
                    <option value="all">Todas as categorias</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.short}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="alphabet" aria-label="Filtrar por letra">
                {alphabet.map((l) => (
                  <button
                    type="button"
                    key={l}
                    className={letter === l ? 'chosen' : ''}
                    onClick={() => setLetter(letter === l ? '' : l)}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="active-filters">
                {(query || letter || category !== 'all' || onlySaved || activeTrack) && (
                  <>
                    <span>Filtros ativos</span>
                    {query && (
                      <button type="button" onClick={() => setQuery('')}>
                        “{query}” <X size={12} />
                      </button>
                    )}
                    {letter && (
                      <button type="button" onClick={() => setLetter('')}>
                        Letra {letter} <X size={12} />
                      </button>
                    )}
                    {category !== 'all' && (
                      <button type="button" onClick={() => setCategory('all')}>
                        {categories.find((c) => c.id === Number(category))?.short} <X size={12} />
                      </button>
                    )}
                    {activeTrack && (
                      <button type="button" onClick={() => setActiveTrack(null)}>
                        Trilha: {studyTracks.find((t) => t.id === activeTrack)?.title} <X size={12} />
                      </button>
                    )}
                    {onlySaved && (
                      <button type="button" onClick={() => setOnlySaved(false)}>
                        Salvos <X size={12} />
                      </button>
                    )}
                    <button type="button" className="clear-filter" onClick={resetFilters}>
                      Limpar tudo
                    </button>
                  </>
                )}
              </div>
              <div className="entry-list">
                {filtered.map((item, index) => (
                  <article className="entry-row" key={item.id}>
                    <button type="button" className="entry-main" onClick={() => openEntry(item)}>
                      <span className="entry-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="entry-info">
                        <span className="entry-category">
                          {item.category}
                          {notes[item.id] ? ' · Com nota' : ''}
                        </span>
                        <strong>
                          <HighlightedText text={item.term} query={query} />
                        </strong>
                        <small>
                          <HighlightedText
                            text={`${item.definition[0]?.slice(0, 155) || ''}${
                              (item.definition[0]?.length || 0) > 155 ? '…' : ''
                            }`}
                            query={query}
                          />
                        </small>
                      </span>
                      <span className="entry-code">{item.code}</span>
                      <ChevronRight className="entry-chevron" size={19} />
                    </button>
                    <button
                      type="button"
                      className="save-entry"
                      onClick={() => toggleSaved(item.id)}
                      aria-label={saved.includes(item.id) ? 'Remover dos salvos' : 'Salvar verbete'}
                    >
                      {saved.includes(item.id) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                    </button>
                  </article>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="empty-state">
                  <Search size={28} />
                  <h3>Nenhum verbete encontrado</h3>
                  <p>Tente outro termo ou remova os filtros aplicados.</p>
                  <button type="button" className="text-button" onClick={resetFilters}>
                    Limpar filtros <ArrowUpRight size={15} />
                  </button>
                </div>
              )}
            </section>

            <section className="content-section expansion-section">
              <AbntQuickGuide />
            </section>
          </main>
          <Footer onAbout={openAbout} />
        </>
      )}
    </div>
  )
}

function AbntQuickGuide() {
  const [copiedKey, setCopiedKey] = useState('')
  const originUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://metodologiario.uepb.edu.br'
  const todayStr = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  const projectRef = `RODRIGUES, Otelo et al. Metodologiário: dicionário de metodologia científica para a Ciência da Computação. Orientação: Profa. Dra. Rosangela de Araujo Medeiros. Patos, PB: UEPB, 2026. Disponível em: <${originUrl}>. Acesso em: ${todayStr}`

  const entryExampleRef = `VERBETE. In: RODRIGUES, Otelo et al. Metodologiário: dicionário de metodologia científica para a Ciência da Computação. Patos, PB: UEPB, 2026. Disponível em: <${originUrl}#verbete/slug>. Acesso em: ${todayStr}`

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(''), 2000)
    } catch {}
  }

  return (
    <div className="expansion-card abnt-guide-card">
      <div className="expansion-copy">
        <div className="eyebrow">
          <span className="eyebrow-line"></span> REFERÊNCIA ACADÊMICA · NBR 6023
        </div>
        <h2>
          Como citar este
          <br />
          <em>projeto em ABNT.</em>
        </h2>
        <p>
          Use os modelos abaixo para referenciar o Metodologiário como um todo ou um verbete específico em artigos, projetos de pesquisa e TCCs.
        </p>
        <div className="abnt-in-text">
          <span>Citação no texto:</span>
          <code>(RODRIGUES et al., 2026)</code>
          <span>ou</span>
          <code>segundo Rodrigues et al. (2026)</code>
        </div>
      </div>

      <div className="abnt-examples">
        <div className="abnt-box">
          <div className="abnt-box-head">
            <span>01 · OBRA COMPLETA (DICIONÁRIO)</span>
            <button type="button" onClick={() => handleCopy('obra', projectRef)}>
              {copiedKey === 'obra' ? <Check size={13} /> : <Copy size={13} />}
              {copiedKey === 'obra' ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
          <p>{projectRef}</p>
        </div>

        <div className="abnt-box">
          <div className="abnt-box-head">
            <span>02 · VERBETE ESPECÍFICO</span>
            <button type="button" onClick={() => handleCopy('verbete', entryExampleRef)}>
              {copiedKey === 'verbete' ? <Check size={13} /> : <Copy size={13} />}
              {copiedKey === 'verbete' ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
          <p>{entryExampleRef}</p>
        </div>
      </div>
    </div>
  )
}

function LibraryView({ items, notes, onOpen, onRemove, onBack, onAbout }) {
  const [flashcardMode, setFlashcardMode] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [copiedAll, setCopiedAll] = useState(false)

  useEffect(() => {
    setCardIndex(0)
    setFlipped(false)
  }, [items.length])

  const exportMarkdownFile = () => {
    const content = [
      '# Minha Biblioteca — Metodologiário (UEPB · 2026)',
      '',
      `Exportado em ${new Date().toLocaleDateString('pt-BR')} · ${items.length} verbete(s).`,
      '',
      '---',
      '',
      ...items.map((item) => formatMarkdownNote(item, notes[item.id])),
    ].join('\n')

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'metodologiario-minha-biblioteca.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  const copyAllAbnt = async () => {
    const text = items.map((item) => formatAbntCitation(item)).join('\n\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2200)
    } catch {}
  }

  const currentCard = items[cardIndex] || null

  return (
    <>
      <main className="about-page">
        <button type="button" className="back-link" onClick={onBack}>
          <ArrowLeft size={16} /> Voltar ao dicionário
        </button>
        <div className="about-hero library-header">
          <div>
            <div className="eyebrow dark">
              <span className="eyebrow-line"></span> ACERVO PESSOAL
            </div>
            <h1>
              Minha biblioteca<span>.</span>
            </h1>
            <p>
              {items.length === 0
                ? 'Você ainda não salvou nenhum verbete para consulta rápida.'
                : `${items.length} ${items.length === 1 ? 'verbete salvo' : 'verbetes salvos'} neste navegador.`}
            </p>
          </div>

          {items.length > 0 && (
            <div className="library-actions">
              <button
                type="button"
                className={`filter-pill ${flashcardMode ? 'selected' : ''}`}
                onClick={() => {
                  setFlashcardMode(!flashcardMode)
                  setFlipped(false)
                }}
              >
                <Sparkles size={14} /> {flashcardMode ? 'Ver lista' : 'Modo Flashcards'}
              </button>
              <button type="button" className="filter-pill" onClick={copyAllAbnt}>
                {copiedAll ? <Check size={14} /> : <Copy size={14} />}
                {copiedAll ? 'Citações copiadas!' : 'Copiar ABNT'}
              </button>
              <button type="button" className="filter-pill" onClick={exportMarkdownFile}>
                <Download size={14} /> Exportar .md
              </button>
            </div>
          )}
        </div>

        {items.length > 0 ? (
          flashcardMode && currentCard ? (
            <div className="flashcard-stage">
              <div className="flashcard-progress">
                <span>
                  Cartão {cardIndex + 1} de {items.length}
                </span>
                <span>Clique no cartão para virar</span>
              </div>
              <div
                className={`flashcard ${flipped ? 'is-flipped' : ''}`}
                onClick={() => setFlipped(!flipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    setFlipped(!flipped)
                  }
                }}
              >
                <span className="flashcard-badge">
                  {flipped ? 'DEFINIÇÃO' : currentCard.category}
                </span>
                {!flipped ? (
                  <>
                    <h2>{currentCard.term}</h2>
                    <p className="flashcard-hint">
                      Tente formular o conceito mentalmente antes de revelar a definição.
                    </p>
                  </>
                ) : (
                  <div className="flashcard-answer">
                    <h3>{currentCard.term}</h3>
                    <p>{currentCard.definition[0]}</p>
                  </div>
                )}
              </div>
              <div className="flashcard-controls">
                <button
                  type="button"
                  className="filter-pill"
                  disabled={cardIndex === 0}
                  onClick={() => {
                    setCardIndex((i) => Math.max(0, i - 1))
                    setFlipped(false)
                  }}
                >
                  <ArrowLeft size={14} /> Anterior
                </button>
                <button
                  type="button"
                  className="filter-pill"
                  onClick={() => setFlipped(!flipped)}
                >
                  <RotateCcw size={14} /> Virar cartão
                </button>
                <button
                  type="button"
                  className="filter-pill"
                  disabled={cardIndex === items.length - 1}
                  onClick={() => {
                    setCardIndex((i) => Math.min(items.length - 1, i + 1))
                    setFlipped(false)
                  }}
                >
                  Próximo <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="entry-list">
              {items.map((item, index) => (
                <article className="entry-row" key={item.id}>
                  <button type="button" className="entry-main" onClick={() => onOpen(item)}>
                    <span className="entry-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="entry-info">
                      <span className="entry-category">
                        {item.category}
                        {notes[item.id] ? ' · Com nota pessoal' : ''}
                      </span>
                      <strong>{item.term}</strong>
                      <small>
                        {item.definition[0]?.slice(0, 155)}
                        {item.definition[0]?.length > 155 ? '…' : ''}
                      </small>
                    </span>
                    <span className="entry-code">{item.code}</span>
                    <ChevronRight className="entry-chevron" size={19} />
                  </button>
                  <button
                    type="button"
                    className="save-entry"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remover dos salvos"
                    title="Remover dos salvos"
                  >
                    <BookmarkCheck size={18} />
                  </button>
                </article>
              ))}
            </div>
          )
        ) : (
          <div className="empty-state">
            <Bookmark size={28} />
            <h3>Sua biblioteca está vazia</h3>
            <p>Clique no ícone de marcador ao lado de qualquer verbete para guardá-lo aqui.</p>
            <button type="button" className="text-button" onClick={onBack}>
              Explorar verbetes <ArrowUpRight size={15} />
            </button>
          </div>
        )}
      </main>
      <Footer onAbout={onAbout} />
    </>
  )
}

function EntryDetail({
  item,
  saved,
  note,
  onSave,
  onNoteChange,
  onBack,
  onOpen,
  onAbout,
  prevEntry,
  nextEntry,
}) {
  const [copiedType, setCopiedType] = useState('') // 'abnt' | 'md' | 'link'

  const relatedItems = (item.related || [])
    .map((name) => {
      const target = normalizeText(name.trim())
      return entries.find((e) => {
        const term = normalizeText(e.term.trim())
        return term === target || term.startsWith(target) || target.startsWith(term)
      })
    })
    .filter((v, i, arr) => v && v.id !== item.id && arr.findIndex((x) => x?.id === v.id) === i)

  const cleanReferences = (item.references || []).filter((ref) => !/^\d+\.\d+\s/.test(ref.trim()))
  const readingMinutes = estimateReadingMinutes(item)

  const handleCopy = async (type) => {
    let payload = ''
    if (type === 'abnt') payload = formatAbntCitation(item)
    if (type === 'md') payload = formatMarkdownNote(item, note)
    if (type === 'link') {
      payload = `${window.location.origin}${window.location.pathname}#verbete/${slugify(item.term)}`
    }
    try {
      await navigator.clipboard.writeText(payload)
      setCopiedType(type)
      setTimeout(() => setCopiedType(''), 2000)
    } catch {}
  }

  return (
    <>
      <main className="detail-page">
        <button type="button" className="back-link" onClick={onBack}>
          <ArrowLeft size={16} /> Voltar ao dicionário
        </button>
        <div className="detail-layout">
          <article className="detail-article">
            <div className="detail-kicker">
              <span>{item.category}</span>
              <span className="detail-code">
                {item.code} · {item.id}
              </span>
              <span className="reading-badge">
                <Clock size={12} /> ~{readingMinutes} min de leitura
              </span>
            </div>
            <h1>{item.term}</h1>
            <div className="detail-rule"></div>
            <div className="detail-content">
              {item.definition.map((p, i) => (
                <AutoLinkedParagraph
                  key={i}
                  text={p}
                  currentId={item.id}
                  allEntries={entries}
                  onOpen={onOpen}
                />
              ))}
            </div>
            {relatedItems.length > 0 && (
              <section className="related-block">
                <div className="eyebrow dark">
                  <span className="eyebrow-line"></span> CONTINUE EXPLORANDO
                </div>
                <h3>Ver também</h3>
                <div className="related-links">
                  {relatedItems.map((r) => (
                    <button type="button" key={r.id} onClick={() => onOpen(r)}>
                      {r.term}
                      <ArrowUpRight size={15} />
                    </button>
                  ))}
                </div>
              </section>
            )}
            <section className="references-block">
              <div className="eyebrow dark">
                <span className="eyebrow-line"></span> BASE BIBLIOGRÁFICA
              </div>
              <h3>Referências</h3>
              {cleanReferences.length ? (
                cleanReferences.map((ref, i) => {
                  const fixedRef = ref.replace(
                    /(https?:\/\/[^\s]+)\s+([a-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+)/gi,
                    '$1$2'
                  )
                  const urlMatch = (fixedRef.match(/https?:\/\/[^\s]+/) || [])[0]
                  return (
                    <div className="reference-item" key={i}>
                      <span className="ref-number">{String(i + 1).padStart(2, '0')}</span>
                      <p>{fixedRef}</p>
                      {urlMatch && (
                        <a
                          href={urlMatch.replace(/[.,;]+$/, '')}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Abrir fonte"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  )
                })
              ) : (
                <p className="no-reference">O documento-base não apresenta referências neste verbete.</p>
              )}
            </section>

            <nav className="entry-pagination" aria-label="Navegação entre verbetes">
              {prevEntry ? (
                <button type="button" className="page-nav-btn" onClick={() => onOpen(prevEntry)}>
                  <ArrowLeft size={15} />
                  <span>
                    <small>Anterior</small>
                    <strong>{prevEntry.term}</strong>
                  </span>
                </button>
              ) : (
                <div></div>
              )}
              {nextEntry ? (
                <button
                  type="button"
                  className="page-nav-btn next"
                  onClick={() => onOpen(nextEntry)}
                >
                  <span>
                    <small>Próximo</small>
                    <strong>{nextEntry.term}</strong>
                  </span>
                  <ArrowRight size={15} />
                </button>
              ) : (
                <div></div>
              )}
            </nav>
          </article>
          <aside className="detail-aside">
            <div className="aside-card">
              <span className="aside-label">FICHA DO VERBETE</span>
              <div className="aside-icon">
                <BookOpen size={22} />
              </div>
              <h3>{item.term}</h3>
              <p>
                Parte do acervo do Metodologiário, dicionário de metodologia científica para a Ciência da Computação.
              </p>
              <div className="aside-meta">
                <span>Identificador</span>
                <strong>{item.id}</strong>
              </div>
              <div className="aside-meta">
                <span>Seção no documento</span>
                <strong>{item.code}</strong>
              </div>
              <div className="aside-meta">
                <span>Categoria</span>
                <strong>{item.category}</strong>
              </div>
              <button
                type="button"
                className={`save-large ${saved ? 'is-saved' : ''}`}
                onClick={onSave}
              >
                {saved ? <BookmarkCheck size={17} /> : <Bookmark size={17} />}{' '}
                {saved ? 'Salvo na biblioteca' : 'Salvar verbete'}
              </button>

              <div className="academic-tools">
                <button type="button" onClick={() => handleCopy('abnt')}>
                  {copiedType === 'abnt' ? <Check size={14} /> : <Copy size={14} />}
                  {copiedType === 'abnt' ? 'Citação ABNT copiada!' : 'Copiar citação ABNT'}
                </button>
                <button type="button" onClick={() => handleCopy('md')}>
                  {copiedType === 'md' ? <Check size={14} /> : <FileText size={14} />}
                  {copiedType === 'md' ? 'Markdown copiado!' : 'Copiar para Obsidian (.md)'}
                </button>
                <button type="button" onClick={() => handleCopy('link')}>
                  {copiedType === 'link' ? <Check size={14} /> : <Share2 size={14} />}
                  {copiedType === 'link' ? 'Link copiado!' : 'Copiar link direto'}
                </button>
              </div>
            </div>

            <div className="notes-card">
              <div className="notes-header">
                <StickyNote size={15} />
                <span>MINHAS ANOTAÇÕES</span>
              </div>
              <textarea
                rows={4}
                value={note}
                onChange={(e) => onNoteChange(e.target.value)}
                placeholder="Anote como este conceito se aplica ao seu TCC ou artigo..."
                aria-label="Anotações pessoais sobre o verbete"
              />
              <small>Salvo automaticamente neste navegador.</small>
            </div>

            <div className="source-note">
              <ShieldCheck size={17} />
              <p>
                <strong>Integridade acadêmica</strong>
                Conteúdo transcrito e organizado a partir do documento-base da equipe. Sínteses e exemplos mantêm as sinalizações do material original.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer onAbout={onAbout} />
    </>
  )
}

function About({ onBack, onAbout }) {
  return (
    <>
      <main className="about-page">
        <button type="button" className="back-link" onClick={onBack}>
          <ArrowLeft size={16} /> Voltar ao início
        </button>
        <div className="about-hero">
          <div className="eyebrow dark">
            <span className="eyebrow-line"></span> SOBRE O PROJETO
          </div>
          <h1>
            Metodologiário<span>.</span>
          </h1>
          <p>Dicionário de metodologia científica para a Ciência da Computação.</p>
        </div>
        <div className="about-grid">
          <section>
            <h2>Uma ferramenta para a jornada científica.</h2>
            <p>
              O Metodologiário reúne conceitos de metodologia científica relevantes para a formação e a trajetória de pesquisa em Ciência da Computação. A organização combina navegação por categorias, índice alfabético, busca por termos e relações entre verbetes.
            </p>
            <p>
              Esta versão digital foi estruturada a partir do documento acadêmico fornecido pela equipe da Universidade Estadual da Paraíba — Campus VII, Patos.
            </p>
          </section>
          <aside>
            <span>INSTITUIÇÃO</span>
            <strong>Universidade Estadual da Paraíba</strong>
            <span>CURSO</span>
            <strong>Ciência da Computação</strong>
            <span>DISCIPLINA</span>
            <strong>Metodologia Científica</strong>
            <span>DOCENTE</span>
            <strong>Profa. Dra. Rosangela de Araujo Medeiros</strong>
            <span>LOCAL / ANO</span>
            <strong>Patos — PB · 2026</strong>
          </aside>
        </div>
        <div className="team-block">
          <div className="eyebrow dark">
            <span className="eyebrow-line"></span> EQUIPE DO DOCUMENTO-BASE
          </div>
          <div className="team-grid">
            {[
              'Otelo Rodrigues',
              'Cleiton Emanuel',
              'Emanuel',
              'José Fidélis',
              'Juan Souza',
              'Kledir Medeiros',
            ].map((n, i) => (
              <div key={n}>
                <span>0{i + 1}</span>
                {n}
              </div>
            ))}
          </div>
        </div>
        <div className="method-note">
          <Info size={20} />
          <div>
            <strong>Sobre a verificação das fontes</strong>
            <p>
              O documento registra limites de conferência: livros de Gil, Wazlawick e Severino não foram lidos integralmente; normas ABNT são pagas e precisam ser conferidas nos documentos originais; links podem mudar. Por isso, esta interface não apresenta como verificado algo que o material não confirma.
            </p>
          </div>
        </div>
      </main>
      <Footer onAbout={onAbout} />
    </>
  )
}

function Footer({ onAbout }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-mark">
          <BookOpen size={18} />
        </span>
        <div>
          <strong>
            metodologiário<span>.</span>
          </strong>
          <small>CONHECIMENTO EM MOVIMENTO.</small>
        </div>
      </div>
      <div className="footer-center">
        Universidade Estadual da Paraíba · Campus VII — Patos/PB
      </div>
      <button
        type="button"
        onClick={onAbout || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
      >
        Sobre o projeto <ArrowUpRight size={14} />
      </button>
      <div className="footer-bottom">
        © 2026 Metodologiário · Projeto acadêmico · Ciência da Computação
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(<App />)