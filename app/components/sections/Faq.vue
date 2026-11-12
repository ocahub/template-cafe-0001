<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section id="duvidas" class="section">
    <div class="wrap" style="max-width:860px">
      <RhText tag="h2" class="h2" style="margin-bottom:24px" path="title" :value="p.title" ph="Título" />
      <div class="faq">
        <details v-for="(x, i) in p.items" :key="i" :open="editing || undefined">
          <summary><RhText :path="`items.${i}.q`" :value="x.q" ph="Pergunta" /></summary>
          <RhText tag="p" :path="`items.${i}.a`" :value="x.a" ph="Resposta" ml />
        </details>
      </div>
      <p v-if="p.note || editing" style="margin-top:32px" class="muted">
        <RhText path="note" :value="p.note" ph="Nota" />
        <RhWhatsappButton v-if="p.noteLink" class="link" source="faq"> <RhText path="noteLink" :value="p.noteLink" ph="Link" /></RhWhatsappButton>
      </p>
    </div>
  </section>
</template>
