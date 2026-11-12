<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="section">
    <div class="wrap" style="max-width:860px">
      <RhText tag="h2" class="h2" style="margin-bottom:24px" path="title" :value="p.title" ph="Título" />
      <RhText tag="p" class="lede t-text" path="text" :value="p.text" ph="Texto" ml />
    </div>
  </section>
</template>
