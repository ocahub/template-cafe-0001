<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const path = computed(() => p.value.variant === 'caminho')
</script>

<template>
  <section :class="path ? 'section' : 'section-tight on-pergaminho'">
    <div class="wrap">
      <RhText tag="h2" class="h2" style="margin-bottom:36px" path="title" :value="p.title" ph="Título" />
      <ol :class="path ? 'path' : 'steps'">
        <li v-for="(x, i) in p.items" :key="i">
          <RhText tag="h3" :path="`items.${i}.title`" :value="x.title" ph="Título" />
          <RhText tag="p" :path="`items.${i}.text`" :value="x.text" ph="Texto" ml />
        </li>
      </ol>
    </div>
  </section>
</template>
