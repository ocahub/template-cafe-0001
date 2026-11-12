<script setup lang="ts">
/** Cabecalho e rodape vem do conteudo do site (secoes globais); as cores e fontes, da aparencia escolhida no painel. */
const { content, global } = useRhSite()
const vars = computed(() => templateThemeVars(content.value?.theme))
const header = computed(() => global('header'))
const footer = computed(() => global('footer'))
const company = useRhCompany()
const wa = computed(() => company.whatsappUrl())
</script>

<template>
  <div class="tpl" :style="vars">
    <a class="sr-only" href="#conteudo">Ir para o conteúdo</a>
    <RhSiteSection v-if="header" :section="header" label="Cabeçalho" />
    <main id="conteudo">
      <slot />
    </main>
    <RhSiteSection v-if="footer" :section="footer" label="Rodapé" />
    <a v-if="wa" class="wa" :href="wa" target="_blank" rel="noopener" aria-label="Falar no WhatsApp"><TIcon name="wa" /></a>
  </div>
</template>
