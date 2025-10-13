<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          CASA NEL PARCO
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivalta di Torino (TO) - 2016
        </h3>

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
            CASA NEL PARCO
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Rivalta di Torino (TO) - 2016
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
  name: 'CASA NEL PARCO',
  images: [
    { id: 1, name: 'Vista esterna 1', imageSrc: '/img/vista-esterna-01.jpg', imageAlt: 'Casa nel Parco – vista esterna 1', primary: true },
    { id: 2, name: 'Vista esterna 2', imageSrc: '/img/vista-esterna-02.jpg', imageAlt: 'Casa nel Parco – vista esterna 2', primary: true },
    { id: 3, name: 'Vista interna 1', imageSrc: '/img/vista-interna-01.jpg', imageAlt: 'Casa nel Parco – vista interna 1', primary: true },
    { id: 4, name: 'Vista interna 2', imageSrc: '/img/vista-interna-04.jpg', imageAlt: 'Casa nel Parco – vista interna 2', primary: true },
    { id: 5, name: 'Vista interna 3', imageSrc: '/img/vista-interna-02.jpg', imageAlt: 'Casa nel Parco – vista interna 3', primary: true },
    { id: 6, name: 'Esploso', imageSrc: '/img/vista-esploso-04.jpg', imageAlt: 'Casa nel Parco – esploso', primary: true },
    { id: 7, name: 'Planimetria piano terra', imageSrc: '/img/PIANO-TERRA.jpg', imageAlt: 'Casa nel Parco – planimetria piano terra', primary: true },
    { id: 8, name: 'Planimetria primo piano', imageSrc: '/img/PIANO-PRIMO-CON-VUOTO.jpg', imageAlt: 'Casa nel Parco – planimetria primo piano', primary: true },
    { id: 9, name: 'Stato di fatto', imageSrc: '/img/stato-di-fatto.jpg', imageAlt: 'Casa nel Parco – stato di fatto', primary: true }
  ],
  description: `
    <p>
      Dalla ristrutturazione di un fienile in provincia di Torino nasce una residenza dal carattere sospeso tra tradizione e contemporaneità.
      Volumetria, tetto a falde, travi in legno e pilastri in mattoni vengono preservati; nuove aperture
      mettono in relazione gli interni con il parco. Uno spazio a doppia altezza connette la zona giorno al piano terra con la camera al primo piano.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivalta di Torino (TO)' },
    { name: 'Stato', info: 'Progetto preliminare, studio di fattibilità' },
    { name: 'Cliente', info: 'Privato' },
    { name: 'Team di progettazione', info: 'Claudio Fava, Stefano Carera, Eirini Giannakopoulou' }
  ]
}

onMounted(() => {
  // Se hai il plugin con router.afterEach questo è superfluo, ma qui è “safe”
  try {
    $fancybox?.bind('[data-fancybox="gallery-project"]', {
      groupAll: true,
      hideScrollbar: false
    })
  } catch {}
})

onBeforeUnmount(() => {
  try { $fancybox?.destroy() } catch {}
})
</script>
