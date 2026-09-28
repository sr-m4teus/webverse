# Webverse · usewebverse.com.br

Site institucional da Webverse: sites para quem empreende. Página única, 100% estática, feita para converter visitas do Instagram (@usewebverse) em conversas no WhatsApp.

- **Stack:** Next.js 15 (App Router, `output: "export"`), TypeScript, Tailwind CSS v4.
- **Sem** bibliotecas de UI, cookies ou tracking. Ícones: `lucide-react`.
- **Lighthouse mobile:** 98 Performance · 100 Acessibilidade · 100 Boas práticas · 100 SEO.

> Pendências para preencher antes de publicar: veja [TODO.md](TODO.md).

---

## Rodar no computador

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Gera o site estático na pasta `out/` |
| `npx serve out` | Serve a pasta `out/` para testar o build final |
| `npm run lint` | Verifica o código |
| `npm run imagens` | Regenera favicon, ícones e imagem de compartilhamento (só se a marca mudar) |

---

## Onde editar cada coisa

Todo texto fica em `src/config/` e `src/content/`. Não precisa mexer nos componentes.

| O que | Arquivo |
|---|---|
| WhatsApp, mensagem pronta, Instagram, e-mail, título e descrição do Google | `src/config/site.ts` |
| Textos de todas as seções (hero, problema, como funciona, level up, CTA...) | `src/content/textos.ts` |
| Portfólio | `src/content/portfolio.ts` + imagens em `public/portfolio/` |
| Depoimentos (a seção só aparece quando tiver pelo menos 1) | `src/content/depoimentos.ts` |
| Planos e preço | `src/content/planos.ts` |
| Perguntas frequentes | `src/content/faq.ts` |
| Cores e fontes | `src/app/globals.css` (bloco `@theme`) e `src/app/layout.tsx` |
| Logo e símbolo | `public/brand/` |

### Palavra destacada nos títulos

Nos títulos, o trecho entre `{ destaque: "..." }` aparece na cor verde da marca:

```ts
titulo: ["Seu negócio já tem um ", { destaque: "planeta" }, " nesse universo?"],
```

### WhatsApp

Todos os botões usam `linkWhatsapp`, montado em `src/config/site.ts`:

```
https://wa.me/<whatsapp>?text=<mensagemWhatsapp codificada>
```

Preencha `whatsapp` só com números: DDI + DDD + número (ex.: `5531999998888`).

---

## Adicionar um item ao portfólio

1. Tire um print do site do cliente, de preferência 1200×750 (proporção 16:10), e salve em `public/portfolio/`, por exemplo `public/portfolio/padaria-pao-quente.webp`. Use `.webp` ou `.jpg` para o arquivo ficar leve.
2. Em `src/content/portfolio.ts`, adicione um item no array:

   ```ts
   {
     nome: "Padaria Pão Quente",
     tipo: "Padaria",
     imagem: "/portfolio/padaria-pao-quente.webp",
     alt: "Site da Padaria Pão Quente com cardápio e botão do WhatsApp",
     url: "https://padariapaoquente.com.br",
   },
   ```

3. Quando entrarem clientes reais, apague os itens com `exemplo: true` e os arquivos `public/portfolio/exemplo-*.svg`.

Sem `url` (`url: null`), o cartão mostra "Em breve" em vez do botão "Ver site".

### Adicionar um depoimento

Em `src/content/depoimentos.ts`:

```ts
export const depoimentos: Depoimento[] = [
  { texto: "Em uma semana o site estava no ar...", nome: "Ana", negocio: "Studio Ana · Contagem" },
];
```

Use só depoimentos reais, com autorização do cliente.

### Definir preço

Em `src/content/planos.ts`, troque `preco: null` por um número (ex.: `preco: 497`). Enquanto for `null`, a seção mostra "Orçamento pelo WhatsApp".

---

## Analytics (quando quiser)

Nada é carregado hoje. Para ativar, edite `analytics` em `src/config/site.ts`:

```ts
analytics: { tipo: "plausible", dominio: "usewebverse.com.br" },
// ou
analytics: { tipo: "ga", id: "G-XXXXXXXXXX" },
```

O script é incluído por `src/components/Analytics.tsx`. O Google Analytics usa cookies. Se ativar, avalie colocar um aviso de cookies (LGPD). O Plausible não usa cookies.

---

## Deploy na Vercel

### 1. Subir o projeto

1. Acesse https://vercel.com e entre com a conta do GitHub.
2. Clique em **Add New… → Project** e importe o repositório `sr-m4teus/webverse`.
3. A Vercel detecta **Next.js** sozinha. Não mude nada: Build Command `next build`, Output automático.
4. Clique em **Deploy**. Em cerca de 1 minuto o site fica no ar num endereço `*.vercel.app`.

A cada `git push` na branch `main`, a Vercel publica de novo automaticamente.

### 2. Adicionar os domínios na Vercel

1. No projeto, vá em **Settings → Domains**.
2. Adicione `usewebverse.com.br`.
3. Adicione `www.usewebverse.com.br`. Quando a Vercel perguntar, escolha **Redirect to usewebverse.com.br** (308).
   O `vercel.json` também já redireciona o `www` para o domínio sem www.
4. A Vercel vai mostrar os registros DNS que precisa. **Anote exatamente os valores que ela mostrar**. Normalmente são:

   | Tipo | Nome | Valor |
   |---|---|---|
   | `A` | (vazio, domínio raiz) | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   Em projetos novos a Vercel às vezes mostra outros valores (ex.: um IP diferente ou um CNAME tipo `xxxx.vercel-dns-017.com`). Nesse caso, use os que ela mostrar.

### 3. Apontar o domínio no Registro.br

1. Entre em https://registro.br com sua conta e clique no domínio `usewebverse.com.br`.
2. Na seção **DNS**, confira se está usando os **servidores DNS do Registro.br**. Se não estiver, clique em **Alterar servidores DNS → Utilizar os DNS do Registro.br**.
3. Clique em **Configurar zona DNS** (ou **Editar zona**). Se aparecer, ative o **modo avançado**.
4. Crie os registros:
   - **Domínio raiz:** tipo `A`, nome em branco (só `usewebverse.com.br`), valor `76.76.21.21` (ou o IP que a Vercel mostrou).
   - **www:** tipo `CNAME`, nome `www`, valor `cname.vercel-dns.com` (ou o que a Vercel mostrou).
5. Apague registros `A`/`AAAA`/`CNAME` antigos para `@` ou `www` que apontem para outro lugar (ex.: página de "domínio estacionado").
6. Salve. A propagação costuma levar de alguns minutos a algumas horas (no Registro.br, às vezes até 24 h).
7. Volte em **Settings → Domains** na Vercel. Quando os dois domínios ficarem com ✓ **Valid Configuration**, a Vercel emite o certificado HTTPS automaticamente.

**Alternativa:** delegar o DNS inteiro para a Vercel. No Registro.br, em **Alterar servidores DNS**, informe `ns1.vercel-dns.com` e `ns2.vercel-dns.com`. Aí a Vercel gerencia tudo, mas registros de e-mail (MX) passam a ser criados na Vercel também.

> **E-mail:** se `contato@usewebverse.com.br` for usar um provedor (Google Workspace, Zoho, ImprovMX etc.), crie também os registros `MX`/`TXT` que o provedor pedir, na mesma zona DNS.

### 4. Conferir depois do deploy

- [ ] `https://usewebverse.com.br` abre com cadeado (HTTPS)
- [ ] `https://www.usewebverse.com.br` redireciona para o domínio sem www
- [ ] Botões de WhatsApp abrem a conversa com a mensagem pronta (teste no celular, com o app instalado)
- [ ] Compartilhar o link no WhatsApp/Instagram mostra a imagem de prévia (teste em https://www.opengraph.xyz)
- [ ] Cadastrar o site no [Google Search Console](https://search.google.com/search-console) e enviar `https://usewebverse.com.br/sitemap.xml`
- [ ] Colocar o link na bio do Instagram

---

## Estrutura

```
public/
  brand/          logo-horizontal.svg, simbolo.svg (oficiais, não editar)
  icons/          ícones do app (gerados)
  portfolio/      imagens do portfólio
  og.png          imagem de compartilhamento 1200×630 (gerada)
scripts/
  gerar-imagens.mjs   gera favicon, ícones e og.png a partir da marca
src/
  app/            layout, página, 404, sitemap, robots, manifest, ícones
  components/
    marca/        Planeta, Logo, Estrelas
    secoes/       uma seção por arquivo (Header, Hero, Problema...)
    ui/           Botao, Selo, Titulo, Terminal, Secao, Container
  config/site.ts  configurações gerais
  content/        todos os textos editáveis
vercel.json       redirect www → raiz e headers de cache/segurança
```
