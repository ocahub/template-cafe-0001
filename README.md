# template-cafe-0001

Template de site de loja de café da plataforma (atividade 00047), feito a partir do
site `granmonteiro`: o visual da Gran Monteiro: verde-mata, cereja e pergaminho, a
Bricolage Grotesque, cartões de lote com o produtor, planos do clube e a cafeteria.

Para lojas que **vendem**: o `template.json` pede `sales:CreateProduct`, então ele não
aparece para a imobiliária. A tenant escolhe o template em **Loja › Site** e monta as
páginas em **Editar páginas**: textos, imagens, ordem das seções, páginas novas, cores
e fontes. O build lê a versão **publicada** no cloud-management.

## Como funciona

- **`template.json`**: as seções (campos, grupos, globais), as aparências (paletas e
  fontes), o conteúdo padrão (genérico) e as páginas prontas: Início, Clube de
  assinatura e Sobre nós.
- **`app/components/sections/`**: um componente por tipo de seção (`hero` → `SectionHero`).
- **Páginas estáticas (00048)**: as páginas do editor saem prontas do build. As seções
  de produtos (`lots`, `shelf` e a etiqueta do `hero`) gravam os produtos do build no
  HTML e leem os atuais na API pública quando aparecem na tela (`useShopProducts`, com
  o `useRhLive` do kit).
- **O resto da loja vem do `@ocahub/kit`**: `/loja`, produto, `/produtor/{slug}`,
  carrinho, checkout, conta, pedidos e a assinatura (os planos do clube levam ao
  produto de assinatura).
- **Variáveis da empresa** nos textos: `{empresa}`, `{whatsapp}`, `{telefone}`,
  `{email}`, `{endereco}` e `{instagram}` (Loja › Dados da loja › Contatos do site). A
  seção "Visite a loja física" usa o endereço e o telefone; "Fale com a gente", o
  e-mail e o WhatsApp.
- **Links de âncora**: `/#cafeteria` (Visite a loja física), `/#contato` (Fale com a
  gente), `/clube#planos` e `/clube#duvidas`.

## Versão nova

Mude o `template.json` (e a `version`), faça o push e, no painel, **Plataforma ›
Templates de site › Ler template.json**.

## Desenvolvimento

No dev, o cloud-management usa este clone (`dev/template-cafe-0001`, montado em
`/templates`). O robô `release-check/tests-dev/templates-lojas.spec.ts` põe a Gran
Monteiro neste template.
