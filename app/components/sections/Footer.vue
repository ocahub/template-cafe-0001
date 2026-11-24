<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const store = useRhStore()
const company = useRhCompany()
const v = computed(() => company.values.value)
const logo = computed(() => p.value.logoImage || store.value?.logoUrl || '')
const wa = computed(() => company.whatsappUrl())
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <NuxtLink class="logo" :class="{ fallback: !logo }" to="/" :aria-label="`${v.empresa}, página inicial`">
            <img v-if="logo" :src="logo" :alt="v.empresa"><span v-else class="logo-text">{{ v.empresa }}</span>
          </NuxtLink>
          <RhText tag="p" style="margin-top:18px" path="text" :value="p.text" ph="Texto" ml />
          <div class="social">
            <a v-if="company.instagramUrl.value" :href="company.instagramUrl.value" target="_blank" rel="noopener" aria-label="Instagram"><TIcon name="ig" /></a>
            <a v-if="p.facebook" :href="p.facebook" target="_blank" rel="noopener" aria-label="Facebook"><TIcon name="fb" /></a>
            <a v-if="p.youtube" :href="p.youtube" target="_blank" rel="noopener" aria-label="YouTube"><TIcon name="yt" /></a>
          </div>
        </div>
        <div>
          <h4>Loja</h4>
          <ul><li v-for="(l, i) in p.links" :key="i"><NuxtLink :to="l.link || '/loja'"><RhText :path="`links.${i}.label`" :value="l.label" ph="Link" /></NuxtLink></li></ul>
        </div>
        <div>
          <h4>Institucional</h4>
          <ul>
            <li v-for="m in useRhSite().menu.value" :key="m.slug"><NuxtLink :to="m.slug">{{ m.title }}</NuxtLink></li>
            <li><NuxtLink to="/minha-conta">Minha conta</NuxtLink></li>
            <li><NuxtLink to="/minha-conta/pedidos">Meus pedidos</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4>Atendimento</h4>
          <ul>
            <li v-if="p.hours || editing"><RhText tag="span" style="white-space:pre-line" path="hours" :value="p.hours" ph="Horário" ml /></li>
            <li v-if="v.telefone"><a :href="`tel:${v.telefone.replace(/[^\d+]/g, '')}`">{{ v.telefone }}</a></li>
            <li v-if="wa"><a :href="wa" target="_blank" rel="noopener">WhatsApp {{ v.whatsapp }}</a></li>
            <li v-if="v.email"><a :href="`mailto:${v.email}`">{{ v.email }}</a></li>
          </ul>
          <div v-if="p.seals !== 'nao'" class="seals">
            <img src="/_template/img/pagamento.svg" alt="Cartão de crédito e PIX">
          </div>
        </div>
      </div>
      <div class="footer-legal">
        <RhText path="legal" :value="p.legal" ph="Linha legal" />
        <span>{{ v.endereco }}</span>
      </div>
    </div>
    <div style="text-align:center;padding:10px 16px;font-size:.8rem;opacity:.85"><RhCookiePreferences /></div>
  </footer>
</template>
