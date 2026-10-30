# Webverse · usewebverse.com.br

Site institucional da Webverse: sistemas para o comércio (caixa, estoque, comanda, delivery, nota fiscal) e sites. Página única, 100% estática, feita para converter visitas do Instagram (@usewebverse) em conversas no WhatsApp.

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
| Textos de todas as seções (hero, problema, diferenciais, como funciona, CTA...) | `src/content/textos.ts` |
| Sistemas (cards da seção "Sistemas") | `src/content/produtos.ts` |
| Depoimentos (a seção só aparece quando tiver pelo menos 1) | `src/content/depoimentos.ts` |
| Seção de preço: textos | `src/content/textos.ts` (`precoTextos`) |
| Tipos de licença, o que vem com o sistema, manutenção dos sites | `src/content/preco.ts` |
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

## Sistemas

Cada card da seção "Sistemas" é um item de `src/content/produtos.ts` (nome, resumo, pra quem, descrição, destaques, ícone e mensagem do WhatsApp). `emBreve: true` mostra o selo "EM BREVE".

**Nunca coloque nome de cliente** no site: descreva o tipo de negócio ("depósito de material de construção"), não quem usa.

## Adicionar um depoimento

Em `src/content/depoimentos.ts`:

```ts
export const depoimentos: Depoimento[] = [
  { texto: "Em uma semana o site estava no ar...", nome: "Ana", negocio: "Studio Ana · Contagem" },
];
```

Use só depoimentos reais, com autorização do cliente.

### Preço e manutenção

O site não mostra planos nem preços de criação: a seção **Preço** convida a pedir um orçamento ("uma oferta que caiba no seu bolso") e mostra só a **manutenção mensal (opcional)**.

- Textos da oferta, itens e mensagem do botão do WhatsApp: `precoTextos` em `src/content/textos.ts`.
- Valor, itens da manutenção e as condições (domínio, hospedagem): `src/content/preco.ts`.
- Se mudar o valor da manutenção, revise também as respostas do FAQ que citam R$ 69 (`src/content/faq.ts`).

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

### 3. Apontar o domínio na Hostinger

O domínio foi registrado pela Hostinger, então o DNS é editado no painel dela (hPanel).

1. Entre em https://hpanel.hostinger.com → **Domínios** → clique em `usewebverse.com.br`.
2. No menu lateral, abra **DNS / Nameservers**.
3. Na aba **Nameservers**, confira se está usando os **nameservers da Hostinger** (algo como `ns1.dns-parking.com` e `ns2.dns-parking.com`). Se não estiver, selecione **Usar nameservers da Hostinger**. Sem isso, os registros abaixo não valem.
4. Na aba **Registros DNS**, apague os registros padrão que apontam para a Hostinger:
   - `A` com nome `@` (IP da página de "domínio estacionado");
   - `AAAA` com nome `@`, se existir;
   - `CNAME` com nome `www` (normalmente aponta para `usewebverse.com.br`).
5. Adicione os registros da Vercel:
   - **Domínio raiz:** tipo `A`, nome `@`, aponta para `76.76.21.21` (ou o IP que a Vercel mostrou), TTL padrão.
   - **www:** tipo `CNAME`, nome `www`, aponta para `cname.vercel-dns.com` (ou o que a Vercel mostrou), TTL padrão.
6. Salve. A propagação costuma levar de alguns minutos a algumas horas (em casos raros, até 24 h).
7. Volte em **Settings → Domains** na Vercel. Quando os dois domínios ficarem com ✓ **Valid Configuration**, a Vercel emite o certificado HTTPS automaticamente.

**Alternativa:** delegar o DNS inteiro para a Vercel. Na Hostinger, em **DNS / Nameservers → Nameservers → Alterar nameservers**, informe `ns1.vercel-dns.com` e `ns2.vercel-dns.com`. Aí a Vercel gerencia tudo, mas registros de e-mail (MX) passam a ser criados na Vercel também.

> **Domínio `.com.br`:** a Hostinger faz o registro junto ao Registro.br por você. Se o domínio aparecer como pendente, confira o e-mail da Hostinger: o `.com.br` exige CPF/CNPJ válido e pode pedir confirmação antes de ativar.

> **E-mail:** hoje o site usa `usewebverse@gmail.com`, que não depende do DNS. Se um dia quiser um e-mail no domínio (ex.: `contato@usewebverse.com.br`), crie os registros `MX`/`TXT` que o provedor pedir, na mesma zona DNS.

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
