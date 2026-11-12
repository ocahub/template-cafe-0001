<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="section on-mata">
    <div class="wrap">
      <RhText tag="h2" class="h2" style="color:#fff;margin-bottom:32px" path="title" :value="p.title" ph="Título" />
      <ul class="values"><li v-for="(x, i) in p.items" :key="i"><RhText :path="`items.${i}.label`" :value="x.label" ph="Valor" /></li></ul>
    </div>
  </section>
</template>
