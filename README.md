Metodologiário — Dicionário de Metodologia Científica para a Ciência da Computação

Ideias claras. Pesquisa melhor.

Um dicionário vivo e interativo para apoiar estudantes e pesquisadores na compreensão de conceitos, métodos, normas e práticas da pesquisa científica em Ciência da Computação.

Sobre o Projeto

O Metodologiário é uma aplicação web desenvolvida como trabalho acadêmico da disciplina de Metodologia Científica, do curso de Bacharelado em Ciência da Computação da Universidade Estadual da Paraíba (UEPB) — Campus VII (Patos — PB).

O projeto organiza 45 verbetes estruturados de forma híbrida (categorias temáticas + índice alfabético A–Z), com definições fundamentadas na literatura clássica e contemporânea da área, conexões cruzadas entre conceitos, níveis de rastreabilidade das fontes e referências padronizadas segundo a ABNT NBR 6023:2025 e NBR 10520:2023.

Funcionalidades Principais

Organização Híbrida (Categorias + A–Z): Navegação por 4 grandes eixos temáticos ou pelo índice alfabético permanente, com busca instantânea insensível a acentos (normalize("NFD")).

Busca Rápida Global (Ctrl + K / Cmd + K): Modal de acesso imediato a qualquer termo, autor ou palavra-chave a partir de qualquer tela.

Conexões Cruzadas (Ver também): Chips clicáveis dentro de cada verbete que conectam conceitos relacionados, acompanhados de navegação sequencial (Anterior / Próximo).

Favoritos para Estudo: Possibilidade de favoritar verbetes (★ Salvos) com persistência local no navegador (localStorage).

Guia ABNT & Montador Rápido de Referências: Painel de consulta rápida às normas vigentes (NBR 6023:2025, 10520:2023, 14724:2024, 15287:2025 e 6028:2021) com ferramenta interativa para estruturar referências e copiar citações em 1 clique.

Rastreabilidade e Transparência Acadêmica: Exibição dos selos de verificação bibliográfica (Selos A, B, C e D), ressalvas de conferência e declaração explícita de uso responsável de IA.

Temas Escuro e Claro: Alternância de tema com memória de preferência do usuário e suporte a prefers-reduced-motion.

URLs Compartilháveis: Sincronização via hash (#verbete-4.1.1, #dicionario, #abnt, #equipe, #fontes) para compartilhamento direto de termos.

Estrutura de Arquivos

metodologiario/
├── index.html      # Estrutura base, metadados, fontes e carregamento do React 18
├── styles.css      # Identidade visual, temas (dark/light), animações e responsividade
├── app.js          # Base de dados dos 45 verbetes, filtros, busca rápida e componentes React
├── logo.png        # Identidade visual / logotipo do Metodologiário
└── README.md       # Documentação do repositório


Eixos Temáticos do Dicionário

4.1 — Ciência, conhecimento e método (10 verbetes)

Ciência, Ciência e tecnologia, Dados/informação/conhecimento, Método científico, Indução, Refutação (falseabilidade), Lâmina de Occam, Programa de pesquisa, Hipótese, Variáveis e definições operacionais.

4.2 — Pesquisa: planejamento, tipos e métodos (13 verbetes)

Pesquisa, Problema de pesquisa, Objetivos de pesquisa, Tipos de pesquisa (Wazlawick), Estilos de pesquisa em Computação, Revisão bibliográfica, Ficha de leitura, Revisão sistemática da literatura, PRISMA 2020, Estudo de caso, Experimento controlado, Design Science Research, Ameaças à validade e limitações.

4.3 — Trabalho científico, escrita e normas (12 verbetes)

Tipos de trabalho científico, Estrutura de trabalho científico, Projeto de pesquisa, Resumo, Artigo científico, Monografia/dissertação/tese, Normas ABNT, Referência (NBR 6023), Citação (NBR 10520), Normas APA, Plágio e direitos autorais, Ética em pesquisa.

4.4 — Comunicação científica, avaliação e acesso à literatura (10 verbetes)

Eventos científicos da área, Periódicos da área, Qualis e avaliação da produção, Associações científicas (SBC, ACM e IEEE), Repositórios e portais científicos, Plataformas de acesso, IAs acadêmicas, Preprints, Ciência aberta e princípios FAIR, Índice h.

Como Executar Localmente

O projeto foi construído sem necessidade de etapa de build (React 18 via CDN + HTML/CSS/JS puros), podendo ser executado diretamente:

Clone este repositório:

git clone https://github.com/seu-usuario/metodologiario.git


Acesse a pasta do projeto:

cd metodologiario


Abra o arquivo index.html diretamente no navegador ou sirva-o com um servidor estático local (por exemplo, a extensão Live Server do VS Code ou npx serve .).

Equipe e Orientação

Discentes (Ciência da Computação — UEPB, Campus VII):

Otelo Rodrigues

Cleiton Manoel

Emanuel Medeiros

José Fidélis

Juan Souza

Kledir Medeiros

Orientação:

Profa. Dra. Rosangela de Araujo Medeiros (Disciplina: Metodologia Científica)

Licença e Uso Acadêmico

Material desenvolvido para fins educacionais e de apoio à pesquisa acadêmica na Universidade Estadual da Paraíba (UEPB) — 2026. Ao citar verbetes deste projeto, utilize o botão "Citar este verbete (ABNT)" disponível na página de cada termo.
