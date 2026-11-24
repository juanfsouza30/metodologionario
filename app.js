const {useMemo, useState, useEffect} = React;
const h = React.createElement;

const entries = [{"id": "4.1.1", "term": "Ciência", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Ciência e tecnologia; Método científico; Programa de pesquisa.", "body": ["De modo geral, ciência é a atividade organizada de produção de conhecimento que procura descrever, explicar e prever fenômenos por meio de métodos que a comunidade científica pode examinar e criticar. Em Ciência da Computação, a pergunta “o que torna um trabalho científico?” é recorrente, e por isso os livros de metodologia da área começam situando o campo entre as classificações das ciências.", "Wazlawick (2014, cap. 2) apresenta a Computação à luz de várias classificações: ciências formais e empíricas, puras e aplicadas, exatas e inexatas, hard e soft, nomotéticas e idiográficas. O relatório de Denning et al. (1989), produzido por um grupo de trabalho da ACM, parte do debate sobre se a Computação seria ciência, engenharia ou mera tecnologia e propõe tratá-la como uma disciplina que articula teoria, abstração (modelagem) e projeto (design)."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "DENNING, Peter J. et al. Computing as a discipline. Communications of the ACM, New York, v. 32, n. 1, p. 9-23, jan. 1989. Disponível em: https://doi.org/10.1145/63238.63239. Acesso em: 2 nov. 2026."], "seal": "A/B"}, {"id": "4.1.2", "term": "Ciência e tecnologia", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Ciência; Design Science Research; Objetivos de pesquisa.", "body": ["Ciência e tecnologia se complementam, mas têm propósitos distintos: a ciência busca ampliar o conhecimento sobre um fenômeno (descrever, explicar, prever), enquanto a tecnologia busca construir artefatos, técnicas e soluções para problemas práticos. Na Computação as duas atividades se misturam com frequência, o que torna indispensável deixar claro qual é o produto principal do trabalho.", "Wazlawick (2014) dedica uma seção à relação entre ciência e tecnologia (seção 4.4) e outra à diferença entre objetivo de pesquisa e objetivo técnico (seção 6.3.2). Como síntese da equipe: construir um sistema é, em si, um objetivo técnico; para que o trabalho seja científico, é preciso formular um problema, uma hipótese e um método capaz de avaliar a contribuição do artefato ao conhecimento da área.", "Uma abordagem que trabalha justamente essa fronteira é a design science, segundo a qual o conhecimento sobre um problema e sua solução é obtido na construção e na aplicação de um artefato projetado (Hevner et al., 2004)."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "HEVNER, Alan R. et al. Design science in information systems research. MIS Quarterly, [S. l.], v. 28, n. 1, p. 75-105, mar. 2004. Disponível em: https://doi.org/10.2307/25148625. Acesso em: 2 nov. 2026."], "seal": "A/B"}, {"id": "4.1.3", "term": "Dados, informação e conhecimento", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Ciência; Variáveis e definições operacionais.", "body": ["Setzer (1999) propõe um caminho do mais formal ao menos formal: parte do dado, que pode ser definido matematicamente, e acrescenta características para chegar aos demais conceitos. Para o autor, dado é uma sequência de símbolos quantificados ou quantificáveis; informação é uma abstração informal, ligada ao significado que alguém atribui aos dados; conhecimento é uma abstração pessoal que exige vivência do objeto conhecido; e a competência depende de dois fatores, o que leva à chamada matriz de competências.", "Um ponto útil para quem pesquisa em Computação: segundo o autor, o processamento de dados em um computador se limita a manipulações estruturais dos dados; atribuir significado (informação) e construir conhecimento são processos que ocorrem nas pessoas."], "references": ["SETZER, Valdemar W. Dado, informação, conhecimento e competência. DataGramaZero: Revista de Ciência da Informação, [S. l.], n. zero, dez. 1999. Disponível em: https://cip.brapci.inf.br/download/45629. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.1.4", "term": "Método científico", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Indução; Refutação; Lâmina de Occam.", "body": ["Método científico é o conjunto de princípios e procedimentos que orienta como o conhecimento científico é produzido e justificado. O capítulo 3 de Wazlawick (2014) percorre as bases filosóficas da pesquisa em Computação: empirismo, positivismo, pragmatismo, objetividade, indução, refutação, coerentismo e lâmina de Occam.", "Em síntese (redação da equipe, a conferir no capítulo): o empirismo valoriza a experiência como fonte do conhecimento; o positivismo toma como base fatos observáveis e verificáveis; o pragmatismo avalia ideias por suas consequências práticas; a objetividade busca reduzir a influência do pesquisador sobre os resultados; o coerentismo justifica uma afirmação por sua coerência com um conjunto de outras. Indução, refutação e lâmina de Occam têm verbetes próprios."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.1.5", "term": "Indução", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Método científico; Refutação.", "body": ["Indução é o raciocínio que parte de casos particulares observados para formular uma generalização. Suas conclusões são prováveis, não certas: por mais casos que se observem, um caso futuro pode contrariar a regra. Wazlawick (2014, seção 3.5) a inclui entre as bases do método científico.", "Exemplo ilustrativo em Computação: executar um algoritmo com milhares de entradas de teste e observar que sempre funciona sugere, mas não prova, que ele está correto para todas as entradas; a demonstração formal de correção segue outro tipo de raciocínio."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.1.6", "term": "Refutação (falseabilidade)", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Hipótese; Programa de pesquisa; Indução.", "body": ["Refutação é o critério, associado a Karl Popper, segundo o qual uma afirmação só é científica se for possível indicar observações que a contradiriam; o progresso vem de tentar refutar hipóteses, e não apenas de colecionar confirmações. Wazlawick (2014, seção 3.6) trata do tema, e Lakatos (1979) discute o falseamento de Popper ao propor sua metodologia dos programas de pesquisa.", "Exemplo ilustrativo: “o algoritmo A é mais rápido que o B para entradas do tipo X” pode ser refutado por medição; “o algoritmo A é melhor” não define que evidência o contrariaria e, portanto, não é testável."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "LAKATOS, Imre. O falseamento e a metodologia dos programas de pesquisa científica. In: LAKATOS, Imre; MUSGRAVE, Alan (org.). A crítica e o desenvolvimento do conhecimento. Tradução: O. M. Cajado. São Paulo: Cultrix: Edusp, 1979. p. 109-243."], "seal": "B"}, {"id": "4.1.7", "term": "Lâmina de Occam", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Método científico.", "body": ["Princípio da parcimônia: entre explicações ou modelos que dão conta igualmente bem dos fatos, deve-se preferir o mais simples. Wazlawick (2014, seção 3.8) a inclui entre os fundamentos do método. Na prática, funciona como alerta contra soluções desnecessariamente complexas e como justificativa para comparar uma proposta com uma linha de base simples."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.1.8", "term": "Programa de pesquisa", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Refutação; Ciência; Método científico.", "body": ["Conceito proposto por Imre Lakatos (1979) para descrever o desenvolvimento da ciência: em vez de teorias isoladas, a unidade de análise é uma sucessão de teorias que preserva um “núcleo duro” de teses, protegido por um cinturão de hipóteses auxiliares que podem ser modificadas. Pela heurística negativa, não se ataca o núcleo; pela positiva, sugerem-se caminhos para desenvolver o cinturão. Um programa é progressivo quando suas modificações levam a previsões novas corroboradas, e degenerativo quando apenas acomodam anomalias.", "Lakatos procurou sintetizar a visão historicista de Thomas Kuhn com o racionalismo associado a Popper, e Renner e Pessoa Jr. (2016) discutem a aplicação dessa metodologia à avaliação de processos tecnológicos. Sugestão de uso no aplicativo: marcar linhas de pesquisa da Computação como “programas” para comparar sua evolução."], "references": ["LAKATOS, Imre. O falseamento e a metodologia dos programas de pesquisa científica. In: LAKATOS, Imre; MUSGRAVE, Alan (org.). A crítica e o desenvolvimento do conhecimento. Tradução: O. M. Cajado. São Paulo: Cultrix: Edusp, 1979. p. 109-243.", "RENNER, Jorge Eugenio; PESSOA JR., Osvaldo. Avaliação dos processos tecnológicos a partir da metodologia dos programas de pesquisa científicos de Lakatos. Revista Tecnologia e Sociedade, Curitiba, v. 12, n. 24, p. 1-26, jan./abr. 2016. Disponível em: https://www.redalyc.org/pdf/4966/496654011009.pdf. Acesso em: 2 nov. 2026."], "seal": "A/B"}, {"id": "4.1.9", "term": "Hipótese", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Refutação; Variáveis e definições operacionais; Problema de pesquisa.", "body": ["Hipótese é uma resposta provisória e testável ao problema de pesquisa. Wazlawick (2014) dedica seções à hipótese de pesquisa (6.5) e à sua justificativa (6.6). Uma boa hipótese é específica, indica o que será comparado ou medido e pode ser refutada pelos dados.", "Exemplo ilustrativo: “a técnica X reduz o tempo médio de resposta em pelo menos 20% em relação à técnica Y nos cenários Z”."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.1.10", "term": "Variáveis e definições operacionais", "category": "Ciência, conhecimento e método", "categoryId": "4.1", "related": "Hipótese; Experimento controlado.", "body": ["Variável é uma característica que pode assumir valores diferentes; costuma-se distinguir a variável independente (a que se manipula ou compara) da dependente (a que se mede). A definição operacional descreve como o conceito será medido ou observado, de modo que outro pesquisador possa repetir o procedimento. Wazlawick (2014) trata de dados versus conceitos (6.4.1), definições constitutivas e operacionais (6.4.2) e variáveis (6.4.3).", "Exemplo ilustrativo: variável independente = algoritmo; variável dependente = tempo de execução; definição operacional = tempo médio de 30 execuções, em milissegundos, em hardware e conjunto de dados especificados."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.2.1", "term": "Pesquisa", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Problema de pesquisa; Tipos de pesquisa.", "body": ["Pesquisa é o processo planejado e sistemático de buscar respostas para problemas por meio de métodos científicos (Gil, 2022). Diferencia-se da simples consulta a informações porque parte de um problema delimitado, adota procedimentos explícitos e produz resultados que outros podem examinar. O caderno da equipe remete este verbete a Gil; a página exata deve ser conferida no exemplar."], "references": ["GIL, Antonio Carlos. Como elaborar projetos de pesquisa. 7. ed. São Paulo: Atlas, 2022. 186 p. ISBN 978-65-5977-163-9."], "seal": "B"}, {"id": "4.2.2", "term": "Problema de pesquisa", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Pesquisa; Hipótese; Objetivos de pesquisa.", "body": ["Problema de pesquisa é a lacuna ou questão específica que o trabalho se propõe a resolver. Não se confunde com o tema, que é mais amplo: Wazlawick (2014, seções 6.1.2 e 6.1.3) trata separadamente a escolha do tema e a formulação do problema. Na tradição de Gil, o problema é formulado como pergunta (Gil, 2002, seção 2.3.2, conforme o sumário da 4ª edição), o que facilita verificar se o trabalho o responde.", "Exemplo ilustrativo: tema = ensino de programação; problema = “o uso de feedback automático em exercícios reduz a taxa de reprovação em Introdução à Programação?”."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "GIL, Antonio Carlos. Como elaborar projetos de pesquisa. 4. ed. São Paulo: Atlas, 2002. ISBN 85-224-3169-8."], "seal": "B"}, {"id": "4.2.3", "term": "Objetivos de pesquisa", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Problema de pesquisa; Ciência e tecnologia.", "body": ["Objetivo de pesquisa é o que o trabalho pretende alcançar em termos de conhecimento. Wazlawick (2014, seção 6.3) discute a extensão do objetivo, a diferença entre objetivo de pesquisa e objetivo técnico e os objetivos específicos. De forma geral, o objetivo geral indica o resultado central e os específicos o desdobram em etapas verificáveis."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.2.4", "term": "Tipos de pesquisa (Wazlawick)", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Pesquisa; Estilos de pesquisa em Computação; Estudo de caso; Experimento controlado.", "body": ["No caderno da equipe, este verbete remete a Wazlawick (o “Tipo Vava”). O capítulo 4 de Wazlawick (2014) classifica os métodos de pesquisa em três dimensões: quanto à natureza (seção 4.1), quanto aos objetivos (seção 4.2) e quanto aos procedimentos técnicos (seção 4.3).", "Em linhas gerais, e conforme a classificação clássica da literatura de metodologia (por exemplo, Gil, 2022): a natureza distingue pesquisa básica (gera conhecimento sem aplicação imediata) de pesquisa aplicada (busca resolver um problema específico); os objetivos separam pesquisas exploratórias, descritivas e explicativas; e os procedimentos técnicos incluem, entre outros, pesquisa bibliográfica, documental, experimento, estudo de caso, levantamento (survey) e pesquisa-ação. A lista exata de categorias adotada por Wazlawick deve ser conferida pela equipe no capítulo 4 do exemplar."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "GIL, Antonio Carlos. Como elaborar projetos de pesquisa. 7. ed. São Paulo: Atlas, 2022. 186 p. ISBN 978-65-5977-163-9."], "seal": "B"}, {"id": "4.2.5", "term": "Estilos de pesquisa em Computação", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Tipos de pesquisa (Wazlawick); Hipótese.", "body": ["Wazlawick (2014, cap. 5) propõe uma tipologia de estilos de trabalho de pesquisa correntes em Computação, nomeados pelo tipo de contribuição apresentada: (1) apresentação de um produto; (2) apresentação de algo diferente; (3) apresentação de algo presumivelmente melhor; (4) apresentação de algo reconhecidamente melhor; (5) apresentação de uma prova. O capítulo se encerra com uma discussão sobre esses estilos (seção 5.6).", "Ideia para o aplicativo: usar os cinco estilos como filtro, para que o usuário identifique em qual deles seu trabalho se encaixa e que tipo de evidência é esperada (a conferir no texto do autor)."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.2.6", "term": "Revisão bibliográfica", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Ficha de leitura; Revisão sistemática da literatura.", "body": ["Revisão bibliográfica é o levantamento e a leitura crítica da literatura sobre o tema e o problema, que permite conhecer o estado da arte, evitar repetições e fundamentar a proposta. Wazlawick (2014, seção 6.2) a organiza em tópicos como fichas de leitura, tipos de fontes bibliográficas, o que deve ser necessariamente lido, leitura crítica, sistematização da pesquisa bibliográfica e como terminar a revisão. Quando o levantamento segue um protocolo explícito e reproduzível, trata-se de uma revisão sistemática (verbete seguinte)."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.2.7", "term": "Ficha de leitura", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Revisão bibliográfica; Referência (ABNT NBR 6023).", "body": ["Ficha de leitura (fichamento) é o registro estruturado do que se leu. Wazlawick (2014, seção 6.2.1) a inclui no processo de revisão bibliográfica. Modelo sugerido pela equipe: referência completa já no formato ABNT; problema e objetivo da fonte; método; resultados principais; citações úteis com número de página; comentário crítico; relevância para o trabalho."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.2.8", "term": "Revisão sistemática da literatura", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "PRISMA; Revisão bibliográfica; Estudo de caso.", "body": ["A revisão sistemática da literatura (RSL) é um método de pesquisa secundária que identifica, seleciona e sintetiza estudos relevantes segundo um protocolo definido antes da execução, para que outros possam repetir o processo. O guia de Kitchenham e Charters (2007), voltado à Engenharia de Software e destinado inclusive a estudantes de doutorado, organiza a RSL em três fases: planejar, conduzir e relatar a revisão. O documento também trata de variantes, como os estudos de mapeamento sistemático e as revisões terciárias (revisões de revisões)."], "references": ["KITCHENHAM, Barbara; CHARTERS, Stuart. Guidelines for performing systematic literature reviews in software engineering. Version 2.3. Keele: Keele University; Durham: University of Durham, 2007. (EBSE Technical Report, EBSE-2007-01)."], "seal": "A"}, {"id": "4.2.9", "term": "PRISMA 2020", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Revisão sistemática da literatura.", "body": ["PRISMA (Preferred Reporting Items for Systematic reviews and Meta-Analyses) é uma diretriz para relatar revisões sistemáticas. A versão de 2020 substitui a de 2009 e reúne uma lista de verificação de 27 itens, uma lista expandida, uma lista para resumos e diagramas de fluxo revisados para revisões originais e atualizadas (Page et al., 2021). Foi concebida principalmente para revisões sobre efeitos de intervenções em saúde, mas pode ser usada em revisões originais, atualizadas ou contínuas; ao aplicá-la em Computação, convém avaliar eventuais adaptações e justificá-las."], "references": ["PAGE, Matthew J. et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, London, v. 372, art. n71, 29 mar. 2021. Disponível em: https://doi.org/10.1136/bmj.n71. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.2.10", "term": "Estudo de caso", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Tipos de pesquisa (Wazlawick); Ameaças à validade.", "body": ["Segundo Runeson e Höst (2009), o estudo de caso é uma metodologia adequada à pesquisa em Engenharia de Software porque investiga fenômenos contemporâneos em seu contexto natural. O artigo apresenta práticas recomendadas e listas de verificação, derivadas empiricamente, para pesquisadores que conduzem estudos de caso e para leitores que os avaliam."], "references": ["RUNESON, Per; HÖST, Martin. Guidelines for conducting and reporting case study research in software engineering. Empirical Software Engineering, [S. l.], v. 14, n. 2, p. 131-164, abr. 2009. Disponível em: https://doi.org/10.1007/s10664-008-9102-8. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.2.11", "term": "Experimento controlado", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Variáveis e definições operacionais; Ameaças à validade.", "body": ["Wohlin et al. (2012) apresentam os estudos empíricos em Engenharia de Software tendo como foco os experimentos controlados, organizados em cinco etapas: definição do escopo, planejamento, operação, análise e interpretação, e apresentação e empacotamento. O livro traz ainda capítulos introdutórios sobre estratégias empíricas, medição, revisões sistemáticas e estudos de caso."], "references": ["WOHLIN, Claes et al. Experimentation in software engineering. Berlin; Heidelberg: Springer, 2012. Disponível em: https://doi.org/10.1007/978-3-642-29044-2. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.2.12", "term": "Design Science Research", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Ciência e tecnologia; Experimento controlado.", "body": ["Hevner et al. (2004) distinguem dois paradigmas na pesquisa em Sistemas de Informação: a ciência comportamental, que desenvolve e verifica teorias sobre o comportamento humano ou organizacional, e a design science, que busca ampliar as capacidades humanas e organizacionais criando artefatos inovadores. No segundo paradigma, o conhecimento sobre o problema e sua solução se obtém na construção e na aplicação do artefato, e o artigo propõe diretrizes para conduzir e avaliar esse tipo de pesquisa.", "Sugestão da equipe: o próprio aplicativo Metodologiário pode ser descrito como um artefato avaliado segundo essa abordagem."], "references": ["HEVNER, Alan R. et al. Design science in information systems research. MIS Quarterly, [S. l.], v. 28, n. 1, p. 75-105, mar. 2004. Disponível em: https://doi.org/10.2307/25148625. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.2.13", "term": "Ameaças à validade e limitações", "category": "Pesquisa: planejamento, tipos e métodos", "categoryId": "4.2", "related": "Experimento controlado; Estudo de caso.", "body": ["Ameaças à validade são fatores que podem comprometer a confiança nas conclusões de um estudo. Wohlin et al. (2012) as discutem em quatro categorias: de conclusão, interna, de construto e externa. Wazlawick (2014, seção 6.8) trata das limitações do trabalho, isto é, do que a pesquisa não pretende nem consegue cobrir. Declarar ameaças e limitações é prática de honestidade científica e orienta a leitura dos resultados."], "references": ["WOHLIN, Claes et al. Experimentation in software engineering. Berlin; Heidelberg: Springer, 2012. Disponível em: https://doi.org/10.1007/978-3-642-29044-2. Acesso em: 2 nov. 2026.", "WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "A/B"}, {"id": "4.3.1", "term": "Tipos de trabalho científico", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Estrutura de trabalho científico; Monografia, dissertação e tese.", "body": ["A literatura de metodologia distingue tipos de trabalho acadêmico, cada um com finalidade, estrutura e exigência próprias. Severino (2016) é referência clássica para orientar a elaboração desses trabalhos na vida universitária; lançada em 1975, a obra está na 24ª edição e foi eleita Livro Acadêmico Clássico de 2025 pelo Prêmio Jabuti Acadêmico. O próprio autor ressalva que não se trata de livro de iniciação à pesquisa propriamente dita, mas de hábitos gerais do trabalho acadêmico (Jornal da USP).", "Tipos frequentemente tratados nesse campo: resumo, resenha, fichamento, seminário, projeto de pesquisa, relatório, artigo, monografia ou TCC, dissertação e tese (lista ilustrativa da equipe; conferir no sumário de Severino quais a obra aborda)."], "references": ["SEVERINO, Antônio Joaquim. Metodologia do trabalho científico. 24. ed. rev. e atual. São Paulo: Cortez, 2016. 317 p. ISBN 978-85-249-2448-4.", "OBRA de professor da USP é o Livro Acadêmico Clássico de 2025. Jornal da USP, São Paulo, [2025]. Disponível em: https://jornal.usp.br/?p=915834. Acesso em: 2 nov. 2026."], "seal": "B/D"}, {"id": "4.3.2", "term": "Estrutura de trabalho científico", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Normas ABNT; Resumo; Projeto de pesquisa.", "body": ["A ABNT NBR 14724:2024 organiza o trabalho acadêmico em elementos pré-textuais (como capa, folha de rosto, resumo e sumário), textuais (introdução, desenvolvimento e conclusão) e pós-textuais (como referências, apêndices e anexos).", "Para monografias em Computação, Wazlawick (2014, cap. 8) trata da ordem dos capítulos, de como a banca pode ler o texto e de cada parte: título, resumo, introdução, revisão bibliográfica, desenvolvimento, conclusões, trabalhos futuros e referências."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 14724: informação e documentação: trabalhos acadêmicos: apresentação. Rio de Janeiro: ABNT, 2024. Versão corrigida: 2025.", "WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B/C"}, {"id": "4.3.3", "term": "Projeto de pesquisa", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Problema de pesquisa; Objetivos de pesquisa; Hipótese.", "body": ["Projeto de pesquisa é o documento que planeja a investigação antes de sua execução. A ABNT NBR 15287:2025 trata de sua apresentação; Gil (2022) é a obra de referência sobre como elaborá-lo; e Wazlawick (2014, cap. 6) percorre os componentes da preparação do trabalho: objetivo, tema, problema, revisão bibliográfica, método, hipótese, justificativa, resultados esperados e limitações."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 15287: informação e documentação: projeto de pesquisa: apresentação. Rio de Janeiro: ABNT, 2025.", "GIL, Antonio Carlos. Como elaborar projetos de pesquisa. 7. ed. São Paulo: Atlas, 2022. 186 p. ISBN 978-65-5977-163-9.", "WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B/C"}, {"id": "4.3.4", "term": "Resumo", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Estrutura de trabalho científico; Artigo científico.", "body": ["Resumo é a apresentação concisa dos pontos relevantes de um texto. A ABNT NBR 6028:2021 trata de resumo, resenha e recensão. Wazlawick (2014, seção 8.5) aborda o resumo da monografia; na prática, ele deve permitir que o leitor entenda problema, método e contribuição sem ler o trabalho inteiro."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 6028: informação e documentação: resumo, resenha e recensão: apresentação. Rio de Janeiro: ABNT, 2021.", "WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B/C"}, {"id": "4.3.5", "term": "Artigo científico", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Periódicos da área; Eventos científicos da área.", "body": ["Artigo científico é um texto curto e autocontido que comunica uma contribuição à comunidade e passa por avaliação de pares. Wazlawick (2014, cap. 9) trata de autores, motivação, trabalhos correlacionados, contribuição, tipos de artigo (teórico, relato de experiência e artigos sobre métodos), veículos de publicação, ética no envio e Qualis."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B"}, {"id": "4.3.6", "term": "Monografia, dissertação e tese", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Tipos de trabalho científico.", "body": ["São os trabalhos de conclusão de graduação, especialização, mestrado e doutorado. Wazlawick (2014, cap. 11) discute os níveis de exigência de cada um em Computação, e a ABNT NBR 14724:2024 define sua apresentação formal."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 14724: informação e documentação: trabalhos acadêmicos: apresentação. Rio de Janeiro: ABNT, 2024. Versão corrigida: 2025."], "seal": "B/C"}, {"id": "4.3.7", "term": "Normas ABNT (visão geral)", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Referência (ABNT NBR 6023); Citação (ABNT NBR 10520); Estrutura de trabalho científico.", "body": ["Normas da ABNT usadas em trabalhos acadêmicos e vigentes segundo as fontes consultadas: NBR 14724:2024 (trabalhos acadêmicos), NBR 6023:2025 (referências), NBR 10520:2023 (citações), NBR 6028:2021 (resumo, resenha e recensão) e NBR 15287:2025 (projeto de pesquisa). Atenção: as normas costumam ser revisadas; antes de cada entrega, confirme a edição vigente no catálogo da ABNT."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 14724: informação e documentação: trabalhos acadêmicos: apresentação. Rio de Janeiro: ABNT, 2024. Versão corrigida: 2025.", "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 6023: informação e documentação: referências: elaboração. 3. ed. Rio de Janeiro: ABNT, 2025. 68 p.", "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 10520: informação e documentação: citações em documentos: apresentação. 2. ed. Rio de Janeiro: ABNT, 2023. 19 p.", "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 6028: informação e documentação: resumo, resenha e recensão: apresentação. Rio de Janeiro: ABNT, 2021.", "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 15287: informação e documentação: projeto de pesquisa: apresentação. Rio de Janeiro: ABNT, 2025."], "seal": "C"}, {"id": "4.3.8", "term": "Referência (ABNT NBR 6023)", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Citação (ABNT NBR 10520); Ficha de leitura.", "body": ["Referência é o conjunto padronizado de elementos que identifica as fontes usadas em um trabalho. A ABNT NBR 6023:2025 (3ª edição, de 21/05/2025, com 68 páginas) estabelece os elementos a incluir nas referências.", "Neste documento, cada verbete traz suas referências logo após o conteúdo: sobrenome do autor em maiúsculas, título em destaque, edição, local, editora e ano; documentos online incluem o endereço e a data de acesso. A equipe deve conferir esses detalhes de formatação no texto integral da norma."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 6023: informação e documentação: referências: elaboração. 3. ed. Rio de Janeiro: ABNT, 2025. 68 p."], "seal": "C"}, {"id": "4.3.9", "term": "Citação (ABNT NBR 10520)", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Referência (ABNT NBR 6023); Plágio e direitos autorais.", "body": ["Citação é a menção, no corpo do texto, de informação obtida em outra fonte. A ABNT NBR 10520:2023 é a segunda edição e cancela e substitui a de 2002. Adota-se aqui o sistema autor-data: “segundo Gil (2022)” ou “(Gil, 2022)”; para dois autores, “Runeson e Höst (2009)” ou “(Runeson; Höst, 2009)”. A citação indireta reproduz a ideia com palavras próprias; a direta transcreve o texto entre aspas e indica a página.", "Todo autor citado no texto deve constar nas referências, e vice-versa."], "references": ["ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT NBR 10520: informação e documentação: citações em documentos: apresentação. 2. ed. Rio de Janeiro: ABNT, 2023. 19 p."], "seal": "C"}, {"id": "4.3.10", "term": "Normas APA", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Normas ABNT (visão geral); Citação (ABNT NBR 10520).", "body": ["APA é o estilo de citação e referência da American Psychological Association, descrito no Publication Manual, 7ª edição (2020). Usa o sistema autor-data e, na 7ª edição, apresenta o DOI como endereço (https://doi.org/...). Eventos e periódicos de Computação podem exigir estilos próprios (por exemplo, o de cada sociedade ou editora); sempre consulte as instruções para autores."], "references": ["AMERICAN PSYCHOLOGICAL ASSOCIATION. Publication manual of the American Psychological Association. 7th ed. Washington, DC: APA, 2020. Disponível em: https://doi.org/10.1037/0000165-000. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.3.11", "term": "Plágio e direitos autorais", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Citação (ABNT NBR 10520); Ética em pesquisa.", "body": ["Plágio é apresentar ideias, textos ou resultados de outra pessoa como se fossem próprios. Wazlawick (2014, cap. 10) o aborda junto aos antecedentes, à proteção dos direitos autorais e à lei brasileira. A Lei nº 9.610/1998 considera autor a pessoa física criadora da obra (art. 11) e esclarece que ideias, métodos e conceitos matemáticos, como tais, não são objeto de proteção autoral (art. 8º, I), de modo que a proteção recai sobre a forma da obra.", "Comentário da equipe: o dever acadêmico de citar vai além da proteção legal, pois exige creditar também as ideias de terceiros."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "BRASIL. Lei nº 9.610, de 19 de fevereiro de 1998. Altera, atualiza e consolida a legislação sobre direitos autorais e dá outras providências. Brasília, DF: Presidência da República, 1998. Disponível em: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm. Acesso em: 2 nov. 2026."], "seal": "B/D"}, {"id": "4.3.12", "term": "Ética em pesquisa", "category": "Trabalho científico, escrita e normas", "categoryId": "4.3", "related": "Plágio e direitos autorais.", "body": ["A Resolução CNS nº 510/2016 dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais cujos procedimentos envolvam dados obtidos diretamente de participantes ou informações identificáveis. Entre os casos dispensados de avaliação pelo sistema CEP/Conep estão, por exemplo, pesquisas de opinião pública com participantes não identificados (art. 1º, parágrafo único). Trabalhos de Computação que envolvam pessoas (entrevistas, testes de usabilidade, questionários) devem verificar com a instituição se precisam de avaliação ética."], "references": ["BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. Resolução nº 510, de 7 de abril de 2016. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. Diário Oficial da União: seção 1, Brasília, DF, n. 98, p. 44, 24 maio 2016. Disponível em: http://bvsms.saude.gov.br/bvs/saudelegis/cns/2016/res0510_07_04_2016.html. Acesso em: 2 nov. 2026."], "seal": "D"}, {"id": "4.4.1", "term": "Eventos científicos da área", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Associações científicas (SBC, ACM e IEEE); Artigo científico.", "body": ["Em Computação, congressos e simpósios são veículos importantes de publicação (Wazlawick, 2014, seção 9.8.2 trata das conferências na avaliação Qualis). A SBC realiza o Congresso da SBC (CSBC), em cujo âmbito ocorre o Workshop sobre Educação em Computação (WEI), e outros eventos como o Congresso Brasileiro de Informática na Educação (CBIE) (SBC, 2018); em 2022 apresentou também simpósios científicos e escolas regionais (SBC, 2022). A ACM registra que muitas de suas conferências se tornaram eventos de referência mundial (ACM, [2026]).", "Ao escolher um evento, a equipe deve verificar chamada de trabalhos, prazos, formato do artigo, forma de avaliação e onde os anais serão publicados."], "references": ["WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026.", "SOCIEDADE BRASILEIRA DE COMPUTAÇÃO. [Parecer da SBC sobre a revisão da Tabela de Classificação dos Cursos de Graduação e Sequenciais, versão 2018]. Porto Alegre: SBC, 30 abr. 2018. Disponível em: https://www.sbc.org.br/wp-content/uploads/2024/07/ParecerSBC-INEP-Reclassifica-odeCursos-2018-04-30.pdf. Acesso em: 2 nov. 2026.", "SOCIEDADE BRASILEIRA DE COMPUTAÇÃO. [Apresentação institucional da SBC ao Comitê Gestor da Internet no Brasil]. Brasília, DF: CGI.br, 22 jul. 2022. Slides. Disponível em: https://cgi.br/media/atas/pdf/20220722-apresentacao-SBC-2022.pdf. Acesso em: 2 nov. 2026.", "ASSOCIATION FOR COMPUTING MACHINERY. ACM history. New York: ACM, [2026]. Disponível em: https://www.acm.org/acm-history. Acesso em: 2 nov. 2026."], "seal": "B/D"}, {"id": "4.4.2", "term": "Periódicos da área", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Qualis e avaliação da produção; Artigo científico.", "body": ["Periódicos científicos publicam artigos avaliados por pares. Entre os periódicos da SBC apresentados em 2022 estão SBC Reviews on Computer Science, Revista Brasileira de Sistemas de Informação, Revista Brasileira de Informática na Educação e Revista Eletrônica de Iniciação Científica em Computação (SBC, 2022). A ACM tem como publicação principal a Communications of the ACM (ACM, [2026]). Wazlawick (2014, seção 9.8.1) discute a avaliação de periódicos."], "references": ["SOCIEDADE BRASILEIRA DE COMPUTAÇÃO. [Apresentação institucional da SBC ao Comitê Gestor da Internet no Brasil]. Brasília, DF: CGI.br, 22 jul. 2022. Slides. Disponível em: https://cgi.br/media/atas/pdf/20220722-apresentacao-SBC-2022.pdf. Acesso em: 2 nov. 2026.", "ASSOCIATION FOR COMPUTING MACHINERY. ACM history. New York: ACM, [2026]. Disponível em: https://www.acm.org/acm-history. Acesso em: 2 nov. 2026.", "WAZLAWICK, Raul Sidnei. Metodologia de pesquisa para ciência da computação. 2. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7782-1. Disponível em: https://shop.elsevier.com/books/metodologia-de-pesquisa-para-ciencia-da-computacao/wazlawick/978-85-352-7782-1. Acesso em: 2 nov. 2026."], "seal": "B/D"}, {"id": "4.4.3", "term": "Qualis e avaliação da produção", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Periódicos da área; Índice h.", "body": ["O Qualis-periódicos, sistema de classificação de revistas criado pela CAPES nos anos 2000, não será mais usado para avaliar a produção dos programas de pós-graduação no quadriênio 2025-2028. A avaliação passa a se concentrar no artigo, por três procedimentos que cada área pode combinar: um baseado em indicadores bibliométricos do periódico, outro que combina elementos quantitativos do artigo com critérios qualitativos do periódico e um terceiro de avaliação qualitativa de cada artigo (Schmidt, 2024).", "Atenção: livros de metodologia anteriores (inclusive capítulos sobre Qualis) podem estar desatualizados. A equipe deve consultar o documento orientador da área de Ciência da Computação junto à CAPES."], "references": ["SCHMIDT, Sarah. Qualis-periódicos será substituído por classificação com foco nos artigos. Pesquisa FAPESP, São Paulo, 26 out. 2024. Disponível em: https://revistapesquisa.fapesp.br/qualis-periodicos-sera-substituido-por-classificacao-com-foco-nos-artigos/. Acesso em: 2 nov. 2026."], "seal": "D"}, {"id": "4.4.4", "term": "Associações científicas (SBC, ACM e IEEE)", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Eventos científicos da área; Periódicos da área.", "body": ["SBC: sociedade científica sem fins lucrativos, fundada em julho de 1978, que reúne estudantes, professores, profissionais e pesquisadores de Computação e Informática do Brasil (SBC, 2022a).", "ACM: fundada em 15 de setembro de 1947 como Eastern Association for Computing Machinery (o termo “Eastern” foi retirado em janeiro de 1948), é descrita por si mesma como a maior sociedade educacional e científica de Computação; mantém a Digital Library e publica a Communications of the ACM (ACM, [2026]).", "IEEE: formado em 1º de janeiro de 1963 pela fusão do AIEE (1884) e do IRE (1912) (ETHW, [2026])."], "references": ["SOCIEDADE BRASILEIRA DE COMPUTAÇÃO. Relatório anual da SBC 2021/2022. Porto Alegre: SBC, 2022. Disponível em: https://books-sol.sbc.org.br/index.php/sbc/catalog/download/102/459/731?inline=1. Acesso em: 2 nov. 2026.", "ASSOCIATION FOR COMPUTING MACHINERY. ACM history. New York: ACM, [2026]. Disponível em: https://www.acm.org/acm-history. Acesso em: 2 nov. 2026.", "ENGINEERING AND TECHNOLOGY HISTORY WIKI. IEEE history. [S. l.]: ETHW, [2026]. Disponível em: https://ethw.org/IEEE_History. Acesso em: 2 nov. 2026."], "seal": "D"}, {"id": "4.4.5", "term": "Repositórios e portais científicos", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Plataformas de acesso a trabalhos acadêmicos; Preprints.", "body": ["Repositórios e portais reúnem e preservam a produção científica. Exemplos brasileiros: o Portal de Periódicos da CAPES, biblioteca virtual que disponibiliza às instituições de ensino e pesquisa produção científica nacional e internacional, com acesso remoto via CAFe para instituições federadas (CAPES, 2019); a BDTD, do Ibict, que integra em um só portal as teses e dissertações das instituições e foi criada em 2002 (Amaro, 2018; Ibict, 2024); o SciELO, cuja metodologia de publicação eletrônica de periódicos foi descrita por Packer et al. (1998); e a SBC OpenLib (SOL), que hospeda anais e livros da SBC."], "references": ["COORDENAÇÃO DE APERFEIÇOAMENTO DE PESSOAL DE NÍVEL SUPERIOR. Portal de Periódicos CAPES: manual de acesso. Brasília, DF: CAPES, 2019. Disponível em: https://www.periodicos.capes.gov.br/images/documents/Portal_Peri%C3%B3dicos_CAPES_Guia_2019_4_oficial.pdf. Acesso em: 2 nov. 2026.", "INSTITUTO BRASILEIRO DE INFORMAÇÃO EM CIÊNCIA E TECNOLOGIA. Biblioteca Digital Brasileira de Teses e Dissertações (BDTD) apresenta nova interface e funcionalidades aos usuários. Brasília, DF: Ibict, jan. 2024. Disponível em: https://www.gov.br/ibict/pt-br/central-de-conteudos/noticias/2024/janeiro/biblioteca-digital-brasileira-de-teses-e-dissertacoes-bdtd-apresenta-nova-interface-e-funcionalidades-aos-usuarios. Acesso em: 2 nov. 2026.", "AMARO, Bianca. [Apresentação sobre infraestruturas de ciência aberta do Ibict]. In: ENCONTRO DE CIÊNCIA ABERTA, 1., 18 set. 2018. Brasília, DF: CAPES, 2018. Slides. Disponível em: https://www.gov.br/capes/pt-br/centrais-de-conteudo/20180918_1EncontrodeCienciaAberta_BiancaAmaro_IBICT.pdf. Acesso em: 2 nov. 2026.", "PACKER, Abel Laerte et al. SciELO: uma metodologia para publicação eletrônica. Ciência da Informação, Brasília, DF, v. 27, n. 2, p. 109-121, maio/ago. 1998. Disponível em: https://revista.ibict.br/ciinf/article/download/791/821/879. Acesso em: 2 nov. 2026.", "SOCIEDADE BRASILEIRA DE COMPUTAÇÃO. Relatório anual da SBC 2021/2022. Porto Alegre: SBC, 2022. Disponível em: https://books-sol.sbc.org.br/index.php/sbc/catalog/download/102/459/731?inline=1. Acesso em: 2 nov. 2026."], "seal": "A/D"}, {"id": "4.4.6", "term": "Plataformas de acesso a trabalhos acadêmicos", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Repositórios e portais científicos; IAs acadêmicas.", "body": ["Plataformas de acesso são serviços de busca e leitura da literatura. A ACM Digital Library reúne citações e textos completos de periódicos, boletins e anais da ACM (ACM, [2026]). O Semantic Scholar é uma plataforma de dados abertos que integra mais de 50 fontes, entre elas Crossref e arXiv, para construir um grafo acadêmico com artigos, autores e citações (Kinney et al., 2023). O acesso a conteúdo assinado costuma depender do vínculo institucional (por exemplo, via CAFe no Portal da CAPES)."], "references": ["ASSOCIATION FOR COMPUTING MACHINERY. ACM history. New York: ACM, [2026]. Disponível em: https://www.acm.org/acm-history. Acesso em: 2 nov. 2026.", "KINNEY, Rodney et al. The Semantic Scholar Open Data Platform. [S. l.]: arXiv, 24 jan. 2023. Versão 2: 25 abr. 2025. arXiv:2301.10140 [cs.DL]. Disponível em: https://arxiv.org/abs/2301.10140. Acesso em: 2 nov. 2026.", "COORDENAÇÃO DE APERFEIÇOAMENTO DE PESSOAL DE NÍVEL SUPERIOR. Portal de Periódicos CAPES: manual de acesso. Brasília, DF: CAPES, 2019. Disponível em: https://www.periodicos.capes.gov.br/images/documents/Portal_Peri%C3%B3dicos_CAPES_Guia_2019_4_oficial.pdf. Acesso em: 2 nov. 2026."], "seal": "A/D"}, {"id": "4.4.7", "term": "IAs acadêmicas", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Plataformas de acesso a trabalhos acadêmicos; Declaração de uso de IA.", "body": ["Ferramentas de IA para pesquisa acadêmica se dividem em dois grupos. Serviços de busca com recursos de aprendizado de máquina, como o Semantic Scholar, oferecem páginas de autor geradas automaticamente, bibliotecas pessoais e recomendações de artigos (Kinney et al., 2023). Assistentes conversacionais baseados em modelos de linguagem podem redigir texto, mas geram referências inexistentes: em estudo com 636 citações, Walters e Wilder (2023) encontraram 55% de citações fabricadas no GPT-3.5 e 18% no GPT-4, além de erros substantivos em parte das citações reais.", "Boa prática: nunca usar uma referência sugerida por IA sem localizar o documento original (por DOI, editora ou repositório) e declarar o uso da ferramenta (ver a declaração ao final deste documento)."], "references": ["KINNEY, Rodney et al. The Semantic Scholar Open Data Platform. [S. l.]: arXiv, 24 jan. 2023. Versão 2: 25 abr. 2025. arXiv:2301.10140 [cs.DL]. Disponível em: https://arxiv.org/abs/2301.10140. Acesso em: 2 nov. 2026.", "WALTERS, William H.; WILDER, Esther Isabelle. Fabrication and errors in the bibliographic citations generated by ChatGPT. Scientific Reports, [S. l.], v. 13, art. 14045, 7 set. 2023. Disponível em: https://doi.org/10.1038/s41598-023-41032-5. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.4.8", "term": "Preprints", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Repositórios e portais científicos; Ciência aberta e FAIR.", "body": ["Preprint é a versão de um trabalho divulgada antes da avaliação por pares. O arXiv, repositório criado por Paul Ginsparg, é o exemplo mais conhecido na Computação; Ginsparg (2011) relata sua trajetória, seus desafios de financiamento e de controle de qualidade. Preprints não substituem a revisão por pares: ao citá-los, indique que se trata de versão não revisada."], "references": ["GINSPARG, Paul. ArXiv at 20. Nature, London, v. 476, n. 7359, p. 145-147, 11 ago. 2011. Disponível em: https://doi.org/10.1038/476145a. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.4.9", "term": "Ciência aberta e princípios FAIR", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Preprints; Repositórios e portais científicos.", "body": ["Os princípios FAIR (Findable, Accessible, Interoperable, Reusable) são diretrizes para melhorar a reutilização de dados científicos. Wilkinson et al. (2016), a primeira publicação formal dos princípios, enfatizam que máquinas devem conseguir encontrar e usar os dados automaticamente, além de apoiar o reuso por pessoas. Entre os coautores está Abel L. Packer, um dos autores da metodologia SciELO."], "references": ["WILKINSON, Mark D. et al. The FAIR guiding principles for scientific data management and stewardship. Scientific Data, [S. l.], v. 3, art. 160018, 15 mar. 2016. Disponível em: https://doi.org/10.1038/sdata.2016.18. Acesso em: 2 nov. 2026."], "seal": "A"}, {"id": "4.4.10", "term": "Índice h", "category": "Comunicação científica, avaliação e acesso à literatura", "categoryId": "4.4", "related": "Qualis e avaliação da produção.", "body": ["Proposto por Hirsch (2005), o índice h de um pesquisador é h quando h de seus artigos têm pelo menos h citações cada e os demais têm no máximo h. O autor ressalva que a base de dados usada deve cobrir todo o período das publicações e que a comparação é mais adequada entre pesquisadores com o mesmo tempo de carreira. Por depender da base de dados e da área, deve ser interpretado com cautela."], "references": ["HIRSCH, J. E. An index to quantify an individual's scientific research output. Proceedings of the National Academy of Sciences of the United States of America, [S. l.], v. 102, n. 46, p. 16569-16572, nov. 2005. Disponível em: https://doi.org/10.1073/pnas.0507655102. Acesso em: 2 nov. 2026."], "seal": "A"}];

const categories = [
  {id: "4.1", name: "Ciência, conhecimento e método", icon: "✳", desc: "Fundamentos, conceitos e formas de justificar conhecimento."},
  {id: "4.2", name: "Pesquisa: planejamento, tipos e métodos", icon: "⌁", desc: "Da pergunta de pesquisa aos métodos de investigação."},
  {id: "4.3", name: "Trabalho científico, escrita e normas", icon: "▤", desc: "Produção acadêmica, estrutura, citações e integridade."},
  {id: "4.4", name: "Comunicação científica, avaliação e acesso", icon: "◎", desc: "Publicação, comunidades, bases e ciência aberta."}
];

const refsExtra = [
  {title: "ABNT NBR 6023:2025 — Referências", org: "ABNT", url: "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/149/2025/05/Referencias-NBR-6023-2025.pdf", note: "3ª edição, publicada em 21 maio 2025. Consulte a norma original."},
  {title: "Atualização da ABNT NBR 6023", org: "Bibliotecas da Universidade Federal de Uberlândia", url: "https://bibliotecas.ufu.br/acontece/2025/07/atualizacao-da-norma-de-elaboracao-de-referencias-abnt-nbr-6023", note: "Notícia institucional sobre a terceira edição."},
  {title: "Normalização: normas técnicas da ABNT", org: "Biblioteca da Universidade Federal do Espírito Santo", url: "https://biblioteca.ufes.br/normalizacao", note: "Página institucional com indicação das edições de normas usadas em trabalhos acadêmicos."},
  {title: "ABNT NBR 14724:2024 — versão corrigida em 2025", org: "Documento técnico ABNT disponibilizado em repositório institucional", url: "https://funesa.se.gov.br/wp-content/uploads/2025/06/TRABALHOS-ACADEMICOS.pdf", note: "A versão corrigida incorpora a Errata 1, de 01/04/2025."}
];

const normalizeText = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function App() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("todas");
  const [letter, setLetter] = useState("todas");
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [sort, setSort] = useState("categoria");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState("inicio");
  const [mobile, setMobile] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState("");
  const [copiedId, setCopiedId] = useState("");

  // Gerador rápido de citação/referência ABNT
  const [abntType, setAbntType] = useState("livro");
  const [abntAuthor, setAbntAuthor] = useState("WAZLAWICK, Raul Sidnei");
  const [abntTitle, setAbntTitle] = useState("Metodologia de pesquisa para ciência da computação");
  const [abntExtra, setAbntExtra] = useState("2. ed. Rio de Janeiro: Elsevier");
  const [abntYear, setAbntYear] = useState("2014");
  const [abntUrl, setAbntUrl] = useState("");

  const [theme, setTheme] = useState(() => localStorage.getItem("metodologiario-theme") || "dark");
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("metodologiario-favs") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("metodologiario-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("metodologiario-favs", JSON.stringify(favorites));
  }, [favorites]);

  // Suporte a navegação por hash URL (#verbete-4.1.1, #dicionario, #abnt, etc.) e atalho Ctrl+K / Cmd+K
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("verbete-")) {
        const id = hash.replace("verbete-", "");
        const found = entries.find(e => e.id === id);
        if (found) {
          setSelected(found);
          setPage("verbete");
          return;
        }
      }
      if (["inicio", "dicionario", "abnt", "equipe", "fontes"].includes(hash)) {
        setPage(hash);
        setSelected(null);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen(prev => !prev);
        setCmdQuery("");
      } else if (e.key === "Escape") {
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleFav = (id, ev) => {
    if (ev) ev.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const copyText = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(key);
      setTimeout(() => setCopiedId(""), 2000);
    }
  };

  const availableLetters = useMemo(() => {
    const set = new Set();
    entries.forEach(e => {
      const first = normalizeText(e.term).charAt(0).toUpperCase();
      if (first) set.add(first);
    });
    return set;
  }, []);

  const filtered = useMemo(() => {
    const qNorm = normalizeText(query);
    return entries
      .filter(e => {
        if (cat !== "todas" && e.categoryId !== cat) return false;
        if (onlyFavs && !favorites.includes(e.id)) return false;
        if (letter !== "todas") {
          const first = normalizeText(e.term).charAt(0).toUpperCase();
          if (first !== letter) return false;
        }
        if (!qNorm) return true;
        const hay = normalizeText(`${e.id} ${e.term} ${e.body.join(" ")} ${e.related}`);
        return hay.includes(qNorm);
      })
      .sort((a, b) => sort === "az" ? a.term.localeCompare(b.term, "pt-BR") : a.id.localeCompare(b.id));
  }, [query, cat, letter, onlyFavs, favorites, sort]);

  const cmdResults = useMemo(() => {
    const qNorm = normalizeText(cmdQuery);
    if (!qNorm) return entries.slice(0, 7);
    return entries.filter(e =>
      normalizeText(`${e.id} ${e.term} ${e.category} ${e.related}`).includes(qNorm)
    ).slice(0, 10);
  }, [cmdQuery]);

  const counts = categories.map(c => ({...c, count: entries.filter(e => e.categoryId === c.id).length}));

  const openEntry = (e) => {
    setSelected(e);
    setPage("verbete");
    setCmdOpen(false);
    window.location.hash = `verbete-${e.id}`;
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const nav = (p) => {
    setPage(p);
    setSelected(null);
    setMobile(false);
    window.location.hash = p === "inicio" ? "" : p;
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const resolveRelatedEntry = (label) => {
    const clean = normalizeText(label.replace(/\.$/, "").trim());
    if (!clean) return null;
    return entries.find(e => {
      const t = normalizeText(e.term);
      return t === clean || t.includes(clean) || clean.includes(t);
    });
  };

  const linkify = (s) => s.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part)
      ? h("a", {key: i, href: part, target: "_blank", rel: "noreferrer", className: "ref-link"}, part)
      : part
  );

  const selectedIndex = selected ? entries.findIndex(e => e.id === selected.id) : -1;
  const prevEntry = selectedIndex > 0 ? entries[selectedIndex - 1] : null;
  const nextEntry = selectedIndex >= 0 && selectedIndex < entries.length - 1 ? entries[selectedIndex + 1] : null;

  const generatedAbntRef = useMemo(() => {
    const a = abntAuthor.trim() || "AUTOR, Sobrenome";
    const t = abntTitle.trim() || "Título da obra";
    const ex = abntExtra.trim();
    const y = abntYear.trim() || "2026";
    const u = abntUrl.trim();
    const access = u ? ` Disponível em: ${u}. Acesso em: 24 nov. 2026.` : "";
    if (abntType === "artigo") {
      return `${a}. ${t}. ${ex ? ex + ", " : ""}${y}.${access}`;
    }
    return `${a}. ${t}. ${ex ? ex + ", " : ""}${y}.${access}`;
  }, [abntType, abntAuthor, abntTitle, abntExtra, abntYear, abntUrl]);

  const activeFiltersCount = (cat !== "todas" ? 1 : 0) + (letter !== "todas" ? 1 : 0) + (onlyFavs ? 1 : 0) + (query ? 1 : 0);

  return h("div", {className: "min-h-screen"},
    // MODAL BUSCA RÁPIDA (CTRL+K)
    cmdOpen ? h("div", {className: "modal-backdrop", onClick: () => setCmdOpen(false)},
      h("div", {className: "cmd-modal", onClick: e => e.stopPropagation()},
        h("div", {className: "cmd-input-row"},
          h("span", null, "⌕"),
          h("input", {
            autoFocus: true,
            value: cmdQuery,
            onChange: e => setCmdQuery(e.target.value),
            placeholder: "Busca rápida entre os 45 verbetes (ex.: DSR, PRISMA, ABNT, Popper)..."
          }),
          h("button", {className: "copy-ref-btn", onClick: () => setCmdOpen(false)}, "ESC")
        ),
        h("div", {className: "cmd-results"},
          cmdResults.length
            ? cmdResults.map(item => h("button", {key: item.id, className: "cmd-item", onClick: () => openEntry(item)},
                h("div", null, h("b", null, item.term), h("small", null, `${item.id} · ${item.category}`)),
                h("span", {className: "seal-pill"}, `Selo ${item.seal} ↗`)
              ))
            : h("div", {className: "empty-state", style: {padding: "28px"}}, "Nenhum verbete corresponde à busca.")
        )
      )
    ) : null,

    // TOPBAR
    h("header", {className: "topbar"},
      h("a", {className: "brand", href: "#", onClick: e => {e.preventDefault(); nav("inicio");}},
        h("img", {className: "brand-logo", src: "logo.png", alt: "Logotipo Metodologiário"}),
        h("span", null, "METODOLOGIÁRIO"),
        h("small", null, "UEPB · PATOS")
      ),
      h("div", {className: "topbar-right"},
        h("nav", {className: mobile ? "nav open" : "nav"},
          [
            ["inicio", "Início"],
            ["dicionario", "Dicionário"],
            ["abnt", "Guia ABNT"],
            ["equipe", "Equipe"],
            ["fontes", "Fontes"]
          ].map(([p, l]) => h("button", {
            key: p,
            className: (page === p || (page === "verbete" && p === "dicionario")) ? "nav-active" : "",
            onClick: () => nav(p)
          },
            l,
            p === "dicionario" && favorites.length > 0 ? h("span", {className: "nav-badge", title: "Verbetes salvos"}, favorites.length) : null
          ))
        ),
        h("button", {
          className: "kbd-hint-btn",
          onClick: () => {setCmdOpen(true); setCmdQuery("");},
          title: "Abrir busca rápida (Ctrl+K)"
        }, "Buscar ", h("kbd", null, "Ctrl + K")),
        h("button", {
          className: "theme-toggle",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          title: theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
        }, theme === "dark" ? "☀" : "☾"),
        h("button", {className: "mobile-menu", onClick: () => setMobile(!mobile)}, "☰")
      )
    ),

    // INÍCIO
    page === "inicio" ? h("main", null,
      h("section", {className: "hero"},
        h("div", {className: "hero-copy"},
          h("div", {className: "eyebrow"}, "CIÊNCIA DA COMPUTAÇÃO · METODOLOGIA CIENTÍFICA"),
          h("h1", null, "Ideias claras.", h("br"), h("em", null, "Pesquisa melhor.")),
          h("p", null, "Um dicionário vivo para explorar conceitos, métodos e práticas da pesquisa científica em Computação."),
          h("div", {className: "hero-actions"},
            h("button", {className: "btn-primary", onClick: () => nav("dicionario")}, "Explorar verbetes ↗"),
            h("button", {className: "btn-quiet", onClick: () => nav("abnt")}, "Consultar normas"),
            h("button", {className: "btn-quiet", onClick: () => openEntry(entries[Math.floor(Math.random() * entries.length)])}, "Verbete aleatório ↻")
          ),
          h("div", {className: "hero-meta"},
            h("span", null, "45 VERBETES"),
            h("i", null, "·"),
            h("span", null, "4 CATEGORIAS"),
            h("i", null, "·"),
            h("span", null, "ABNT NBR 6023:2025")
          )
        ),
        h("div", {className: "hero-art"},
          h("div", {className: "orbit orbit-a"}),
          h("div", {className: "orbit orbit-b"}),
          h("div", {className: "orb-core"}, h("img", {src: "logo.png", alt: "Símbolo Metodologiário"})),
          h("div", {className: "floating-note note-one"}, "método", h("b", null, "01")),
          h("div", {className: "floating-note note-two"}, "evidência", h("b", null, "02")),
          h("div", {className: "floating-note note-three"}, "conhecimento", h("b", null, "03")),
          h("div", {className: "hero-stamp"}, "UEPB / 2026")
        )
      ),
      h("section", {className: "intro-strip"},
        h("div", null,
          h("span", {className: "eyebrow"}, "SOBRE O PROJETO"),
          h("h2", null, "Um mapa para a vida acadêmica.")
        ),
        h("p", null, "O Metodologiário reúne conceitos essenciais e ferramentas para quem pesquisa em Ciência da Computação. A navegação combina categorias, busca instantânea, índice alfabético A–Z e citações prontas na ABNT — para encontrar um termo ou construir uma trilha de aprendizagem.")
      ),
      h("section", {className: "category-section"},
        h("div", {className: "section-head"},
          h("div", null,
            h("span", {className: "eyebrow"}, "NAVEGUE POR ASSUNTO"),
            h("h2", null, "Quatro caminhos de pesquisa")
          ),
          h("button", {className: "text-link", onClick: () => nav("dicionario")}, "Ver todos os verbetes ↗")
        ),
        h("div", {className: "category-grid"},
          counts.map(c => h("button", {
            className: "category-card",
            key: c.id,
            onClick: () => {setCat(c.id); setLetter("todas"); setOnlyFavs(false); nav("dicionario");}
          },
            h("div", {className: "cat-top"},
              h("span", {className: "cat-icon"}, c.icon),
              h("span", {className: "cat-count"}, String(c.count).padStart(2, "0"))
            ),
            h("h3", null, c.name),
            h("p", null, c.desc),
            h("span", {className: "card-arrow"}, "↗")
          ))
        )
      ),
      h("section", {className: "quote-band"},
        h("span", null, "“"),
        h("p", null, "Pesquisar não é apenas encontrar respostas: é formular boas perguntas, explicitar métodos e permitir que outras pessoas examinem o caminho percorrido."),
        h("small", null, "PRINCÍPIO EDITORIAL DO METODOLOGIÁRIO")
      )
    ) : null,

    // DICIONÁRIO
    page === "dicionario" ? h("main", {className: "content-wrap"},
      h("div", {className: "page-heading"},
        h("span", {className: "eyebrow"}, "EXPLORAR CONHECIMENTO"),
        h("h1", null, "Dicionário"),
        h("p", null, "45 verbetes organizados de forma híbrida (categorias + índice alfabético A–Z), com selos de rastreabilidade e referências na ABNT NBR 6023:2025.")
      ),

      // Índice Alfabético Permanente (conforme Seção 2 do documento-base)
      h("div", {className: "alpha-bar", role: "navigation", "aria-label": "Índice alfabético"},
        h("button", {
          className: letter === "todas" ? "alpha-btn active" : "alpha-btn",
          onClick: () => setLetter("todas")
        }, "TODOS"),
        alphabet.map(ch => h("button", {
          key: ch,
          disabled: !availableLetters.has(ch),
          className: letter === ch ? "alpha-btn active" : "alpha-btn",
          onClick: () => setLetter(letter === ch ? "todas" : ch)
        }, ch))
      ),

      h("div", {className: "filters"},
        h("div", {className: "searchbox"},
          h("span", null, "⌕"),
          h("input", {
            value: query,
            onChange: e => setQuery(e.target.value),
            placeholder: "Buscar termo, autor, conceito ou palavra-chave..."
          }),
          query ? h("button", {onClick: () => setQuery("")}, "×") : null
        ),
        h("select", {value: cat, onChange: e => setCat(e.target.value)},
          h("option", {value: "todas"}, "Todas as categorias"),
          categories.map(c => h("option", {value: c.id, key: c.id}, c.name))
        ),
        h("select", {value: sort, onChange: e => setSort(e.target.value)},
          h("option", {value: "categoria"}, "Ordem do documento"),
          h("option", {value: "az"}, "Ordem alfabética A–Z")
        ),
        h("button", {
          className: onlyFavs ? "filter-fav-btn active" : "filter-fav-btn",
          onClick: () => setOnlyFavs(!onlyFavs)
        }, onlyFavs ? "★ Salvos" : "☆ Salvos", ` (${favorites.length})`)
      ),

      h("div", {className: "results-line"},
        h("div", null,
          `${filtered.length} ${filtered.length === 1 ? "verbete encontrado" : "verbetes encontrados"}`,
          activeFiltersCount > 0 ? h("button", {
            className: "clear-filters-btn",
            style: {marginLeft: "12px"},
            onClick: () => {setQuery(""); setCat("todas"); setLetter("todas"); setOnlyFavs(false);}
          }, "Limpar filtros ×") : null
        ),
        h("span", null, "Clique no cartão para abrir · ★ para salvar")
      ),

      filtered.length
        ? h("div", {className: "entry-grid"},
            filtered.map(e => {
              const isFav = favorites.includes(e.id);
              return h("div", {
                className: "entry-card",
                key: e.id,
                role: "button",
                tabIndex: 0,
                onClick: () => openEntry(e),
                onKeyDown: ev => {if (ev.key === "Enter") openEntry(e);}
              },
                h("div", null,
                  h("div", {className: "entry-card-top"},
                    h("span", null, e.id),
                    h("div", {className: "entry-card-actions"},
                      h("span", {className: "seal-pill", title: "Nível de verificação da fonte"}, `Selo ${e.seal}`),
                      h("button", {
                        className: isFav ? "fav-star-btn saved" : "fav-star-btn",
                        title: isFav ? "Remover dos salvos" : "Salvar verbete para estudar",
                        onClick: ev => toggleFav(e.id, ev)
                      }, isFav ? "★" : "☆")
                    )
                  ),
                  h("h3", null, e.term),
                  h("p", null, e.body[0]?.slice(0, 145) + (e.body[0]?.length > 145 ? "…" : ""))
                ),
                h("div", {className: "entry-card-footer"},
                  h("div", {className: "entry-category"}, e.category),
                  h("span", {style: {color: "var(--accent)", fontSize: "13px", fontWeight: 600}}, "↗")
                )
              );
            })
          )
        : h("div", {className: "empty-state"},
            "Nenhum verbete encontrado com os filtros atuais. ",
            h("button", {
              className: "text-link",
              onClick: () => {setQuery(""); setCat("todas"); setLetter("todas"); setOnlyFavs(false);}
            }, "Redefinir busca")
          )
    ) : null,

    // VERBETE INDIVIDUAL
    page === "verbete" && selected ? h("main", {className: "content-wrap detail-wrap"},
      h("div", {className: "detail-topbar"},
        h("button", {className: "back-link", onClick: () => nav("dicionario")}, "← Voltar ao dicionário"),
        h("div", {className: "detail-actions"},
          h("button", {
            className: favorites.includes(selected.id) ? "action-chip saved" : "action-chip",
            onClick: () => toggleFav(selected.id)
          }, favorites.includes(selected.id) ? "★ Salvo nos favoritos" : "☆ Salvar verbete"),
          h("button", {
            className: copiedId === "verbete-cite" ? "action-chip copied" : "action-chip",
            onClick: () => copyText(
              `${selected.term}. In: RODRIGUES, Otelo et al. Metodologiário: dicionário de metodologia científica para a Ciência da Computação. Patos: UEPB, 2026. Verbete ${selected.id}.`,
              "verbete-cite"
            )
          }, copiedId === "verbete-cite" ? "✓ Citação ABNT copiada!" : "⎘ Citar este verbete (ABNT)")
        )
      ),
      h("div", {className: "detail-header"},
        h("div", {className: "detail-meta-row"},
          h("span", {className: "eyebrow"}, selected.id + " / " + selected.category),
          h("span", {className: "seal-pill"}, `Verificação: Selo ${selected.seal}`)
        ),
        h("h1", null, selected.term),
        h("p", null, "METODOLOGIÁRIO · VERBETE DE REFERÊNCIA")
      ),
      h("article", {className: "detail-body"},
        selected.body.map((p, i) => h("p", {key: i}, p))
      ),

      // Links clicáveis no "Ver também"
      selected.related ? h("div", {className: "related-box"},
        h("b", null, "VER TAMBÉM (CONEXÕES ENTRE CONCEITOS)"),
        h("div", {className: "related-chips"},
          selected.related.split(";").map((item, idx) => {
            const label = item.replace(/\.$/, "").trim();
            if (!label) return null;
            const target = resolveRelatedEntry(label);
            return target
              ? h("button", {key: idx, className: "related-chip", onClick: () => openEntry(target)}, `${target.term} ↗`)
              : h("span", {key: idx, className: "related-chip", style: {opacity: 0.75, cursor: "default"}}, label);
          })
        )
      ) : null,

      h("section", {className: "references-block"},
        h("div", {className: "eyebrow"}, "FONTES DO VERBETE (ABNT NBR 6023:2025)"),
        h("h2", null, "Referências"),
        selected.references.length
          ? selected.references.map((r, i) => h("div", {className: "reference-item", key: i},
              h("div", {className: "reference-text"}, linkify(r)),
              h("button", {
                className: copiedId === `ref-${i}` ? "copy-ref-btn copied" : "copy-ref-btn",
                onClick: () => copyText(r, `ref-${i}`)
              }, copiedId === `ref-${i}` ? "✓ Copiado" : "Copiar ABNT")
            ))
          : h("p", null, "O documento-base não apresenta referência específica para este verbete.")
      ),

      // Navegação Anterior / Próximo verbete
      h("div", {className: "prev-next-nav"},
        prevEntry
          ? h("button", {className: "prev-next-btn", onClick: () => openEntry(prevEntry)},
              h("small", null, `← ANTERIOR (${prevEntry.id})`),
              h("b", null, prevEntry.term)
            )
          : h("div"),
        nextEntry
          ? h("button", {className: "prev-next-btn next", onClick: () => openEntry(nextEntry)},
              h("small", null, `PRÓXIMO (${nextEntry.id}) →`),
              h("b", null, nextEntry.term)
            )
          : h("div")
      ),

      h("div", {className: "editor-note"}, "Nota de rigor: o conteúdo foi transposto do documento-base da equipe. Quando o próprio documento registra uma pendência de conferência, essa ressalva foi preservada; confira a fonte original antes da entrega.")
    ) : null,

    // GUIA ABNT + GERADOR RÁPIDO
    page === "abnt" ? h("main", {className: "content-wrap"},
      h("div", {className: "page-heading"},
        h("span", {className: "eyebrow"}, "NORMALIZAÇÃO ACADÊMICA"),
        h("h1", null, "ABNT sem mistério."),
        h("p", null, "Um painel de consulta rápida às normas citadas no projeto e um gerador auxiliar de referências.")
      ),
      h("div", {className: "norm-grid"},
        [
          ["NBR 6023:2025", "Referências", "3ª edição, publicada em 21 de maio de 2025. Orienta a elaboração e a apresentação das referências.", "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/149/2025/05/Referencias-NBR-6023-2025.pdf"],
          ["NBR 10520:2023", "Citações em documentos", "2ª edição. Trata da apresentação de citações; no documento-base, a equipe adota o sistema autor-data.", "https://biblioteca.ufes.br/normalizacao"],
          ["NBR 14724:2024", "Trabalhos acadêmicos", "A versão corrigida em 2025 incorpora a Errata 1, de 1º de abril de 2025.", "https://funesa.se.gov.br/wp-content/uploads/2025/06/TRABALHOS-ACADEMICOS.pdf"],
          ["NBR 15287:2025", "Projeto de pesquisa", "Norma indicada no documento-base para apresentação de projetos de pesquisa. Confirme a edição e os detalhes no catálogo institucional.", "https://www.abnt.org.br/"],
          ["NBR 6028:2021", "Resumo, resenha e recensão", "Norma indicada no documento-base para apresentação de resumos, resenhas e recensões.", "https://biblioteca.ufes.br/normalizacao"]
        ].map((n, i) => h("div", {className: "norm-card", key: i},
          h("span", {className: "norm-number"}, "0" + (i + 1)),
          h("h3", null, n[0]),
          h("b", null, n[1]),
          h("p", null, n[2]),
          h("a", {href: n[3], target: "_blank", rel: "noreferrer"}, "Consultar fonte ↗")
        ))
      ),

      // Ferramenta prática: Montador rápido de referência ABNT NBR 6023:2025
      h("section", {className: "abnt-helper"},
        h("span", {className: "eyebrow"}, "FERRAMENTA PRÁTICA · NBR 6023:2025"),
        h("h2", null, "Montador rápido de referência"),
        h("p", null, "Preencha os campos abaixo para estruturar uma referência básica no padrão autor-data utilizado no Metodologiário."),
        h("div", {className: "abnt-form-grid"},
          h("div", {className: "abnt-field"},
            h("label", null, "Tipo de fonte"),
            h("select", {value: abntType, onChange: e => setAbntType(e.target.value)},
              h("option", {value: "livro"}, "Livro / Monografia"),
              h("option", {value: "artigo"}, "Artigo científico / Evento")
            )
          ),
          h("div", {className: "abnt-field"},
            h("label", null, "Autor(es) (SOBRENOME, Nome)"),
            h("input", {value: abntAuthor, onChange: e => setAbntAuthor(e.target.value), placeholder: "Ex.: GIL, Antonio Carlos"})
          ),
          h("div", {className: "abnt-field full"},
            h("label", null, "Título da obra ou artigo"),
            h("input", {value: abntTitle, onChange: e => setAbntTitle(e.target.value), placeholder: "Ex.: Como elaborar projetos de pesquisa"})
          ),
          h("div", {className: "abnt-field"},
            h("label", null, abntType === "livro" ? "Edição, Local: Editora" : "Periódico/Evento, volume, páginas"),
            h("input", {value: abntExtra, onChange: e => setAbntExtra(e.target.value), placeholder: "Ex.: 7. ed. São Paulo: Atlas"})
          ),
          h("div", {className: "abnt-field"},
            h("label", null, "Ano de publicação"),
            h("input", {value: abntYear, onChange: e => setAbntYear(e.target.value), placeholder: "Ex.: 2022"})
          ),
          h("div", {className: "abnt-field full"},
            h("label", null, "DOI ou URL (opcional)"),
            h("input", {value: abntUrl, onChange: e => setAbntUrl(e.target.value), placeholder: "Ex.: https://doi.org/..."})
          )
        ),
        h("div", {className: "abnt-preview-box"},
          h("div", {className: "abnt-preview-text"}, generatedAbntRef),
          h("button", {
            className: copiedId === "abnt-gen" ? "copy-ref-btn copied" : "copy-ref-btn",
            onClick: () => copyText(generatedAbntRef, "abnt-gen")
          }, copiedId === "abnt-gen" ? "✓ Copiada!" : "Copiar referência")
        )
      ),

      h("h2", {className: "subsection-title"}, "Guias institucionais e notas sobre as normas"),
      refsExtra.slice(0, 4).map((r, i) => h("div", {className: "source-row", key: i},
        h("div", null, h("b", null, r.title), h("small", null, r.org + " · " + r.note)),
        h("a", {href: r.url, target: "_blank", rel: "noreferrer"}, "Abrir ↗")
      ))
    ) : null,

    // EQUIPE
    page === "equipe" ? h("main", {className: "content-wrap team-wrap"},
      h("div", {className: "page-heading"},
        h("span", {className: "eyebrow"}, "QUEM FAZ A PESQUISA"),
        h("h1", null, "Feito em equipe."),
        h("p", null, "Um trabalho coletivo do curso de Ciência da Computação da Universidade Estadual da Paraíba — Campus VII, Patos.")
      ),
      h("div", {className: "team-intro"},
        h("div", {className: "team-emblem"}, h("img", {src: "logo.png", alt: "Símbolo Metodologiário"})),
        h("div", null,
          h("span", {className: "eyebrow"}, "PROJETO ACADÊMICO · 2026"),
          h("h2", null, "Metodologiário"),
          h("p", null, "Dicionário de metodologia científica para a Ciência da Computação. O projeto organiza conceitos, métodos e fontes de consulta para apoiar a trajetória de pesquisa acadêmica.")
        )
      ),
      h("div", {className: "team-heading"},
        h("span", {className: "eyebrow"}, "INTEGRANTES"),
        h("h2", null, "Equipe do projeto")
      ),
      h("div", {className: "team-grid"},
        ["Otelo Rodrigues", "Cleiton Manoel", "Emanuel Medeiros", "José Fidélis", "Juan Souza", "Kledir Medeiros"].map((name, i) =>
          h("div", {className: "team-card", key: name, style: {animationDelay: (i * 90) + "ms"}},
            h("span", {className: "team-index"}, String(i + 1).padStart(2, "0")),
            h("div", {className: "avatar-monogram"}, name.split(" ").map(x => x[0]).join("").slice(0, 2).toUpperCase()),
            h("h3", null, name),
            h("small", null, "Ciência da Computação · UEPB")
          )
        )
      ),
      h("div", {className: "advisor-card"},
        h("span", {className: "eyebrow"}, "ORIENTAÇÃO DA DISCIPLINA"),
        h("h2", null, "Profa. Dra. Rosangela de Araujo Medeiros"),
        h("p", null, "Disciplina: Metodologia Científica")
      ),
      h("div", {className: "institution-line"},
        h("b", null, "UNIVERSIDADE ESTADUAL DA PARAÍBA"),
        h("span", null, "CAMPUS VII · PATOS — PB"),
        h("span", null, "2026")
      )
    ) : null,

    // FONTES & CRITÉRIOS
    page === "fontes" ? h("main", {className: "content-wrap"},
      h("div", {className: "page-heading"},
        h("span", {className: "eyebrow"}, "RASTREABILIDADE"),
        h("h1", null, "Fontes & critérios."),
        h("p", null, "O que sustenta o conteúdo e como a equipe pode conferir cada informação.")
      ),
      h("div", {className: "method-card"},
        h("h2", null, "Como ler este dicionário"),
        h("p", null, "Os 45 verbetes e suas referências foram extraídos do documento “Metodologiário — Dicionário de metodologia científica para a Ciência da Computação”, elaborado pela equipe da UEPB, Campus VII — Patos, para a disciplina Metodologia Científica."),
        h("p", null, "O documento-base informa que as fontes foram localizadas em 02/11/2026 e classificadas por níveis de verificação (selos A a D exibidos em cada verbete):"),
        h("div", {className: "seals-legend"},
          h("div", {className: "seal-box"}, h("b", null, "Selo A"), h("span", null, "Artigo ou livro com DOI e resumo ou texto conferidos.")),
          h("div", {className: "seal-box"}, h("b", null, "Selo B"), h("span", null, "Livro conferido em catálogo, editora ou sumário publicado.")),
          h("div", {className: "seal-box"}, h("b", null, "Selo C"), h("span", null, "Norma conferida por capa, ficha, catálogo ou guias de bibliotecas.")),
          h("div", {className: "seal-box"}, h("b", null, "Selo D"), h("span", null, "Página institucional ou de notícia oficial lida."))
        ),
        h("p", {style: {marginTop: "20px"}}, "O próprio documento registra limitações: alguns livros não foram lidos integralmente; normas ABNT são pagas; páginas e links podem mudar; e referências devem ser reabertas antes da entrega. Essas ressalvas são mantidas neste site.")
      ),
      h("div", {className: "ai-card"},
        h("span", {className: "ai-label"}, "TRANSPARÊNCIA ACADÊMICA"),
        h("h2", null, "Declaração de uso de IA"),
        h("p", null, "Conforme boas práticas de integridade científica, registra-se o uso de inteligência artificial no apoio à organização inicial dos verbetes, redação de rascunhos de definições e conferência de registros bibliográficos (ABNT NBR 6023:2025 e NBR 10520:2023). Todo conteúdo foi revisado pela equipe e conferido em fontes externas."),
        h("div", {className: "prompt-box"},
          h("b", null, "RESPONSABILIDADE HUMANA"),
          h("p", null, "A IA não substitui a leitura das fontes primárias. A equipe revisou os textos, conferiu os links e manteve sinalizadas as pendências de consulta aos exemplares físicos.")
        ),
        h("div", {className: "ai-foot"},
          h("span", null, "FERRAMENTA: CLAUDE (ANTHROPIC)"),
          h("span", null, "MODELO: CLAUDE SONNET 5.5"),
          h("span", null, "DATA: 02/11/2026")
        )
      ),
      h("h2", {className: "subsection-title"}, "Documentos e guias de referência"),
      refsExtra.map((r, i) => h("div", {className: "source-row", key: i},
        h("div", null, h("b", null, r.title), h("small", null, r.org + " · " + r.note)),
        h("a", {href: r.url, target: "_blank", rel: "noreferrer"}, "Abrir ↗")
      )),
      h("div", {className: "warning-panel"},
        h("b", null, "Uma regra simples"),
        h("p", null, "Não cite uma referência apenas porque ela apareceu em uma resposta de IA. Localize o artigo, livro, norma ou página original, confira autoria, título, data e DOI/URL, e só então inclua a referência no trabalho.")
      )
    ) : null,

    // FOOTER
    h("footer", {className: "footer"},
      h("div", null,
        h("img", {className: "brand-logo footer-logo", src: "logo.png", alt: "Logotipo Metodologiário"}),
        h("b", null, "METODOLOGIÁRIO"),
        h("small", null, "UEPB · CAMPUS VII · PATOS — PB")
      ),
      h("p", null, "Dicionário de metodologia científica para a Ciência da Computação."),
      h("small", null, "Otelo Rodrigues · Cleiton Manoel · Emanuel Medeiros · José Fidélis · Juan Souza · Kledir Medeiros · 2026")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));