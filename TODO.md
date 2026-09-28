# Pendências antes de publicar

## Obrigatório

- [ ] **Número do WhatsApp**: `src/config/site.ts` → `whatsapp: "55XXXXXXXXXXX"`. Só números, com DDI 55 + DDD + número.
- [ ] **Política de alterações**: `src/content/faq.ts` → resposta de "Posso pedir alterações depois?" (hoje: `[DEFINIR POLÍTICA DE ALTERAÇÕES]`).

## Quando tiver

- [ ] **Preço**: `src/content/planos.ts` → `preco: null`. Enquanto for `null`, aparece "Orçamento pelo WhatsApp". Revise também o `nome`, a `descricao` e a lista `inclui` do plano.
- [ ] **Portfólio real**: `src/content/portfolio.ts`. Trocar os 3 itens `exemplo: true` (Padaria do Bairro, Studio Bela, Oficina Motor Forte, nomes fictícios) por clientes reais e apagar `public/portfolio/exemplo-*.svg`.
- [ ] **Depoimentos**: `src/content/depoimentos.ts`. A seção fica oculta até ter pelo menos 1 depoimento real.
- [ ] **Analytics** (opcional): `src/config/site.ts` → `analytics`.

## Verificar depois do deploy

- [ ] Testar o botão do WhatsApp num celular com o app instalado e ver se o 🪐 da mensagem chega certo. Na página web de fallback do WhatsApp (sem o app), emojis mais novos aparecem como `�`, e isso é um problema da página deles. Se o 🪐 falhar também no app, troque por 🚀 ou tire o emoji de `mensagemWhatsapp`.
- [ ] Apontar DNS no Registro.br (passo a passo no README).
- [ ] Enviar o sitemap no Google Search Console.
