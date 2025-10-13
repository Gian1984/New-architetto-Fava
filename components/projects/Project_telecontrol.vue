<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          SALA CONGRESSI TELECONTROL
        </h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">
          2016 – Rivoli
        </h2>

        <!-- Galleria -->
        <div class="lg:mt-0 lg:col-start-1 lg:col-span-8 lg:mr-32 lg:row-start-1 lg:row-span-3">
          <div class="grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
            <div v-for="image in product.images" :key="image.id">
              <p v-if="image.status" class="max-w-lg text-sm text-gray-600 mt-2 inline-flex items-center uppercase p-1 pr-2">
                {{ image.status }}
              </p>
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
            SALA CONGRESSI TELECONTROL
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            2016 – Rivoli
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
  name?: string
  imageSrc: string
  imageAlt: string
  description?: string
  primary?: boolean
  status?: string
}
type InfoRow = { name: string; info: string }
type ProjectView = { name: string; images: ProjectImage[]; description: string; info: InfoRow[] }

const product: ProjectView = {
  name: 'NUOVA SALA CONGRESSI TELECONTROL',
  images: [
    {
      id: 1,
      imageSrc: '/img/vista-01.jpg',
      imageAlt: 'Nuova sala congressi Telecontrol – vista 1',
      description: 'SALA CONGRESSI VISTA 1',
      primary: true
    },
    {
      id: 2,
      name: 'Sala Congressi – vista 2',
      imageSrc: '/img/vista-02.jpg',
      imageAlt: 'Sala Congressi – vista 2',
      description: 'SALA CONGRESSI VISTA 2',
      primary: true
    },
    {
      id: 3,
      name: 'Ingresso',
      imageSrc: '/img/vista-03.jpg',
      imageAlt: 'Ingresso',
      description: 'SALA CONGRESSI INGRESSO',
      primary: true
    },
    {
      id: 4,
      name: 'Assonometria / esploso',
      imageSrc: '/img/vista-04-assometria.jpg',
      imageAlt: 'Assonometria / esploso',
      description: 'SALA CONGRESSI ESPLOSO',
      primary: true
    },
    {
      id: 5,
      name: 'Planimetria – piano terreno',
      imageSrc: '/img/pianta-piano-terreno.jpg',
      imageAlt: 'Planimetria – piano terreno',
      description: 'SALA CONGRESSI PLANIMETRIA',
      primary: true
    },
    {
      id: 6,
      name: 'Stato di fatto',
      imageSrc: '/img/20170415_173308-BN-1.jpg',
      imageAlt: 'Stato di fatto',
      description: 'STATO DI FATTO',
      primary: true,
      status: 'STATO DI FATTO'
    }
  ],
  description: `
    <p>
      Rifunzionalizzazione dell'autorimessa di Telecontrol SpA a Rivoli (TO) in sala congressi di circa 400 m² con soppalco.
      Spazio polifunzionale e flessibile per lounge, break, supporto catering, riunioni, convention, feste, presentazioni e deposito/guardaroba.
      Scatolari metallici sospesi, ancorati ai pilastri, ospitano i corpi illuminanti e disegnano le diverse aree. Pareti in legno a soffietto consentono
      configurazioni variabili in base all’attività.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivoli (TO)' },
    { name: 'Stato', info: 'Progetto preliminare / Progetto esecutivo' },
    { name: 'Cliente', info: 'Telecontrol SpA' },
    { name: 'Team di progettazione', info: 'Claudio Fava, Giorgio Fava' }
  ]
}

onBeforeUnmount(() => {
  try { $fancybox?.destroy() } catch {}
})
</script>
