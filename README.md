# VMMADV — Site Institucional

Site institucional da **Victor Morais Advocacia & Consultoria**, construído com Next.js 16, Tailwind CSS 4 e hospedagem prevista na Vercel.

## Documentação

- [PRD completo](docs/PRD.md)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |

## Estrutura principal

```
src/
├── app/              # Rotas (App Router)
├── components/       # UI, layout, formulários
└── lib/              # Config, áreas, SEO, blog
```

## Próximas integrações

- Google Sheets API (leads + newsletter)
- Sanity CMS (blog e páginas editáveis)
- Google Analytics 4
- Deploy Vercel + domínio

## Notion

- [PRD Site Institucional](https://app.notion.com/p/38048f3299e7816582acd4e0ba1ed75c)
- [Plano de Implementação](https://app.notion.com/p/38048f3299e781e6ae84e053aa097ead)
- Tarefas no board **Task List**
