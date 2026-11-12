<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="section-tight on-pergaminho" aria-label="Vantagens">
    <div class="wrap perks">
      <div v-for="(x, i) in p.items" :key="i" class="perk">
        <img v-if="x.image" :src="x.image" alt="">
        <div><b><RhText :path="`items.${i}.title`" :value="x.title" ph="Título" /></b><RhText tag="span" :path="`items.${i}.text`" :value="x.text" ph="Texto" /></div>
      </div>
    </div>
  </section>
</template>
