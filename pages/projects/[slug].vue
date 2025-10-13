<template>
  <section class="max-w-full mx-auto px-4 py-8">
    <component v-if="Comp" :is="Comp" />
    <div v-else class="text-center text-black py-20">Caricamento…</div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug, loadProjectComponent } from '~/utils/projectRegistry'

const route = useRoute()
const slug = route.params.slug as string
const entry = getProjectBySlug(slug)

if (!entry) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// prepara script JSON-LD con tipi compatibili
const jsonLd = entry.seo?.structuredData
    ? [{
      type: 'application/ld+json',
      // Unhead usa innerHTML per il contenuto inline
      innerHTML: JSON.stringify(entry.seo.structuredData),
    }] as any
    : []

useHead({
  title: entry.seo?.title || entry.title,
  meta: [
    { name: 'description', content: entry.seo?.description || '' },
    entry.seo?.ogImage ? { property: 'og:image', content: entry.seo.ogImage } : undefined,
  ].filter(Boolean) as any,
  script: jsonLd
})

const Comp = ref<any>(null)
onMounted(async () => {
  Comp.value = await loadProjectComponent(slug)
})
</script>

