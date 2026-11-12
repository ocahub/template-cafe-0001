<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const company = useRhCompany()
const v = computed(() => company.values.value)
const wa = computed(() => company.whatsappUrl())
// A mensagem vai pelo WhatsApp da loja, ja escrita.
const form = reactive({ nome: '', whatsapp: '', email: '', mensagem: '' })
function send() {
  const text = `Olá! Sou ${form.nome}${form.whatsapp ? ` (${form.whatsapp})` : ''}, ${form.email}.\n\n${form.mensagem}`
  const url = company.whatsappUrl(text)
  if (url) window.open(url, '_blank', 'noopener')
}
</script>

<template>
  <section id="contato" class="section">
    <div class="wrap contact">
      <div>
        <RhText tag="h2" class="h2" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="lede" style="margin-top:16px" path="lede" :value="p.lede" ph="Texto" ml />
        <p v-if="v.email" style="margin-top:28px"><a class="link" :href="`mailto:${v.email}`">{{ v.email }}</a></p>
        <p v-if="wa"><a class="link" :href="wa" target="_blank" rel="noopener">WhatsApp {{ v.whatsapp }}</a></p>
      </div>
      <form class="form" @submit.prevent="send">
        <div class="two">
          <label>Nome<input v-model="form.nome" name="nome" autocomplete="name" required></label>
          <label>WhatsApp<input v-model="form.whatsapp" name="whatsapp" type="tel" autocomplete="tel"></label>
        </div>
        <label>E-mail<input v-model="form.email" name="email" type="email" autocomplete="email" required></label>
        <label>Mensagem<textarea v-model="form.mensagem" name="mensagem" required /></label>
        <div><button class="btn btn-primary" type="submit"><RhText path="button" :value="p.button" ph="Botão" /></button></div>
      </form>
    </div>
  </section>
</template>
