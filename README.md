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
| `npm run exemplos` | Tira os prints dos sites de exemplo para o portfólio |

---

## Onde editar cada coisa

Todo texto fica em `src/config/` e `src/content/`. Não precisa mexer nos componentes.

| O que | Arquivo |
|---|---|
| WhatsApp, mensagem pronta, Instagram, e-mail, título e descrição do Google | `src/config/site.ts` |
| Textos de todas as seções (hero, problema, como funciona, level up, CTA...) | `src/content/textos.ts` |
| Portfólio | `src/content/portfolio.ts` + imagens em `public/portfolio/` |
| Depoimentos (a seção só aparece quando tiver pelo menos 1) | `src/content/depoimentos.ts` |
| Planos, extras, manutenção e condições de pagamento | `src/content/planos.ts` |
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

3. Quando entrarem clientes reais, apague os itens com `exemplo: true` (e, se quiser, os sites de exemplo, veja abaixo).

Sem `url` (`url: null`), o cartão mostra "Em breve" em vez do botão "Ver site".

### Sites de exemplo (mocks)

Os três itens de exemplo do portfólio apontam para sites mock de verdade, publicados no próprio domínio:

| Exemplo | Endereço | Arquivo |
|---|---|---|
| Padaria do Bairro | `/exemplos/padaria` | `public/exemplos/padaria/index.html` |
| Studio Bela | `/exemplos/salao` | `public/exemplos/salao/index.html` |
| Oficina Motor Forte | `/exemplos/oficina` | `public/exemplos/oficina/index.html` |

- São HTML puro com CSS embutido, cada um com a identidade do negócio fictício. As fontes ficam em `public/exemplos/_fontes/` (sem requisição externa).
- Todos têm `noindex` (não aparecem no Google) e uma faixa no topo avisando que é um exemplo da Webverse.
- Os botões de WhatsApp dos mocks levam para o **WhatsApp da Webverse** com a mensagem "Vi o site de exemplo da … e quero um assim". **Se o número mudar**, troque `5577998612496` nos três arquivos, além do `src/config/site.ts`.
- Depois de editar um mock, rode `npm run exemplos` para gerar de novo os prints do portfólio (`public/portfolio/exemplo-*.webp`). O script usa o Google Chrome instalado no computador.
- Para criar um exemplo novo: crie `public/exemplos/<nome>/index.html`, rode `npm run exemplos` e adicione o item em `src/content/portfolio.ts` com `url: "/exemplos/<nome>"` e `exemplo: true`.

### Adicionar um depoimento

Em `src/content/depoimentos.ts`:

```ts
export const depoimentos: Depoimento[] = [
  { texto: "Em uma semana o site estava no ar...", nome: "Ana", negocio: "Studio Ana · Contagem" },
];
```

Use só depoimentos reais, com autorização do cliente.

### Planos e preços

Tudo fica em `src/content/planos.ts`: os planos (nome, preço, prazo, o que inclui), os extras, a manutenção e as condições de pagamento. O botão de cada plano abre o WhatsApp com a mensagem "quero o plano …".

- `destaque: "RECOMENDADO"` põe borda e selo no cartão. Apague a linha para tirar.
- `preco: null` troca o preço por "Orçamento pelo WhatsApp".
- Se mudar prazos ou preços, revise também as respostas de "Em quanto tempo fica pronto?" e "Quanto custa?" em `src/content/faq.ts` e o `priceRange` em `src/app/layout.tsx`.

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
