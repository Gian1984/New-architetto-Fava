<template>
  <section class="max-w-full mx-auto px-4 py-10 sm:px-6 lg:px-12">
    <div class="mb-8 text-center">
      <h2 class="text-xl font-semibold tracking-tight text-gray-900 border-b border-black inline-block pb-2">
        PRESS
      </h2>
    </div>

    <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="a in list" :key="a.slug" class="text-center">
        <NuxtLink
            :to="`/articles/${a.slug}`"
            class="group inline-block focus:outline-none focus:ring-2 focus:ring-black/30 rounded-sm"
            :aria-label="a.title"
        >
          <img
              :src="a.cover"
              :alt="a.title"
              class="w-52 h-auto mx-auto shadow transition-opacity group-hover:opacity-90"
              loading="lazy"
              decoding="async"
              width="208"
              height="auto"
              sizes="(min-width: 1024px) 208px, (min-width: 640px) 208px, 208px"
          />

          <!-- titolo HTML (quando presente) -->
          <h3
              v-if="a.titleHtml"
              class="mt-3 font-medium leading-snug text-gray-900"
              v-html="a.titleHtml"
          />

          <!-- fallback plain text -->
          <h3 v-else class="mt-3 font-medium leading-snug text-gray-900">
            {{ a.title }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { publicArticles } from '~/utils/articleRegistry'
import { useSeoMeta } from '#imports'

const list = publicArticles()

// pick prima cover come og:image (fallback sicuro)
const og = list[0]?.cover ?? '/img/og-default.jpg'

useSeoMeta({
  title: 'Press — Pubblicazioni e articoli',
  description: 'Raccolta di articoli e pubblicazioni su riviste e media.',
  ogTitle: 'Press — Pubblicazioni e articoli',
  ogDescription: 'Raccolta di articoli e pubblicazioni su riviste e media.',
  ogImage: og,
  twitterCard: 'summary_large_image',
})
</script>


