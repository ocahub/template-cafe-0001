<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const route = useRoute()
const { page } = useRhSite()
const title = computed(() => page(route.path)?.title)
</script>

<template>
  <div class="wrap">
    <div class="about-hero">
      <div>
        <nav class="crumbs" aria-label="Você está em"><NuxtLink to="/">Início</NuxtLink> / {{ title }}</nav>
        <RhText tag="h1" class="display" style="font-size:clamp(44px,6vw,88px);color:var(--mata)" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="lede" style="margin-top:28px" path="lead" :value="p.lead" ph="Texto" ml />
      </div>
      <div class="photo"><img v-if="p.image" :src="p.image" alt=""></div>
    </div>
  </div>
</template>
