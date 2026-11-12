<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="section-tight on-pergaminho" aria-label="Categorias">
    <div class="wrap">
      <div class="cats">
        <NuxtLink v-for="(c, i) in p.items" :key="i" class="cat" :to="c.link || '/loja'">
          <div class="thumb"><img v-if="c.image" :src="c.image" alt="" loading="lazy"></div>
          <b><RhText :path="`items.${i}.title`" :value="c.title" ph="Nome" /><small><RhText :path="`items.${i}.small`" :value="c.small" ph="Detalhe" /></small></b>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
