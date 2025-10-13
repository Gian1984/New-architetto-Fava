<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          VILLA PERRAULT
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2018
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
            VILLA PERRAULT
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Rivoli (TO) - 2018
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
  name: 'VILLA PERRAULT',
  images: [
    { id: 1,  name: 'Vista 1', imageSrc: '/img/villaperrault/vista-01-scaled.jpg', imageAlt: 'Villa Perrault – vista 1', primary: true },
    { id: 2,  name: 'Vista interna 2', imageSrc: '/img/villaperrault/vista-02-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 2', primary: true },
    { id: 3,  name: 'Vista interna 3', imageSrc: '/img/villaperrault/vista-03-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 3', primary: true },
    { id: 4,  name: 'Vista interna 4', imageSrc: '/img/villaperrault/vista-04-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 4', primary: true },
    { id: 5,  name: 'Vista interna 5', imageSrc: '/img/villaperrault/vista-05-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 5', primary: true },
    { id: 6,  name: 'Vista interna 6', imageSrc: '/img/villaperrault/vista-06-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 6', primary: true },
    { id: 7,  name: 'Vista interna 7', imageSrc: '/img/villaperrault/vista-08-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 7', primary: true },
    { id: 8,  name: 'Vista interna 8', imageSrc: '/img/villaperrault/vista-09-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 8', primary: true },
    { id: 9,  name: 'Vista interna 9', imageSrc: '/img/villaperrault/vista-10-scaled.jpg', imageAlt: 'Villa Perrault – vista interna 9', primary: true },
    { id: 10, name: 'Pianta piano terra', imageSrc: '/img/villaperrault/pianta-piano-terreno-_1-100-scaled.jpg', imageAlt: 'Villa Perrault – pianta piano terra', primary: true },
    { id: 11, name: 'Pianta primo piano', imageSrc: '/img/villaperrault/pianta-piano-primo-_1-100-scaled.jpg', imageAlt: 'Villa Perrault – pianta primo piano', primary: true }
  ],
  description: `
    <p>
      Edificio di impianto seicentesco su due livelli (~170 mq ciascuno). Il progetto d’interni rispetta la struttura a muri portanti e i soffitti cassettonati,
      introducendo un linguaggio contemporaneo in armonia con l’architettura storica: linee nette, materiali caldi, arredi su misura e pezzi di design.
      Pavimento in legno a spina di pesce per continuità tra gli ambienti. Soggiorno open-space con camino originale; cucina vetrata con isola centrale
      e partizioni apribili verso la zona pranzo.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivoli (TO)' },
    { name: 'Stato', info: 'Progetto preliminare' },
    { name: 'Cliente', info: 'Privato' },
    { name: 'Team di progettazione', info: 'Claudio Fava, Giorgio Fava' }
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
