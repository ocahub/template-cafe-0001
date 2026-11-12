<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="section on-pergaminho">
    <div class="wrap">
      <RhText tag="h2" class="h2" style="margin-bottom:36px" path="title" :value="p.title" ph="Título" />
      <div class="people">
        <article v-for="(x, i) in p.items" :key="i" class="person">
          <RhText tag="h3" :path="`items.${i}.name`" :value="x.name" ph="Nome" />
          <RhText tag="p" class="role" :path="`items.${i}.role`" :value="x.role" ph="Função" />
          <RhText tag="p" :path="`items.${i}.text`" :value="x.text" ph="Texto" ml />
        </article>
      </div>
    </div>
  </section>
</template>
