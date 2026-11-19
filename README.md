# Metodologiário — UEPB / Ciência da Computação

Aplicação web acadêmica desenvolvida com React, Vite, Tailwind CSS e Lucide React.

## Requisitos
- Node.js 18 ou superior
- npm

## Como executar
```bash
npm install
npm run dev
```
Abra o endereço local informado pelo Vite (normalmente http://localhost:5173).

## Gerar versão de produção
```bash
npm run build
npm run preview
```
Os arquivos finais serão gerados em `dist/`.

## O que já funciona
- Busca por termo, definição, categoria, relações e referências.
- Filtro pelas quatro categorias do documento-base.
- Índice alfabético A–Z.
- Página individual para cada verbete.
- Ligações "Ver também" entre verbetes quando o termo relacionado está cadastrado.
- Referências exibidas junto ao verbete e abertura de links quando disponíveis no texto.
- Biblioteca pessoal de verbetes salvos via `localStorage`.
- Página institucional com os dados da UEPB e os integrantes conforme o documento.
- Layout responsivo para desktop e celular.

## Base acadêmica e integridade
Os 45 verbetes foram organizados a partir do PDF `Metodologiario_UEPB_Patos.pdf`, mantendo as quatro categorias, os textos e as referências presentes no documento. As cinco sugestões de expansão aparecem separadas, identificadas como propostas ainda não redigidas e com fontes não verificadas no documento. Não foram criadas referências bibliográficas adicionais.

O documento-base informa limites de verificação para livros e normas e recomenda reabrir links antes da entrega. A interface não transforma esses limites em selos de verificação inventados.

## Estrutura
```
src/
  data/entries.json   # 45 verbetes extraídos do documento-base
  main.jsx           # aplicação e componentes React
  styles.css         # identidade visual e responsividade
index.html
vite.config.js
package.json
```

## Publicar gratuitamente no GitHub Pages

Este projeto já está configurado para publicação automática pelo GitHub Actions.

1. Crie no GitHub um repositório chamado **metodologionario**.
2. Envie todo o conteúdo desta pasta para a branch **main** (incluindo a pasta oculta `.github`).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **GitHub Actions**.
5. A cada envio para a branch `main`, o GitHub Actions compilará e publicará o site.
6. Acompanhe o processo na aba **Actions**. Quando terminar com sucesso, o endereço será:
   `https://SEU-USUARIO.github.io/metodologionario/`

### Importante: nome do repositório

O `vite.config.js` usa `base: '/metodologionario/'`. Portanto, o repositório precisa se chamar exatamente `metodologionario`.
Se escolher outro nome, altere esse valor para `'/NOME-DO-REPOSITORIO/'` antes de enviar o projeto.

### Se preferir enviar pelo terminal

```bash
git init
git add .
git commit -m "Publica Metodologiário"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/metodologionario.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.
