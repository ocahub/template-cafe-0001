<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const shop = useShopProducts()
const liveEl = shop.el
const list = computed(() => shopFilter(shop.items.value, p.value.source, p.value.count))
</script>

<template>
  <section v-if="list.length || shop.loading.value || editing" ref="liveEl" class="section" data-gm="lots">
    <div class="wrap">
      <div class="section-head">
        <div>
          <RhText tag="h2" class="h2" path="title" :value="p.title" ph="Título" />
          <RhText v-if="p.text || editing" tag="p" path="text" :value="p.text" ph="Texto" />
        </div>
        <NuxtLink v-if="p.button || editing" class="link" to="/loja"><RhText path="button" :value="p.button" ph="Link" /></NuxtLink>
      </div>
      <div v-if="shop.loading.value" class="lots"><div v-for="i in Number(p.count) || 3" :key="i" class="rh-skeleton rh-skeleton--tile" /></div>
      <div v-else-if="list.length" class="lots"><LotCard v-for="x in list" :key="x.id" :product="x" :price-label="p.priceLabel" /></div>
      <p v-else class="muted">Nenhum produto com produtor à venda agora. No site, esta seção não aparece.</p>
    </div>
  </section>
</template>
