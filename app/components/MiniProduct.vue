<script setup lang="ts">
import type { ShelfProduct } from '~/types'

// Produto pequeno da prateleira "Mais vendidos" da loja.
const props = defineProps<{ product: ShelfProduct }>()
const links = useRhLinks()
const format = useRhFormat()
const to = computed(() => links.product(props.product.slug))
</script>

<template>
  <div class="mini">
    <NuxtLink class="thumb" :to="to"><img v-if="product.image?.thumb" :src="product.image.thumb.url" alt="" loading="lazy"></NuxtLink>
    <b>{{ product.name }}</b>
    <div class="row">
      <span>{{ product.priceTo > product.priceFrom ? 'a partir de ' : '' }}{{ format.price(product.priceFrom, product.currency) }}</span>
      <NuxtLink class="add" :to="to" :aria-label="`Ver ${product.name}`"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14" /></svg></NuxtLink>
    </div>
  </div>
</template>
