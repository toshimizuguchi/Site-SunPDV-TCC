# Sun PDV — Projeto (Monorepo simples)

Este repositório contém o site institucional do Sun PDV desenvolvido com React + Vite.

- **Diretório da aplicação**: `Site`
- **Demo**: https://toshimizuguchi.github.io/Site-SunPDV-TCC

## Sumário
- Visão Geral
- Requisitos
- Instalação e Execução
- Scripts
- Estrutura de Pastas
- Rotas Disponíveis
- Deploy (GitHub Pages)
- Qualidade de Código
- Contato
- Licença

## Visão Geral
O `Site` é uma SPA (Single Page Application) com páginas institucionais, área de download e políticas legais.

## Requisitos
- Node.js 18+
- npm 9+ (ou pnpm/yarn)

## Instalação e Execução
```bash
cd Site
npm install
npm run dev
```
O servidor inicia em `http://localhost:5173`.

## Scripts (no diretório `Site`)
- `npm run dev`: servidor de desenvolvimento (Vite)
- `npm run build`: build de produção em `dist/`
- `npm run preview`: pré-visualiza a build
- `npm run lint`: verifica lint
- `npm run deploy`: publica `dist/` no `gh-pages`

## Estrutura de Pastas (resumo)
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
  public/
  dist/
  package.json
  vite.config.js
  eslint.config.js
```

## Rotas Disponíveis
- `/` — Home
- `/Sobre-Nos` — Sobre Nós
- `/Download` — Download e requisitos
- `/obrigado` — Pós-download/instalação
- `/privacidade` — Política de Privacidade
- `/termos` — Termos de Uso
- `/licenca` — Licenças

## Deploy (GitHub Pages)
- Ajuste `base` em `Site/vite.config.js` para o nome exato do repositório.
- Ajuste `homepage` no `Site/package.json` com a URL do projeto.
- Gere a build e publique:
```bash
cd Site
npm run build
npm run deploy
```
Ative o GitHub Pages no repositório para o branch `gh-pages`.

## Qualidade de Código
- Lint configurado via `Site/eslint.config.js`:
```bash
npm run lint
```

## Contato
- E‑mail: suporte@sunpdv.com
- Telefone: (12) 3456‑7890
- WhatsApp: (12) 98765‑4321

## Licença
Consulte a página interna `/licenca` da aplicação. Se necessário, adicione um arquivo `LICENSE` na raiz do repositório.