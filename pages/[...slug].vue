<!-- pages/[...slug].vue -->
<template>
  <main class="relative isolate min-h-screen flex flex-col justify-center items-center text-center bg-black">
    <!-- Immagine di sfondo presa dal tuo sito -->
    <img
        src="/img/PaintIt/SantAmbrogio_21bis.webp"
        alt="Progetto architettonico - Claudio Fava"
        class="absolute inset-0 -z-10 w-full h-full object-cover object-center opacity-50"
        loading="lazy"
        decoding="async"
    />

    <div class="relative z-10 px-6 py-24 sm:py-40 max-w-3xl mx-auto">
      <p class="text-base font-semibold text-white/80">404</p>
      <h1 class="mt-4 text-5xl sm:text-7xl font-semibold text-white tracking-tight">
        Pagina non trovata
      </h1>
      <p class="mt-6 text-lg text-white/70">
        Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
      </p>

      <div class="mt-10 flex justify-center">
        <NuxtLink
            to="/"
            class="inline-flex items-center gap-x-2 text-sm font-semibold text-white hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">←</span>
          Torna alla Home
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

const SITE_NAME = 'Claudio Fava Architetto'
const SITE_URL = 'https://www.favaclaudio.com'

useHead({
  title: `Pagina non trovata – ${SITE_NAME}`,
  meta: [
    { name: 'description', content: 'La pagina richiesta non è disponibile o è stata rimossa.' },
    { name: 'robots', content: 'noindex, follow' },
    { property: 'og:title', content: `Pagina non trovata – ${SITE_NAME}` },
    { property: 'og:description', content: 'La pagina richiesta non è disponibile o è stata rimossa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${SITE_URL}/404` },
    { property: 'og:image', content: `${SITE_URL}/img/PaintIt/SantAmbrogio_21bis.webp` },
  ]
})
</script>
