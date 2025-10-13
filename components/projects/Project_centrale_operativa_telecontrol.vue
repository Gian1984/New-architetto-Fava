<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          CENTRALE OPERATIVA TELECONTROL
        </h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2014
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
            CENTRALE OPERATIVA TELECONTROL
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Rivoli (TO) - 2014
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
import { onMounted, onBeforeUnmount } from 'vue'
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
  name: 'CENTRALE OPERATIVA TELECONTROL',
  images: [
    { id: 1, name: 'Vista interna 1', imageSrc: '/img/PRO_7906.jpg', imageAlt: 'Centrale operativa – vista interna 1', primary: true },
    { id: 2, name: 'Vista interna 2', imageSrc: '/img/PRO_7912.jpg', imageAlt: 'Centrale operativa – vista interna 2', primary: true },
    { id: 3, name: 'Vista interna 3', imageSrc: '/img/PRO_7943.jpg', imageAlt: 'Centrale operativa – vista interna 3', primary: true },
    { id: 4, name: 'Vista interna 4', imageSrc: '/img/PRO_7933.jpg', imageAlt: 'Centrale operativa – vista interna 4', primary: true },
    { id: 5, name: 'Vista interna 5', imageSrc: '/img/PRO_7942.jpg', imageAlt: 'Centrale operativa – vista interna 5', primary: true },
    { id: 6, name: 'Vista interna 6', imageSrc: '/img/PRO_7948.jpg', imageAlt: 'Centrale operativa – vista interna 6', primary: true },
    { id: 7, name: 'Spaccato assonometrico', imageSrc: '/img/spaccato-assonometrico.jpg', imageAlt: 'Spaccato assonometrico', primary: true },
    { id: 8, name: 'Tavola progetto', imageSrc: '/img/2017-01-09_Progetto-Centrale-operativa-Tav-A1.jpg', imageAlt: 'Tavola progetto', primary: true },
    { id: 9, name: 'Stato di fatto', imageSrc: '/img/20170415_173308-BN-copy.jpg', imageAlt: 'Stato di fatto', primary: true }
  ],
  description: `
    <p>
      Spazio di lavoro di rappresentanza per un'azienda leader nella sicurezza. Ambienti eleganti ed essenziali, all’insegna
      di funzionalità e accoglienza. Uffici e sale riunioni sono disposti sulle fasce esterne per sfruttare la luce naturale,
      con vetrate e lamiere forate a tutta altezza. Cromie di pavimentazione separano percorsi e aree operative.
      Il visitatore può osservare il “cuore pulsante” dell’azienda senza interferire con il lavoro.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivoli (TO)' },
    { name: 'Stato', info: 'Realizzato' },
    { name: 'Cliente', info: 'Telecontrol Spa' },
    { name: 'Team di progettazione', info: 'Claudio Fava, Giorgio Fava' },
    { name: 'Foto', info: 'Paolo Properzi' }
  ]
}

onMounted(() => {
  try {
    $fancybox?.bind('[data-fancybox="gallery-project"]', { groupAll: true, hideScrollbar: false })
  } catch {}
})

onBeforeUnmount(() => {
  try { $fancybox?.destroy() } catch {}
})
</script>
