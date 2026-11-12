// Template de site de cafe 0001 (00047), feito a partir do site da Gran Monteiro:
// loja de cafe especial com produtos com produtor, clube de assinatura, cafeteria
// e contato. O conteudo (paginas, secoes, textos e imagens) a tenant edita no
// painel em Loja › Site › Editar páginas; o build le a versao publicada no
// cloud-management. A loja (prateleira, produto, produtor, carrinho, conta,
// checkout, assinatura) vem do @ocahub/kit.
export default defineNuxtConfig({
  modules: ['@ocahub/kit'],
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // A inicial e do template; a prateleira do kit fica na Loja, e o fabricante e o "produtor".
    pages: { shelf: '/loja', manufacturer: '/produtor' },
    siteContent: true
  },

  // Cada tipo de secao e um componente global Section{Tipo}: o kit monta a pagina pelo tipo.
  components: [
    { path: '~/components/sections', prefix: 'Section', global: true },
    '~/components'
  ],

  css: ['~/assets/css/template.css', '~/assets/css/loja.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Fraunces:opsz,wght@9..144,500..700&display=swap' }
      ]
    }
  }
})
