<template>
  <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
    <div class="mb-8 text-center">
      <h2 class="text-xl font-semibold tracking-tight text-gray-900 border-b border-black inline-block pb-2">
        PROGETTI
      </h2>
      <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
        Selezione di lavori tra residenziale, retail e concept.
      </p>
    </div>

    <div v-if="list.length" class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 lg:gap-x-12">
      <article v-for="p in list" :key="p.slug" class="group">
        <NuxtLink :to="`/projects/${p.slug}`" class="block">
          <div class="w-full overflow-hidden rounded-sm">
            <!-- Contenitore 16:9 -->
            <div class="relative w-full" style="padding-bottom:56.25%">
              <img
                  :src="p.cover"
                  :alt="p.title"
                  class="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
              />
            </div>
          </div>
          <h3 class="mt-3 uppercase text-sm sm:text-base lg:text-lg font-medium text-black group-hover:text-gray-600">
            {{ p.title }}
          </h3>
        </NuxtLink>
      </article>
    </div>

    <p v-else class="text-center text-gray-500 py-24">
      Nessun progetto disponibile al momento.
    </p>
  </section>
</template>

<script setup lang="ts">
import { publicProjects } from '~/utils/projectRegistry'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Progetti — Claudio Fava Architetto',
  description: 'Portfolio di progetti: interior, ristrutturazioni, retail e concept.',
  ogTitle: 'Progetti — Claudio Fava Architetto',
  ogDescription: 'Portfolio di progetti: interior, ristrutturazioni, retail e concept.',
})

const list = publicProjects()
</script>
