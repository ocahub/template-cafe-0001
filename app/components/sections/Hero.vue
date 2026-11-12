<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const route = useRoute()
const { page } = useRhSite()
const inner = computed(() => route.path !== '/' && route.path !== '/_editor')
const title = computed(() => page(route.path)?.title)
const shop = useShopProducts()
const liveEl = shop.el
const lot = computed(() => (p.value.lot === 'sim' ? shop.items.value.find(x => x.manufacturer) : null))
const links = useRhLinks()
</script>

<template>
  <section ref="liveEl" class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-copy">
          <nav v-if="inner" class="crumbs" aria-label="Você está em"><NuxtLink to="/">Início</NuxtLink> / {{ title }}</nav>
          <RhText tag="h1" class="display" path="title" :value="p.title" ph="Título" />
          <RhText tag="p" class="lede" path="subtitle" :value="p.subtitle" ph="Texto" ml />
          <div class="hero-actions">
            <TButton v-if="p.button || editing" class="btn btn-primary" :link="p.link"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
            <TButton v-if="p.button2 || editing" class="btn btn-ghost" :link="p.link2"><RhText path="button2" :value="p.button2" ph="Botão" /></TButton>
          </div>
          <div v-if="p.facts?.length" class="hero-facts">
            <div v-for="(f, i) in p.facts" :key="i"><b><RhText :path="`facts.${i}.title`" :value="f.title" ph="Destaque" /></b><RhText :path="`facts.${i}.text`" :value="f.text" ph="Detalhe" /></div>
          </div>
        </div>
        <div class="hero-media">
          <div class="photo"><img v-if="p.image" :src="p.image" alt=""></div>
          <NuxtLink v-if="lot" class="lot-tag" :to="links.product(lot.slug)" style="text-decoration:none">
            <div class="lot-name">{{ lot.name }}</div>
            <div class="lot-by">{{ lot.manufacturer }}</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
