<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const store = useRhStore()
const { menu, editing } = useRhSite()
const company = useRhCompany()
const logo = computed(() => p.value.logoImage || store.value?.logoUrl || '')
const name = computed(() => store.value?.name ?? '')
const links = computed(() => [
  { to: '/loja', label: company.text(p.value.shopLabel) || 'Loja' },
  ...menu.value.map(m => ({ to: m.slug, label: m.title })),
  ...(p.value.links ?? []).map((l: { label: string, link: string }) => ({ to: l.link || '/', label: company.text(l.label) }))
])
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => { open.value = false })
const current = (to: string) => (!to.includes('#') && to !== '/' && route.path.startsWith(to) ? 'page' : undefined)
const wa = computed(() => company.whatsappUrl())
</script>

<template>
  <div v-if="p.notice || editing" class="notice">
    <div class="wrap">
      <RhText path="notice" :value="p.notice" ph="Aviso do topo" />
      <nav aria-label="Atendimento">
        <a v-if="wa" :href="wa" target="_blank" rel="noopener">WhatsApp {{ company.values.value.whatsapp }}</a>
      </nav>
    </div>
  </div>
  <header class="header">
    <div class="wrap">
      <NuxtLink class="logo" :class="{ fallback: !logo }" to="/" :aria-label="`${name}, página inicial`">
        <img v-if="logo" :src="logo" :alt="name">
        <span v-else class="logo-text">{{ name }}</span>
      </NuxtLink>
      <ul id="menu" class="menu" :class="{ open }">
        <li v-for="l in links" :key="l.to + l.label"><NuxtLink :to="l.to" :aria-current="current(l.to)">{{ l.label }}</NuxtLink></li>
      </ul>
      <div class="tools t-tools">
        <RhAccountButton />
        <RhCartButton />
        <button class="icon-btn menu-toggle" aria-controls="menu" :aria-expanded="open" aria-label="Abrir menu" @click="open = !open"><TIcon name="menu" /></button>
      </div>
    </div>
  </header>
</template>
