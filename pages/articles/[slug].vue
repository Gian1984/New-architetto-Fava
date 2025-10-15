<template>
  <section class="max-w-full mx-auto p-6">
    <component v-if="Comp" :is="Comp" />
    <p v-else class="text-black">Caricamento…</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug, loadArticleComponent } from '~/utils/articleRegistry'
import { useSeoMeta, useRuntimeConfig } from '#imports'
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const route = useRoute()
const slug = route.params.slug as string
const entry = getArticleBySlug(slug)

if (!entry) {
  throw createError({ statusCode: 404, statusMessage: 'Articolo non trovato' })
}

if (entry) {
  const absoluteOgImage = entry.seo?.ogImage?.startsWith('http')
      ? entry.seo.ogImage
      : `${siteUrl}${entry.seo?.ogImage || ''}`
  const articleUrl = `${siteUrl}/articles/${slug}`

  useSeoMeta({
    title: entry.seo?.title || entry.title,
    description: entry.seo?.description || entry.description || '',
    ogTitle: entry.seo?.title || entry.title,
    ogDescription: entry.seo?.description || entry.description || '',
    ogImage: absoluteOgImage,
    ogUrl: articleUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: entry.seo?.title || entry.title,
    twitterDescription: entry.seo?.description || entry.description || '',
    twitterImage: absoluteOgImage
  })
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

