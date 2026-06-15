# PRD — Victor Morais Advocacia & Consultoria (VMMADV)

> Product Requirements Document  
> Versão: 1.0 · Junho/2026  
> Domínio alvo: victormoraisadv.com.br  
> Stack: Next.js 16 · Tailwind CSS 4 · Vercel · Sanity CMS (fase 2)

---

## 1. Resumo executivo

Reconstrução do site institucional da **Victor Morais Advocacia & Consultoria (VMMADV)** com foco em:

- **Captação de leads** via formulário inteligente → WhatsApp
- **Credibilidade institucional** com tom moderno e humano
- **Informação clara** sobre 13 áreas de atuação + página dedicada a Precatórios/RPV
- **SEO e Google Ads** com landing pages e dados estruturados
- **Custo operacional mínimo** (apenas domínio; hospedagem Vercel free tier)

O site atual coexistirá com o novo até migração completa do domínio.

---

## 2. Objetivos e métricas de sucesso

| Objetivo | Indicador |
|----------|-----------|
| Captar leads qualificados | Formulários enviados + cliques WhatsApp |
| Aumentar credibilidade | Tempo na página, páginas/ sessão |
| Informar sobre áreas | Visitas em `/areas/*` e `/precatorios-rpv` |
| SEO local e nacional | Posicionamento para keywords de Maceió + precatórios |
| Campanhas pagas | Conversão em landing pages `/lp/*` |

**Público principal:** credores de precatórios e pessoas físicas.  
**Públicos secundários:** empresas, órgãos públicos.

---

## 3. Personas e jornadas

### 3.1 Credor de Precatório/RPV
1. Chega via Google Ads ou busca orgânica
2. Acessa `/precatorios-rpv` ou landing `/lp/precatorios`
3. Lê conteúdo específico
4. Preenche formulário (área: Precatórios)
5. Redirecionado ao WhatsApp com mensagem pré-preenchida
6. Lead salvo na planilha Google Sheets

### 3.2 Pessoa física — demanda geral
1. Chega na home
2. Usa triagem *"Em que podemos ajudar?"*
3. Navega para página da área
4. Formulário ou WhatsApp direto

### 3.3 Visitante institucional
1. Home → Sobre → Áreas → Contato
2. Pode assinar newsletter
3. Pode buscar conteúdo no blog

---

## 4. Identidade e marca

| Campo | Valor |
|-------|-------|
| Nome | Victor Morais Advocacia & Consultoria |
| Sigla | VMMADV |
| Fundador | Dr. Victor de Medeiros Morais |
| OAB | OAB/AL nº 15.318 |
| Endereço | Av. Governador Osman Loureiro, 3506 — Ed. Premium Office, Salas 202 e 204, Mangabeiras, Maceió/AL |
| Hero | Advocacia & Consultoria Jurídica |
| Slogan institucional | Advocacia técnica, estratégica e comprometida com a defesa de direitos de alta complexidade. |
| Tagline consultivo | Atendimento jurídico estruturado, com triagem objetiva e direcionamento adequado da sua demanda. |
| Tom | Moderno, humano, minimalista |
| Referência visual | devictor.adv.br |
| Evitar estilo | ancref.com.br |
| Idioma | PT-BR apenas |
| Fotos | Reais (usar existentes até sessão nova) |

### Paleta (manter identidade atual)
- **Navy** `#0B1F3A` — primária
- **Gold** `#C5A572` — destaque/CTA
- **Slate** `#64748B` — texto secundário
- **Off-white** `#F8F9FA` — fundos alternados
- **White** `#FFFFFF` — fundo principal

### Tipografia
- **Títulos:** Source Serif 4 (legibilidade + autoridade)
- **Corpo:** Inter (alta legibilidade mobile, tamanho base 16–18px)

---

## 5. Contatos e integrações

### Canal principal (destaque no site)
- WhatsApp: +55 (82) 99919-3356
- Link padrão: `https://wa.me/5582999193356?text=Olá,%20gostaria%20de%20uma%20análise%20jurídica.`
- E-mail: contato@victormoraisadv.com.br

### Canais internos (não destacar telefone)
- SCS: +55 (82) 8135-4563 · victormorais@sarmentocamargo.adv.br
- ANCREF: +55 (82) 8212-2879 · contato3@ancref.org.br
- Precatórios (e-mail): vmm.adv.precatorios@gmail.com — sem destaque visual separado

### Parcerias
Seções na home e contato (SCS, ANCREF) — sem páginas dedicadas.

---

## 6. Mapa do site

```
/                           Home
/sobre                      Sobre o escritório / Dr. Victor
/areas-de-atuacao           Índice de áreas
/areas/[slug]               Página individual (13 áreas)
/precatorios-rpv            Página dedicada Precatórios/RPV
/contato                    Formulário + mapa
/blog                       Listagem de artigos
/blog/[slug]                Artigo
/publicacoes                Publicações / notícias
/politica-de-privacidade    LGPD
/termos-de-uso              Termos
/trabalhe-conosco           Carreiras
/lp/[slug]                  Landing pages Google Ads
```

### Áreas de atuação (13)
1. direito-tributario
2. direito-publico
3. direito-administrativo
4. direito-previdenciario
5. direito-sucessorio
6. direito-condominial
7. direito-empresarial
8. direito-contratual
9. direito-medico
10. direito-imobiliario
11. consultoria-armas-de-fogo
12. registro-empresas-vigilancia

---

## 7. Requisitos funcionais

### 7.1 Home
- [ ] Hero com **carrossel** de imagens reais
- [ ] Título: *Advocacia & Consultoria Jurídica*
- [ ] Bloco triagem: *"Em que podemos ajudar?"* + seletor de área
- [ ] Cards das áreas de atuação
- [ ] Sobre resumido
- [ ] Bloco destaque Precatórios/RPV
- [ ] Seção parcerias (SCS, ANCREF)
- [ ] Mapa Google Maps (Premium Office, Mangabeiras)
- [ ] CTAs: formulário + WhatsApp + telefone principal
- [ ] Newsletter
- [ ] Depoimentos (estrutura pronta, conteúdo futuro)

### 7.2 Formulário de contato
**Campos obrigatórios:**
| Campo | Tipo | Validação |
|-------|------|-----------|
| Nome | text | min 3 chars |
| CPF | text | máscara + dígitos verificadores |
| Telefone | text | máscara BR |
| Área | select | 13 áreas + Precatórios/RPV |
| Motivo | select | Dúvidas / Ingressar com ação / Andamento / Outro |
| Motivo (outro) | text | condicional se Motivo = Outro |
| Consentimento LGPD | checkbox | obrigatório |

**Fluxo pós-envio:**
1. POST `/api/leads` → valida dados
2. Salva em Google Sheets (aba `leads`)
3. Retorna URL WhatsApp com mensagem formatada
4. Cliente abre WhatsApp em nova aba

**Mensagem WhatsApp modelo:**
```
Olá, gostaria de uma análise jurídica.

Nome: {nome}
CPF: {cpf}
Telefone: {telefone}
Área: {area}
Motivo: {motivo}
```

### 7.3 Newsletter
- Campo e-mail + consentimento LGPD
- POST `/api/newsletter` → Google Sheets aba `newsletter`

### 7.4 Widget flutuante WhatsApp
- Presente em todas as páginas
- Link para WhatsApp principal com mensagem padrão

### 7.5 Busca
- Busca client-side em páginas estáticas + blog (fase 1)
- Integração Sanity search (fase 2)

### 7.6 Blog e CMS
- **Fase 1:** conteúdo estático/Markdown no repositório
- **Fase 2:** Sanity CMS para edição sem código
- Publicação feita pela equipe interna

### 7.7 Landing pages (Google Ads)
- Layout enxuto, CTA único
- Slugs: `precatorios`, `tributario`, `previdenciario`, etc.
- Sem navegação pesada

---

## 8. Requisitos não-funcionais

| Requisito | Critério |
|-----------|----------|
| Mobile first | Lighthouse mobile ≥ 90 performance |
| Velocidade | LCP < 2.5s |
| Acessibilidade | Contraste WCAG AA, fontes legíveis |
| SEO | sitemap.xml, robots.txt, meta tags, schema.org |
| Open Graph | og:title, og:description, og:image por página |
| Analytics | Google Analytics 4 |
| Custo | R$ 0 além do domínio |
| Hospedagem | Vercel |
| LGPD | Banner cookies + política + consentimento em forms |

---

## 9. SEO — palavras-chave prioritárias

**Local:** advogado Maceió, escritório advocacia Alagoas, advogado Mangabeiras  
**Precatórios:** precatórios Alagoas, RPV, credor precatório, advogado precatórios  
**Áreas:** direito tributário Maceió, direito público, direito previdenciário, ação civil pública  
**Long-tail:** uma página focada por área + landing pages Ads

### Schema.org
- `LegalService` (escritório)
- `Attorney` (Dr. Victor)
- `LocalBusiness` com endereço Maceió

---

## 10. LGPD e OAB

### LGPD
- Banner de cookies (essenciais + analytics)
- Política de privacidade detalhada
- Checkbox de consentimento em todos os formulários
- Finalidade explícita para coleta de CPF
- Retenção e direitos do titular documentados

### OAB
- Avisos de publicidade advocatícia no rodapé
- Sem promessa de resultado
- Sem exibir números de processos ou valores recuperados

---

## 11. Stack técnica

```
Next.js 16 (App Router)
├── TypeScript
├── Tailwind CSS 4
├── Google Fonts (Inter + Source Serif 4)
├── Google Sheets API (leads + newsletter)
├── Google Maps embed
├── Sanity CMS (fase 2)
├── GA4
└── Vercel
```

### Variáveis de ambiente
```
GOOGLE_SHEETS_CLIENT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://victormoraisadv.com.br
```

---

## 12. Fases de implementação

### Fase 1 — Fundação (entrega atual)
- [x] Bootstrap Next.js + Tailwind
- [x] PRD e estrutura de páginas
- [ ] Layout (header, footer, tipografia, cores)
- [ ] Home com seções principais
- [ ] Páginas estáticas (sobre, contato, legal, áreas)
- [ ] Formulário → API → WhatsApp
- [ ] Widget WhatsApp + cookie banner
- [ ] SEO base + schema.org

### Fase 2 — Conteúdo e integrações
- [ ] Google Sheets API conectada
- [ ] Textos reaproveitados do site atual
- [ ] Fotos e logo integrados
- [ ] Blog com posts iniciais
- [ ] Busca funcional
- [ ] Landing pages Ads

### Fase 3 — CMS e migração
- [ ] Sanity CMS configurado
- [ ] Migração de conteúdo para CMS
- [ ] Deploy Vercel + domínio
- [ ] GA4 e Search Console
- [ ] Desativação gradual do site antigo

---

## 13. Pendências do cliente

| Item | Responsável | Status |
|------|-------------|--------|
| Logo (SVG/PNG) | Cliente | Pendente |
| Fotos profissionais novas | Cliente | Usar atuais |
| Textos página Sobre (bio completa) | Dr. Victor / equipe | Pendente |
| Textos Precatórios dedicados | Equipe | Pendente |
| Política de privacidade final | Equipe jurídica | Rascunho no site |
| Depoimentos autorizados | Cliente | Futuro |
| Conta Google (planilha leads) | Cliente | Pendente |
| Conta Sanity | Setup conjunto | Pendente |

---

## 14. Fora de escopo (MVP)

- Área restrita para clientes
- Agendamento online (Calendly)
- Integração redes sociais
- E-mail corporativo configurado
- Certificações / mídia no site
- Multilíngue

---

## 15. Critérios de aceite — site completo

1. Todas as rotas do mapa do site acessíveis e responsivas
2. Formulário valida CPF, salva lead (Sheets ou log) e abre WhatsApp
3. Página Precatórios com CTA dedicado
4. 13 páginas de área com conteúdo e CTA WhatsApp
5. Blog com pelo menos 1 post de exemplo
6. LGPD: banner + política + checkbox
7. SEO: metadata, OG tags, sitemap, schema.org
8. Mobile: formulário e CTAs usáveis em tela 375px
9. Build `next build` sem erros
10. Deploy preview na Vercel funcional

---

*Documento vivo — atualizar conforme decisões e entregas.*
