<template>
  <section class="max-w-7xl mx-auto p-6">
    <component v-if="Comp" :is="Comp" />
    <p v-else class="text-black">Caricamento…</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug, loadArticleComponent } from '~/utils/articleRegistry'

const route = useRoute()
const slug = route.params.slug as string
const entry = getArticleBySlug(slug)

if (!entry) {
  throw createError({ statusCode: 404, statusMessage: 'Articolo non trovato' })
}

// JSON-LD con tipi compatibili (usa innerHTML)
const jsonLd = entry.seo?.structuredData
    ? [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify(entry.seo.structuredData),
    }] as any
    : []

useHead({
  title: entry.seo?.title || entry.title,
  meta: [
    { name: 'description', content: entry.seo?.description || entry.description || '' },
    entry.seo?.ogImage ? { property: 'og:image', content: entry.seo.ogImage } : undefined,
  ].filter(Boolean) as any,
  script: jsonLd
})

const Comp = ref<any>(null)
onMounted(async () => {
  Comp.value = await loadArticleComponent(slug)
})
</script>

