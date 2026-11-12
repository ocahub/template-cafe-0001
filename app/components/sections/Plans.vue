<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const compact = computed(() => p.value.mode !== 'completo')
const lines = (raw?: string) => (raw ?? '').split('\n').map(l => l.trim()).filter(Boolean)
const anchor = (name: string) => (name || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-')
</script>

<template>
  <section id="planos" class="section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <RhText tag="h2" class="h2" path="title" :value="p.title" ph="Título" />
          <RhText v-if="p.text || editing" tag="p" path="text" :value="p.text" ph="Texto" />
        </div>
        <TButton v-if="p.button || editing" class="link" :link="p.link || '/clube'"><RhText path="button" :value="p.button" ph="Link" /></TButton>
      </div>
      <div class="plans">
        <article v-for="(x, i) in p.plans" :id="anchor(x.name)" :key="i" class="plan" :class="{ featured: !!x.ribbon }">
          <div v-if="x.ribbon" class="plan-ribbon"><RhText :path="`plans.${i}.ribbon`" :value="x.ribbon" ph="Fita" /></div>
          <div v-if="x.image && !x.ribbon" class="plan-media"><img :src="x.image" alt="" loading="lazy"></div>
          <div class="plan-body">
            <RhText tag="div" class="plan-kicker" :path="`plans.${i}.kicker`" :value="x.kicker" ph="Chamada" />
            <RhText tag="h3" :path="`plans.${i}.name`" :value="x.name" ph="Nome" />
            <RhText tag="p" class="plan-desc" :path="`plans.${i}.desc`" :value="x.desc" ph="Descrição" ml />
            <div v-if="compact" class="plan-from"><small>A partir de</small><b><RhText :path="`plans.${i}.from`" :value="x.from" ph="R$ 0,00" /> <span>/mês</span></b></div>
            <table v-else-if="lines(x.options).length" class="options">
              <tbody><tr v-for="(o, j) in lines(x.options)" :key="j"><td>{{ o }}</td></tr></tbody>
            </table>
            <NuxtLink v-if="compact" class="btn btn-block" :class="x.ribbon ? 'btn-primary' : 'btn-ghost'" :to="`${p.link || '/clube'}#${anchor(x.name)}`">Ver opções do {{ x.name }}</NuxtLink>
            <template v-else>
              <TButton class="btn btn-block" :class="x.ribbon ? 'btn-primary' : 'btn-ghost'" style="margin-top:22px" :link="x.link"><RhText :path="`plans.${i}.button`" :value="x.button" ph="Botão" /></TButton>
              <TButton v-if="x.button2" class="btn btn-block btn-ghost" style="margin-top:10px" :link="x.link2"><RhText :path="`plans.${i}.button2`" :value="x.button2" ph="Botão" /></TButton>
            </template>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
