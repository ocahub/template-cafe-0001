<script setup lang="ts">
import type { ShelfProduct } from '~/types'

// Um produto com produtor no cartao grande: foto, nome, quem produziu e o preco.
const props = defineProps<{ product: ShelfProduct, priceLabel?: string }>()
const links = useRhLinks()
const format = useRhFormat()
const to = computed(() => links.product(props.product.slug))
</script>

<template>
  <article class="lot">
    <NuxtLink class="lot-media" :to="to" tabindex="-1" aria-hidden="true">
      <img v-if="product.image?.thumb" :src="product.image.full?.url ?? product.image.thumb.url" alt="" loading="lazy">
    </NuxtLink>
    <div class="lot-body">
      <h3><NuxtLink :to="to">{{ product.name }}</NuxtLink></h3>
      <p v-if="product.manufacturer" class="lot-origin">
        <NuxtLink v-if="product.manufacturerSlug" :to="links.manufacturer(product.manufacturerSlug)">{{ product.manufacturer }}</NuxtLink>
        <template v-else>{{ product.manufacturer }}</template>
      </p>
      <div class="lot-foot">
        <div class="price"><small>{{ priceLabel || 'A partir de' }}</small><b>{{ format.price(product.priceFrom, product.currency) }}</b></div>
        <NuxtLink class="btn btn-primary" :to="to">Escolher</NuxtLink>
      </div>
    </div>
  </article>
</template>
