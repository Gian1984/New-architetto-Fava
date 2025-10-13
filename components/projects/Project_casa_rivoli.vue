<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          CASA RIVOLI
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2016
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
            CASA RIVOLI
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Rivoli (TO) - 2016
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
  name: 'CASA RIVOLI',
  images: [
    { id: 1,  name: 'Vista 1',  imageSrc: '/img/PRO_7700.jpg', imageAlt: 'Casa Rivoli – vista interna 1',  primary: true },
    { id: 2,  name: 'Vista 2',  imageSrc: '/img/PRO_7728.jpg', imageAlt: 'Casa Rivoli – vista interna 2',  primary: true },
    { id: 3,  name: 'Vista 3',  imageSrc: '/img/PRO_7764.jpg', imageAlt: 'Casa Rivoli – vista interna 3',  primary: true },
    { id: 4,  name: 'Vista 4',  imageSrc: '/img/PRO_7774.jpg', imageAlt: 'Casa Rivoli – vista interna 4',  primary: true },
    { id: 5,  name: 'Vista 5',  imageSrc: '/img/PRO_7701.jpg', imageAlt: 'Casa Rivoli – vista interna 5',  primary: true },
    { id: 6,  name: 'Vista 6',  imageSrc: '/img/PRO_7711.jpg', imageAlt: 'Casa Rivoli – vista interna 6',  primary: true },
    { id: 7,  name: 'Vista 7',  imageSrc: '/img/PRO_7721.jpg', imageAlt: 'Casa Rivoli – vista interna 7',  primary: true },
    { id: 8,  name: 'Vista 8',  imageSrc: '/img/PRO_7722.jpg', imageAlt: 'Casa Rivoli – vista interna 8',  primary: true },
    { id: 9,  name: 'Vista 9',  imageSrc: '/img/PRO_7805.jpg', imageAlt: 'Casa Rivoli – vista interna 9',  primary: true },
    { id: 10, name: 'Vista 10', imageSrc: '/img/PRO_7840.jpg', imageAlt: 'Casa Rivoli – vista interna 10', primary: true },
    { id: 11, name: 'Vista 11', imageSrc: '/img/PRO_7860-.jpg', imageAlt: 'Casa Rivoli – vista interna 11', primary: true }
  ],
  description: `
    <p>
      Il progetto è caratterizzato dal contrasto <strong>bianco/legno</strong> come segno di continuità tra gli ambienti.
      Parquet in rovere sbiancato in tutta la casa (bagni esclusi, con ceramiche e marmi).
      Arredi su misura: librerie incassate, boiserie e <em>scala a sbalzo</em> con mobile TV integrato.
      Il camino è fulcro del soggiorno, che si divide idealmente in due aree (conversazione/lettura vs. relax).
      La cucina comunica con il living tramite parete in rovere con doppia anta scorrevole; isola con top in Carrara
      e massello di abete grigio orientato verso il giardino.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivoli (TO)' },
    { name: 'Stato', info: 'Realizzato' },
    { name: 'Cliente', info: 'Privato' },
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
