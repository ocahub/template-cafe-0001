<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const company = useRhCompany()
const v = computed(() => company.values.value)
const maps = computed(() => (v.value.endereco ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.value.endereco)}` : ''))
const embed = computed(() => (v.value.endereco ? `https://maps.google.com/maps?q=${encodeURIComponent(v.value.endereco)}&z=16&output=embed` : ''))
const phoneHref = computed(() => `tel:${(v.value.telefone || '').replace(/[^\d+]/g, '')}`)
</script>

<template>
  <section id="cafeteria" class="section">
    <div class="wrap">
      <div class="visit">
        <div class="visit-info">
          <RhText tag="h2" class="h2" path="title" :value="p.title" ph="Título" />
          <RhText tag="p" class="lede" style="margin-top:16px" path="lede" :value="p.lede" ph="Texto" ml />
          <dl>
            <div><dt>Endereço</dt><dd>{{ v.endereco || 'Cadastre o endereço em Loja › Dados da loja › Contatos do site.' }}</dd></div>
            <div><dt>Horário</dt><dd><RhText tag="span" style="white-space:pre-line" path="hours" :value="p.hours" ph="Horário" ml /></dd></div>
            <div v-if="v.telefone"><dt>Telefone</dt><dd><a :href="phoneHref">{{ v.telefone }}</a></dd></div>
          </dl>
          <a v-if="maps" class="btn btn-primary" :href="maps" target="_blank" rel="noopener"><RhText path="button" :value="p.button" ph="Botão" /></a>
        </div>
        <iframe v-if="embed" title="Mapa" loading="lazy" :src="embed" />
      </div>
    </div>
  </section>
</template>
