<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="section on-mata">
    <div class="wrap producer">
      <div class="photo"><img v-if="p.image" :src="p.image" alt="" loading="lazy"></div>
      <div>
        <RhText tag="h2" class="h2" style="color:#fff" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="lede" style="margin-top:20px" path="text" :value="p.text" ph="Texto" ml />
        <ul v-if="p.list?.length" class="producer-list">
          <li v-for="(x, i) in p.list" :key="i"><RhText :path="`list.${i}.name`" :value="x.name" ph="Nome" /> <span><RhText :path="`list.${i}.detail`" :value="x.detail" ph="Detalhe" /></span></li>
        </ul>
        <TButton v-if="p.button || editing" class="btn btn-light" :link="p.link"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
      </div>
    </div>
  </section>
</template>
