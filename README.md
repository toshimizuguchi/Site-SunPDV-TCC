# Sun PDV — Site (React + Vite)

![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) ![Node >= 18](https://img.shields.io/badge/Node-%3E%3D18-339933?logo=node.js&logoColor=white) ![Deploy: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)

- [Demo](https://toshimizuguchi.github.io/Site-SunPDV-TCC)
- [Como executar](#como-executar-localmente)
- [Scripts](#scripts-disponiveis)
- [Deploy](#deploy-no-github-pages)

### Início rápido
```bash
cd Site
npm install
npm run dev
```

---

Site institucional do Sun PDV construído com React e Vite. Este repositório contém a aplicação front‑end (SPA) que apresenta o produto, páginas de informações e a área de download.


## Visão geral
O projeto é uma Single Page Application com rotas públicas para navegação:
- Home (`/`)
- Sobre Nós (`/Sobre-Nos`)
- Download (`/Download`)
- Página de agradecimento pós‑instalação (`/obrigado`)
- Política de Privacidade (`/privacidade`)
- Termos de Uso (`/termos`)
- Licença (`/licenca`)

Recursos principais:
- Interface responsiva e moderna
- Roteamento via React Router
- Deploy automatizado no GitHub Pages

## Tecnologias
- React 19
- Vite 6
- React Router DOM 7
- ESLint 9 (configurado via `eslint.config.js`)
- gh-pages (deploy para GitHub Pages)

## Pré‑requisitos
- Node.js 18+ (recomendado)
- npm 9+ (ou pnpm/yarn, se preferir)

## Como executar localmente
```bash
cd Site
npm install
npm run dev
```
Por padrão, o Vite iniciará em `http://localhost:5173`.

Observação (proxy de API durante o desenvolvimento):
- O `package.json` define `"proxy": "http://localhost:3001"`. Se a SPA fizer chamadas a uma API durante o dev, suba o backend separadamente nessa porta.

## Scripts disponíveis
No diretório `Site`:
- `npm run dev`: inicia o servidor de desenvolvimento Vite
- `npm run build`: gera a versão de produção em `dist/`
- `npm run preview`: serve localmente a build de produção
- `npm run lint`: executa o ESLint
- `npm run deploy`: publica a pasta `dist/` no branch `gh-pages` (GitHub Pages)

## Estrutura de pastas (resumo)
```
Site/
  src/
    App.jsx
    main.jsx
    Components/
      DpsInstall.jsx
      LicensePage.jsx
      PagDown.jsx
      PagSobr.jsx
      PrivacyPolitics.jsx
      TermsOfService.jsx
      styles/
        App.css
        DownloadPage.css
        LicensePage.css
        ObrigadoPage.css
        PolicyPages.css
        SobrePage.css
  public/
    (imagens e ativos estáticos)
  dist/
    (arquivos gerados após build)
  package.json
  vite.config.js
  eslint.config.js
```

## Deploy no GitHub Pages
Este projeto está configurado para publicar no GitHub Pages usando o pacote `gh-pages`.

1) Garanta que o nome do repositório e a base do Vite coincidam exatamente (incluindo maiúsculas/minúsculas):
   - Em `vite.config.js`, ajuste:
     ```js
     export default defineConfig({
       plugins: [react()],
       base: "/SEU-REPOSITORIO/",
     })
     ```
   - No `package.json`, a propriedade `homepage` deve apontar para `https://SEU_USUARIO.github.io/SEU-REPOSITORIO`.

2) Gere a build e publique:
```bash
cd Site
npm run build
npm run deploy
```
Isso criará/atualizará o branch `gh-pages`. No GitHub, em Settings → Pages, selecione a fonte `Deploy from a branch` com `gh-pages`.

## Convenções e qualidade de código
- Lint configurado em `eslint.config.js`. Para verificar:
  ```bash
  npm run lint
  ```

## Contato
- E‑mail: suporte@sunpdv.com
- Telefone: (12) 3456‑7890
- WhatsApp: (12) 98765‑4321

## Licença
Consulte a página interna `/licenca` da aplicação para detalhes. Caso precise de um arquivo de licença no repositório, adicione um `LICENSE` conforme a política do projeto.
