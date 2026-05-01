# CLAUDE.md — Landing Page: *Entre Frestas e Horizontes*

> Este documento é a fonte única de verdade para o Claude Code construir a landing page do livro **"Entre Frestas e Horizontes"** de Jaime Cruz. Leia tudo antes de gerar qualquer código.

---

## 1. CONTEXTO DO PROJETO

Esta é uma **nova rota** (`/livro` ou `/entre-frestas-e-horizontes`) dentro de um site já existente. O objetivo é uma landing page de divulgação — vitrine literária, sem e-commerce. O visitante deve sentir o peso e a beleza da história antes de chegar ao CTA.

**Livro:**
- Título: *Entre Frestas e Horizontes*
- Subtítulo: *Uma travessia de vida, fé e serviço público*
- Autor: Jaime Cruz (Jaime Cesar da Cruz)
- Publicação: Vinhedo – SP, 2026
- Formato: Livro impresso + E-book (PDF)
- Idioma: Português (Brasil)

---

## 2. TECH STACK

- Adapte ao framework do projeto existente (Next.js, Astro, etc.)
- Se não houver contexto, gere como **página React (`.tsx`) com CSS Modules ou Tailwind**
- Fontes via Google Fonts ou `next/font`: **Geist** (corpo) + **Playfair Display** (títulos e citações)
- Sem bibliotecas de UI externas — CSS puro ou Tailwind utility classes
- Totalmente responsivo: mobile-first

---

## 3. DESIGN SYSTEM

### 3.1 Paleta de Cores

```css
/* Backgrounds */
--color-bg:         #0e0e0e;   /* fundo principal */
--color-surface:    #141414;   /* cards, seções alternadas */
--color-border:     #1f1f1f;   /* divisores, bordas */

/* Texto */
--color-text:       #C4C4C4;   /* corpo */
--color-text-muted: #6B6B6B;   /* metadados, captions */
--color-heading:    #FFFFFF;   /* títulos principais */

/* Dourado Pastel — cor de acento */
--color-gold:       #C9A96E;   /* acento principal, links, destaques */
--color-gold-light: #E8D5A3;   /* hover states, glow suave */
--color-gold-dark:  #8A6D3B;   /* bordas douradas, sombras */
--color-gold-muted: #6B5230;   /* fundo de badges, labels */
```

### 3.2 Tipografia

```css
/* Títulos e citações em itálico */
font-family: 'Playfair Display', Georgia, serif;

/* Corpo, labels, UI */
font-family: 'Geist', 'Inter', system-ui, sans-serif;

/* Escala */
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px */
```

### 3.3 Espaçamento e Layout

- Max-width do conteúdo: `760px` (leitura) / `1100px` (layout geral)
- Padding lateral mobile: `1.5rem`
- Padding lateral desktop: `2rem`
- Gap entre seções: `6rem` a `8rem`

### 3.4 Elementos Visuais

- **Linha dourada:** `border-top: 1px solid var(--color-gold)` — usada para separar citações e seções especiais
- **Citações em bloco:** fundo `var(--color-surface)`, borda esquerda `3px solid var(--color-gold)`, fonte Playfair Display em itálico
- **Badge do autor:** texto `var(--color-gold)`, fundo `var(--color-gold-muted)`, `border-radius: 4px`, `font-size: 0.75rem`, `letter-spacing: 0.1em`, uppercase
- **Animações:** fade-in + translate-y suave (`opacity 0 → 1`, `translateY(16px) → 0`) com `Intersection Observer`. Delay escalonado entre elementos.
- **Sem imagens externas.** Toda a estética vem de tipografia, espaçamento e cor.

---

## 4. ESTRUTURA DA PÁGINA

A página é composta por **8 seções** nesta ordem:

1. `<HeroSection>`
2. `<AboutBookSection>`
3. `<QuoteBreak variant="A">`
4. `<ChaptersSection>`
5. `<AboutAuthorSection>`
6. `<QuoteBreak variant="B">`
7. `<TestimonialSection>`
8. `<CTASection>` + `<Footer>`

---

## 5. CONTEÚDO COMPLETO POR SEÇÃO

---

### SEÇÃO 1 — HERO

**Layout:** centralizado, altura mínima `100vh`, fundo `#0e0e0e`.

**Elementos (de cima para baixo):**

```
[Badge]        JAIME CRUZ · 2026

[Título H1]    Entre Frestas
               e Horizontes

[Subtítulo]    Uma travessia de vida, fé e serviço público

[Linha dourada fina — 60px de largura, centralizada]

[Tagline]      "mesmo quando a estrutura é frágil,
               a luz encontra caminho."

[Descrição]    Um relato sem romantização. Sem atalhos.
               A história de quem nasceu em um rancho
               de madeira no interior do Paraná e,
               passo a passo, construiu uma vida pública
               de relevância — guiada por fé,
               responsabilidade e serviço.

[CTA Button]   → Conhecer a obra
               (ancora smooth-scroll para #sobre-o-livro)
```

**Notas de estilo:**
- H1 em Playfair Display, `font-size: clamp(3rem, 8vw, 6rem)`, cor `#FFFFFF`, `line-height: 1.05`
- Badge: uppercase, `letter-spacing: 0.15em`, cor `var(--color-gold)`, `font-size: 0.7rem`
- Tagline em Playfair Display itálico, cor `var(--color-gold-light)`, `font-size: 1.25rem`
- Descrição em Geist, cor `var(--color-text)`, `max-width: 480px`, centralizado
- Botão CTA: fundo transparente, borda `1px solid var(--color-gold)`, cor `var(--color-gold)`, `padding: 0.75rem 2rem`, `letter-spacing: 0.08em`. Hover: fundo `var(--color-gold)`, cor `#0e0e0e`
- Scroll indicator sutil ao fundo (chevron ou linha animada)

---

### SEÇÃO 2 — SOBRE O LIVRO

**ID:** `sobre-o-livro`
**Layout:** centralizado, `max-width: 680px`, fundo `#0e0e0e`

**Título da seção (pequeno, acima):**
```
SOBRE O LIVRO
```
*(uppercase, `font-size: 0.7rem`, `letter-spacing: 0.2em`, cor `var(--color-gold)`, Geist)*

**Título H2:**
```
Este livro não nasceu
para exaltar cargos.
```
*(Playfair Display, grande, `#FFFFFF`)*

**Corpo do texto:**
```
Nasceu para dar sentido a uma travessia.

Entre Frestas e Horizontes é o registro de uma vida
construída em meio à escassez concreta — migração
forçada, trabalho precoce, perdas irreversíveis e uma
fé que nunca foi discurso, mas sustentação silenciosa.

Não há narrativa idealizada de superação.
Não há romantização da pobreza.

Há infância marcada por limitações reais.
Há juventude atravessada por responsabilidades precoces.
Há decisões que exigiram renúncia.
Há perdas que não se superam — apenas se assimilam.

Mas há, sobretudo, escolhas.

A política, quando reduzida à disputa, empobrece.
Quando compreendida como serviço, transforma.

Esta obra é testemunho disso.
```

**Notas de estilo:**
- Corpo em Geist, `font-size: 1.0625rem`, `line-height: 1.85`, cor `var(--color-text)`
- "Entre Frestas e Horizontes" em itálico, cor `#FFFFFF`
- As linhas curtas ("Há infância...") podem ter um espaçamento maior entre si para respirar
- "escolhas" em negrito, cor `#FFFFFF`

---

### SEÇÃO 3 — QUOTE BREAK A

**Layout:** largura total, fundo `var(--color-surface)`, padding vertical `5rem`

```
"Origem não determina destino.
Mas responsabilidade determina legado."

                              — Jaime Cruz
```

**Notas de estilo:**
- Playfair Display itálico, `font-size: clamp(1.5rem, 3.5vw, 2.25rem)`, cor `var(--color-gold-light)`, centralizado
- `max-width: 640px`, margem automática
- Assinatura em Geist, `font-size: 0.8rem`, `letter-spacing: 0.1em`, uppercase, cor `var(--color-text-muted)`
- Linha dourada horizontal acima e abaixo da citação (`width: 40px`, `border: 1px solid var(--color-gold)`)

---

### SEÇÃO 4 — ESTRUTURA DO LIVRO

**ID:** `capitulos`
**Título da seção (label):** `A OBRA`
**Título H2:** `Cinco partes. Uma travessia.`

**Cards das partes — lista de 5:**

```
PARTE I — ORIGEM E FORMAÇÃO
A luz que entrou pelas frestas
─────────────────────────────────────────
Do rancho de madeira no interior do Paraná
à chegada em Vinhedo — sem água encanada,
sem energia elétrica. A infância construída
entre a escassez e a fé.

  · Cap. 1 — A Luz Entre as Frestas
  · Cap. 2 — Trabalho Precoce, Fé e Pertencimento
  · Cap. 3 — A Perda do Pai e o Aumento da Responsabilidade
```

```
PARTE II — CONSCIÊNCIA E INÍCIO PÚBLICO
Da dor à organização
─────────────────────────────────────────
A entrada no movimento de moradia, a eleição
como presidente da associação e uma pergunta
de um padre que mudou tudo:
"Por que você não se candidata a vereador?"

  · Cap. 4 — A Luta por Moradia, Organização Popular e Despertar Político
  · Cap. 5 — Vereador aos 24 Anos: Quando a Vida Pessoal Entra na Política
```

```
PARTE III — ESTRUTURA, DOR E CONSOLIDAÇÃO
Perda, família e maturidade
─────────────────────────────────────────
Graduação em Filosofia, Secretaria de
Habitação, a perda do irmão Gilmar, o
casamento, o nascimento do filho Giovanni
e a consolidação de uma liderança pública.

  · Cap. 6 — Formação, Habitação e uma Nova Dor
  · Cap. 7 — Família, Retorno à Câmara e Construção da Maturidade Pública
```

```
PARTE IV — GESTÃO E RESPONSABILIDADE
Quando governar exige mais que boa intenção
─────────────────────────────────────────
Vice-prefeitura, Secretaria de Educação,
crise hídrica, greve dos caminhoneiros,
pandemia e a responsabilidade de conduzir
um município em cenários extremos.

  · Cap. 8 — Vice-Prefeitura, Educação e o Desafio de Governar com Propósito
  · Cap. 9 — Prefeitura, Crise e Responsabilidade Histórica
```

```
PARTE V — SÍNTESE E LEGADO
O que permanece quando os cargos passam
─────────────────────────────────────────
Fé, serviço e a síntese de uma travessia.
A pergunta que atravessa tudo:
o que fica quando o poder é temporário?

  · Cap. 10 — Fé, Serviço e Legado
```

**Notas de estilo dos cards:**
- Fundo `var(--color-surface)`, borda `1px solid var(--color-border)`
- Hover: borda `1px solid var(--color-gold-dark)`, transição suave
- Número da parte em Geist uppercase, `font-size: 0.65rem`, `letter-spacing: 0.2em`, cor `var(--color-gold)`
- Título do grupo em Playfair Display, `font-size: 1.25rem`, `#FFFFFF`
- Linha separadora dourada sob o título: `border-bottom: 1px solid var(--color-gold-dark)`, `width: 32px`
- Descrição em Geist, cor `var(--color-text)`, `font-size: 0.9rem`, `line-height: 1.7`
- Capítulos listados em Geist, `font-size: 0.78rem`, cor `var(--color-text-muted)`, prefixados com `·`
- Grid: 1 coluna mobile, 2 colunas (2+3 layout) em tablet+, ou 1 coluna em todos com largura máxima

---

### SEÇÃO 5 — SOBRE O AUTOR

**ID:** `sobre-o-autor`
**Label:** `O AUTOR`
**Título H2:** `Jaime Cruz`
**Subtítulo:** `Jaime Cesar da Cruz — Vinhedo, SP`

**Texto:**
```
Nasceu em 26 de junho de 1968, em Rosário do Ivaí, no interior
do Paraná. Sétimo de dez filhos. Chegou a Vinhedo aos 11 anos,
em um barraco de 15 metros quadrados no Jardim Três Irmãos,
sem água encanada e sem energia elétrica.

Formou-se em Filosofia pela PUC-Campinas (1996) e construiu
uma trajetória pública de três décadas, guiada pela coerência
entre origem e responsabilidade.
```

**Timeline compacta (linha do tempo horizontal ou vertical):**

```
1992   Presidente da Associação dos Sem Casa de Vinhedo
       Liderou a construção do Residencial Jardim Nova Canudos
       — 242 terrenos em regime de mutirão

1993–2000  Vereador (1º e 2º mandatos)
           Terceiro mais votado em 1992, segundo mais votado em 2004

1997–2004  Secretário Municipal de Habitação
           +1.000 lotes urbanizados, 384 apartamentos viabilizados

2005–2006  Presidente da Câmara Municipal de Vinhedo
           Modernização administrativa e programa "Câmara nos Bairros"

2008–2016  Vice-Prefeito (2 mandatos)
           Secretário de Educação (2009–2013)

2014–2020  Prefeito de Vinhedo
           Reeleito em 2016. Conduziu o município através de crise
           hídrica, greve dos caminhoneiros e pandemia de COVID-19.
           Reabertura da Santa Casa de Vinhedo.

Regional   Presidente do Conselho de Prefeitos da RMC
           Presidente da ARES-PCJ · COHAB Campinas
           Consórcio Intermunicipal das Frutas
```

**Formação:**
```
Graduação em Filosofia — PUC-Campinas
Especialização em Filosofia Social — PUC-Campinas
Formação em Violência Doméstica contra Crianças e Adolescentes — USP
```

**Notas de estilo:**
- Timeline: linha vertical `1px solid var(--color-border)` com marcadores circulares dourados (`8px`, fundo `var(--color-gold)`)
- Anos em Geist, `font-size: 0.75rem`, uppercase, cor `var(--color-gold)`, `letter-spacing: 0.1em`
- Descrições em Geist, cor `var(--color-text)`, `font-size: 0.9rem`

---

### SEÇÃO 6 — QUOTE BREAK B

**Layout:** largura total, fundo `#0e0e0e`, padding vertical `5rem`, borda superior `1px solid var(--color-border)`

```
"Se a vida lhe parecer estreita,
lembre-se: a luz não precisa
de grandes aberturas.

Basta uma fresta.
E coragem para seguir."

                    — Jaime Cruz
```

**Notas de estilo:**
- Mesma estrutura do Quote Break A
- "Basta uma fresta." em tamanho maior, cor `#FFFFFF`, sem itálico — para dar peso à frase final

---

### SEÇÃO 7 — PREFÁCIO / TESTEMUNHO

**ID:** `prefacio`
**Label:** `PREFÁCIO`
**Título H2:** `"Um homem que escolheu gostar de gente."`

**Texto:**
```
"O livro mostra exatamente esse lado humano. Entre Frestas e
Horizontes passa longe de ser uma lista de cargos ou grandes
feitos. O texto apresenta um relato de vida real, com desafios,
escolhas duras e uma fé que serviu de alicerce silencioso em
todos os momentos.

O Jaime tinha outros rumos possíveis e poderia ter se conformado
com o que a vida impôs. Em vez disso, escolheu o estudo, o
serviço e o cuidado com o próximo. Decidiu estar presente onde
a dor aperta em vez de virar as costas. Essa postura define quem ele é.

Este não é só o livro de um homem público. É o registro de quem
escolheu gostar e cuidar de gente e fez disso um destino."
```

**Assinatura:**
```
Eduardo Gurian
Jornalista · Pós-graduação em Marketing e Negócios Internacionais
Professor universitário · 22 anos de comunicação pública
Apresentador do programa Conexões — Rádio Capela FM
```

**Notas de estilo:**
- Citação em bloco: fundo `var(--color-surface)`, borda esquerda `3px solid var(--color-gold)`, padding `2rem`, Playfair Display itálico, cor `var(--color-text)`
- Assinatura separada por linha `1px solid var(--color-border)`, Geist, cor `var(--color-text-muted)`, `font-size: 0.8rem`
- Aspas decorativas grandes (`"`) em Playfair Display, `font-size: 5rem`, cor `var(--color-gold-dark)`, `opacity: 0.4`, posicionadas absolutamente acima do bloco

---

### SEÇÃO 8 — CTA + FOOTER

**ID:** `contato`

**CTA:**
```
[Label]    DISPONÍVEL EM

[Badges]   · Livro Impresso    · E-book (PDF)

[Título]   Quer saber mais sobre o livro?

[Subtítulo]
           Para imprensa, pedidos de exemplares,
           eventos ou parcerias, entre em contato.

[Botão]    → Entrar em contato
           (link: mailto: ou formulário simples — deixar placeholder)
```

**Notas de estilo do CTA:**
- Fundo `var(--color-surface)`, centralizado
- Badges: fundo `var(--color-gold-muted)`, cor `var(--color-gold)`, borda `1px solid var(--color-gold-dark)`, `border-radius: 4px`, `font-size: 0.7rem`, uppercase
- Botão: mesmo estilo do hero, porém com hover invertido

---

**Footer:**
```
Entre Frestas e Horizontes
Uma travessia de vida, fé e serviço público

© 2026 — Jaime Cesar da Cruz
Todos os direitos reservados.
Edição privada · Vinhedo – SP · CDD: 920

[Linha divisória]

Site desenvolvido por giovannicruz.dev
```

**Notas do footer:**
- Fundo `#0a0a0a`, centralizado
- Texto em `var(--color-text-muted)`, `font-size: 0.75rem`
- Título do livro em Playfair Display itálico, cor `var(--color-gold)`, `font-size: 0.9rem`
- "Giovanni Cruz" como link para o site principal, cor `var(--color-gold)`

---

## 6. COMPORTAMENTO E INTERAÇÕES

- **Scroll suave:** `scroll-behavior: smooth` no `html`
- **Animações de entrada:** cada seção deve fazer fade-in + translateY quando entrar no viewport (`IntersectionObserver`, `threshold: 0.15`)
- **Cursor:** default — sem customizações especiais
- **Seleção de texto:** `::selection { background: var(--color-gold-muted); color: var(--color-gold-light); }`
- **Sem dark/light mode toggle** — a página é sempre dark
- **SEO:** incluir `<meta>` tags com título, descrição e Open Graph básico

```html
<meta property="og:title" content="Entre Frestas e Horizontes — Jaime Cruz" />
<meta property="og:description" content="Uma travessia de vida, fé e serviço público. O livro de Jaime Cruz." />
<meta property="og:type" content="book" />
```

---

## 7. ACESSIBILIDADE

- Contraste mínimo WCAG AA em todos os textos
- `aria-label` nos botões
- `lang="pt-BR"` no `<html>`
- Headings em hierarquia correta (H1 → H2 → H3)
- Links com texto descritivo

---

## 8. CHECKLIST DE ENTREGA

Antes de considerar a página completa, verifique:

- [ ] Todas as 8 seções estão presentes e na ordem correta
- [ ] Paleta de cores aplicada corretamente (sem nenhum branco puro como fundo)
- [ ] Fontes carregando: Playfair Display + Geist
- [ ] Página responsiva em mobile (375px), tablet (768px) e desktop (1280px)
- [ ] Animações de entrada funcionando
- [ ] Smooth scroll do CTA do hero funcionando
- [ ] `::selection` customizado aplicado
- [ ] Meta tags OG presentes
- [ ] Sem erros de console
- [ ] Footer com créditos corretos

---

*Documento gerado para uso com Claude Code — abril de 2026.*
