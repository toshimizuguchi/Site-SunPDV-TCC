---
title: "Site Sun PDV — Explicação para TCC"
author: "Equipe Sun PDV"
date: "2025-10-22"
---

# 1. Visão Geral do Projeto

O site do Sun PDV é uma aplicação web institucional desenvolvida como Single Page Application (SPA) para apresentar o produto, seus diferenciais e materiais legais (Termos de Uso, Política de Privacidade e Licença), além de disponibilizar o download do instalador do sistema. O foco de UX é conduzir o visitante ao download com segurança, transparência e clareza.

Principais objetivos:
- Divulgar o produto Sun PDV e seus benefícios.
- Disponibilizar materiais legais e cumprir requisitos de consentimento.
- Oferecer um fluxo de download simples e confiável, com instruções pós‑instalação.

# 2. Arquitetura e Tecnologias

- Framework: React 19 + Vite 6 (SPA).
- Roteamento: `react-router-dom` (v7), com rotas públicas.
- Estilos: CSS modularizado por página/área em `src/Components/styles/`.
- Interações/Animações: `react-intersection-observer` + `react-countup`.
- Deploy: GitHub Pages via `gh-pages`.
- Configuração relevante (Vite):
  - `assetsInclude: ['**/*.exe']` para embutir executáveis.
  - `server.headers['Content-Type'] = 'application/octet-stream'` para downloads corretos.
  - `base` ajustável conforme o subcaminho do repositório no Pages.

Estrutura de rotas em `src/main.jsx`:
- `/` Home
- `/Sobre-Nos` Sobre nós
- `/Download` Página de download (com aceite de termos)
- `/obrigado` Página pós‑instalação
- `/privacidade` Política de Privacidade
- `/termos` Termos de Uso
- `/licenca` Licença

# 3. Páginas Principais (Resumo)

- Home: Hero com proposta de valor e CTA para download.
- Sobre Nós: Diferenciais, história com números animados e equipe.
- Download: Requisitos de sistema, botão de download com estado e modal de termos.
- Obrigado: Passos pós‑instalação e contato rápido (WhatsApp).
- Materiais Legais: Conteúdos internos versionados junto do front‑end.

# 4. Fluxo de Aceite dos Termos (detalhado)

Esta é a parte mais crítica do ponto de vista legal e de experiência do usuário (UX). O objetivo é garantir que o usuário tenha ciência dos Termos de Uso e da Política de Privacidade antes de iniciar o download do software.

## 4.1 Motivação e requisitos

- Transparência: apresentar, de forma clara, as condições de uso e como os dados são tratados.
- Consentimento: impedir o download até que o usuário aceite os termos.
- Acessibilidade: permitir que os links levem às páginas de Termos e Privacidade sem perda de contexto.

## 4.2 Comportamento do sistema

A implementação reside na página `Download` (`src/Components/PagDown.jsx`) e utiliza três estados:
- `termsAccepted`: controle de aceite do usuário.
- `showTermsModal`: exibição do modal com o resumo de termos.
- `isDownloading`: estado do botão de download (loading/disabled).

Lógica principal:
1) Ao clicar em “Baixar Sun PDV”, o sistema verifica `termsAccepted`.
2) Se for `false`, o modal de termos é exibido (e o download é bloqueado).
3) Dentro do modal, o usuário pode:
   - Ler o resumo e acessar as páginas completas de **Termos** (`/termos`) e **Privacidade** (`/privacidade`).
   - Clicar em “Aceitar e Baixar”, que define `termsAccepted = true`, fecha o modal e prossegue com o download.
4) Após o aceite, o sistema navega para `/obrigado` e inicia o download do executável automaticamente.

Trecho lógico (simplificado):
```jsx
// handleDownload()
if (!termsAccepted) {
  setShowTermsModal(true);
  return; // bloqueia o download até aceitar
}

navigate('/obrigado');
setIsDownloading(true);
setTimeout(() => {
  const link = document.createElement('a');
  link.href = '/SunPDVapp/SunPDV-1.0.exe';
  link.download = 'SunPDV-1.0.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setIsDownloading(false);
}, 1000);
```

A chamada `acceptTerms()` efetiva o consentimento e encadeia o fluxo do `handleDownload()`:
```jsx
const acceptTerms = () => {
  setTermsAccepted(true);
  setShowTermsModal(false);
  handleDownload();
};
```

## 4.3 Experiência do usuário no modal

- O modal explica, em linguagem simples, os compromissos do usuário (não redistribuir, respeitar licenças, etc.).
- Apresenta links diretos para as páginas completas de **Termos de Uso** e **Política de Privacidade**.
- Possui botões “Cancelar” (fecha o modal e não prossegue) e “Aceitar e Baixar” (prossegue com o download).
- Caso o usuário não aceite, o download permanece bloqueado.

## 4.4 Boas práticas e melhorias sugeridas

- Persistência do aceite: registrar o aceite em `localStorage` para evitar perguntar novamente no mesmo dispositivo, com data e versão dos termos.
- Auditoria/Compliance: em cenários corporativos, registrar no backend (com IP, data/hora e versão) — este site é apenas front‑end.
- Acessibilidade: foco no primeiro elemento do modal, `aria-modal`, e tecla `Esc` para fechar; trap de foco enquanto o modal estiver aberto.
- Internacionalização: versão do modal e dos termos em outros idiomas.

# 5. Fluxo de Download do Sistema (detalhado)

O download do instalador é realizado de forma programática após o aceite, para simplificar a jornada do usuário.

## 5.1 Armazenamento e disponibilização do binário

- Os arquivos do instalador ficam em `public/SunPDVapp/` (por exemplo, `SunPDV-1.0.exe` e/ou `SunPDV-1.0.zip`).
- Em projetos Vite, tudo que está em `public/` é servido na raiz do site em produção. Assim, a URL do arquivo é `/SunPDVapp/SunPDV-1.0.exe`.

## 5.2 Disparo programático do download

- O código cria dinamicamente um elemento `<a>` com `href` apontando para o executável e `download` definido, dispara o clique e remove o elemento — garantindo a experiência de “clique único”.
- Antes disso, há um `navigate('/obrigado')` para fornecer feedback imediato e instruções pós‑instalação durante o download.

## 5.3 Configurações para downloads confiáveis

- `vite.config.js` inclui:
  - `assetsInclude: ['**/*.exe']` para reconhecer `.exe` como asset válido.
  - Header `Content-Type: application/octet-stream` no servidor de desenvolvimento (útil em dev; no Pages, o arquivo estático é servido corretamente via HTTPS).
- Ajuste de `base`: ao publicar em GitHub Pages sob um subcaminho (ex.: `/Site-SunPDV-TCC/`), definir `base` para esse subcaminho e manter `package.json.homepage` coerente.

## 5.4 Requisitos e alternativas

- Requisitos (exibidos na página): Windows 10+/Linux, CPU i3+, 4GB RAM (8GB recomendado), ~500MB em disco.
- Alternativa `.zip`: além do `.exe`, pode‑se oferecer `.zip` para cenários com restrições de instalação (o arquivo já existe no repositório público, se aplicável).

## 5.5 Boas práticas adicionais

- Integridade: publicar checksum (SHA‑256) do instalador e orientar o usuário a conferir.
- Assinatura de código (Windows): aumenta confiança e reduz alertas do SmartScreen.
- Versionamento: incluir o número da versão no nome do arquivo e nas páginas.
- Analytics (consentido): medir taxa de conversão de “view → download”.

# 6. Página de Obrigado e Onboarding

A rota `/obrigado` guia o usuário nos primeiros passos:
1) Executar o instalador.
2) Completar o cadastro.
3) Iniciar o uso (configurar estabelecimento e começar as vendas).

Inclui link de suporte rápido via WhatsApp para reduzir atrito na fase inicial.

# 7. Materiais Legais Internos

- **Política de Privacidade** (`/privacidade`): tipos de dados, usos e proteção.
- **Termos de Uso** (`/termos`): aceitação, licença/restrições e responsabilidades.
- **Licença** (`/licenca`): planos (Básica/Empresarial), termos e compra.

Manter esses conteúdos dentro do próprio site garante versionamento e fácil atualização.

# 8. Execução e Deploy

- Desenvolvimento local:
  ```bash
  cd Site
  npm install
  npm run dev
  # http://localhost:5173
  ```
- Build e deploy para GitHub Pages:
  ```bash
  npm run build
  npm run deploy
  # publica dist/ no branch gh-pages
  ```
- Garanta a coerência entre `vite.config.js: base` e `package.json: homepage`.

# 9. Conclusão

O site do Sun PDV entrega uma jornada clara e segura para download do sistema, com destaque para o cumprimento do consentimento dos termos antes da disponibilização do instalador. A arquitetura em SPA, o uso de assets em `public/` e a configuração do Vite simplificam a publicação estática e a manutenção contínua. O resultado é um fluxo enxuto: conhecer → aceitar termos → baixar → instalar → começar a usar.