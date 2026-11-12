<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const shop = useShopProducts()
const liveEl = shop.el
const list = computed(() => shopFilter(shop.items.value, p.value.source, p.value.count))
</script>

<template>
  <section v-if="list.length || shop.loading.value || editing" ref="liveEl" class="section on-pergaminho" data-gm="shelf">
    <div class="wrap">
      <div class="section-head">
        <RhText tag="h2" class="h2" path="title" :value="p.title" ph="Título" />
        <NuxtLink v-if="p.button || editing" class="link" to="/loja"><RhText path="button" :value="p.button" ph="Link" /></NuxtLink>
      </div>
      <div v-if="shop.loading.value" class="shelf"><div v-for="i in Number(p.count) || 4" :key="i" class="rh-skeleton rh-skeleton--tile" /></div>
      <div v-else-if="list.length" class="shelf"><MiniProduct v-for="x in list" :key="x.id" :product="x" /></div>
      <p v-else class="muted">Nenhum produto deste tipo à venda agora. No site, esta seção não aparece.</p>
    </div>
  </section>
</template>
