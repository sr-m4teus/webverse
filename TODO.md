# Pendências antes de publicar

## Quando tiver

- [ ] **Portfólio real**: `src/content/portfolio.ts`. Os 3 itens `exemplo: true` apontam para sites mock em `public/exemplos/` (Padaria do Bairro, Studio Bela, Oficina Motor Forte, nomes fictícios). Quando entrar cliente real, adicione o item e decida se mantém os exemplos.
- [ ] **Depoimentos**: `src/content/depoimentos.ts`. A seção fica oculta até ter pelo menos 1 depoimento real.
- [ ] **Analytics** (opcional): `src/config/site.ts` → `analytics`.

## Verificar depois do deploy

- [ ] Testar o botão do WhatsApp num celular com o app instalado e ver se o 🪐 da mensagem chega certo. Na página web de fallback do WhatsApp (sem o app), emojis mais novos aparecem como `�`, e isso é um problema da página deles. Se o 🪐 falhar também no app, troque por 🚀 ou tire o emoji de `mensagemWhatsapp`.
- [ ] Apontar DNS na Hostinger (passo a passo no README).
- [ ] Enviar o sitemap no Google Search Console.
