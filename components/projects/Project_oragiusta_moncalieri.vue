<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          L'ORAGIUSTA MONCALIERI
        </h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">
          Moncalieri (TO) - 2020
        </h2>

        <!-- Galleria -->
        <div class="lg:mt-0 lg:col-start-1 lg:col-span-8 lg:mr-32 lg:row-start-1 lg:row-span-3">
          <div class="grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
            <div v-for="image in product.images" :key="image.id">
              <a
                  :href="image.imageSrc"
                  data-fancybox="gallery-project"
                  :data-caption="image.imageAlt"
              >
                <img
                    :src="image.imageSrc"
                    :alt="image.imageAlt"
                    :class="[
                    image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                    'w-full mt-3 hover:opacity-75'
                  ]"
                    loading="lazy" decoding="async"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Dettagli -->
        <div class="mt-8 lg:col-span-3">
          <h1 class="text-xl font-semibold text-gray-900 text-left hidden lg:block">
            L'ORAGIUSTA MONCALIERI
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Moncalieri (TO) - 2020
          </h2>

          <div class="mt-10">
            <h2 class="text-lg font-medium text-gray-900 mt-10">Descrizione</h2>
            <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description" />
          </div>

          <div class="mt-8 border-t border-gray-200 pt-8">
            <div class="mt-4 prose prose-sm text-gray-600 max-w-none">
              <p v-for="item in product.info" :key="item.name" class="mb-3">
                <span class="text-lg font-medium text-gray-900">{{ item.name }}:</span>
                <span class="block text-base text-gray-500">- {{ item.info }}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
const { $fancybox } = useNuxtApp()

type ProjectImage = {
  id: number
  name: string
  imageSrc: string
  imageAlt: string
  description?: string
  primary?: boolean
}
type InfoRow = { name: string; info: string }
type ProjectView = { name: string; images: ProjectImage[]; description: string; info: InfoRow[] }

const product: ProjectView = {
  name: "L'ORAGIUSTA MONCALIERI",
  images: [
    { id: 1, name: "Vista 1", imageSrc: '/img/loragiusta/foto-1-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 1", primary: true },
    { id: 2, name: "Vista 2", imageSrc: '/img/loragiusta/foto-2-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 2", primary: true },
    { id: 3, name: "Vista 3", imageSrc: '/img/loragiusta/foto-3-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 3", primary: true },
    { id: 4, name: "Vista 4", imageSrc: '/img/loragiusta/foto-4-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 4", primary: true },
    { id: 5, name: "Vista 5", imageSrc: '/img/loragiusta/foto-5-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 5", primary: true },
    { id: 6, name: "Vista 6", imageSrc: '/img/loragiusta/foto-6-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 6", primary: true },
    { id: 7, name: "Vista 7", imageSrc: '/img/loragiusta/foto-7-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 7", primary: true },
    { id: 8, name: "Vista 8", imageSrc: '/img/loragiusta/foto-8-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 8", primary: true },
    { id: 9, name: "Vista 9", imageSrc: '/img/loragiusta/foto-9-scaled.jpg', imageAlt: "L'Oragiusta Moncalieri vista 9", primary: true },
  ],
  description: `
    <p>
      In piazza Caduti per la Libertà, nel centro di Moncalieri, il locale si distingue per il
      <strong>bancone</strong> dove volumi neri dialogano con un <strong>top in rovere</strong>. Un controsoffitto scuro
      costellato da una “pioggia” di luci crea un’atmosfera calda e accogliente. In evidenza all’ingresso,
      la <strong>cella della birra</strong> in metallo e vetro diventa elemento espositivo e caratterizzante.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Moncalieri (TO)' },
    { name: 'Stato', info: 'Realizzato' },
    { name: 'Cliente', info: "L'Oragiusta" },
    { name: 'Team di progettazione', info: 'Claudio Fava, Paolo Neirotti' },
    { name: 'Foto', info: 'Paolo Properzi' }
  ]
}

onBeforeUnmount(() => { try { $fancybox?.destroy() } catch {} })
</script>
