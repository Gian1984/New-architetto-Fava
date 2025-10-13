<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">FLUSH HOUSE</h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">Concorso Rasoparete</h2>
        <h3 class="text-base text-gray-900 text-center lg:hidden">“Lo spazio abitativo del terzo millennio” – 2020</h3>

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
          <h1 class="text-xl font-semibold text-gray-900 text-left hidden lg:block">FLUSH HOUSE</h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">Concorso Rasoparete</h2>
          <h3 class="text-lg text-gray-900 hidden lg:block">“Lo spazio abitativo del terzo millennio” – 2020</h3>

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
type ProjectView = {
  name: string
  images: ProjectImage[]
  description: string   // HTML
  info: InfoRow[]
}

const product: ProjectView = {
  name: 'FLUSH HOUSE',
  images: [
    { id: 1,  name: 'Vista esterna 1', imageSrc: '/img/rasoparete/vista-03-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista esterna 1', primary: true },
    { id: 2,  name: 'Vista esterna 2', imageSrc: '/img/rasoparete/vista-02-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista esterna 2', primary: true },
    { id: 3,  name: 'Vista esterna 3', imageSrc: '/img/rasoparete/vista-01-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista esterna 3', primary: true },
    { id: 4,  name: 'Vista esterna 4', imageSrc: '/img/rasoparete/vista-03b-scaled.jpg', imageAlt: 'Concorso Rasoparete vista esterna 4', primary: true },
    { id: 5,  name: 'Vista interna 1', imageSrc: '/img/rasoparete/vista-04-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista interna 1', primary: true },
    { id: 6,  name: 'Vista interna 2', imageSrc: '/img/rasoparete/vista-05-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista interna 2', primary: true },
    { id: 7,  name: 'Vista interna 3', imageSrc: '/img/rasoparete/vista-06-1-scaled.jpg', imageAlt: 'Concorso Rasoparete vista interna 3', primary: true },
    { id: 8,  name: 'Spaccato',       imageSrc: '/img/rasoparete/SPACCATO-scaled.jpg',       imageAlt: 'Concorso Rasoparete spaccato', primary: true },
    { id: 9,  name: 'Pianta PT',      imageSrc: '/img/rasoparete/pianta-piano-TERRENO-scaled.jpg', imageAlt: 'Concorso Rasoparete pianta piano terreno', primary: true },
    { id:10,  name: 'Pianta P1',      imageSrc: '/img/rasoparete/pianta-piano-PRIMO-scaled.jpg',   imageAlt: 'Concorso Rasoparete pianta primo piano', primary: true },
  ],
  description: `
    <p>
      Il progetto della casa-studio <strong>FLUSH HOUSE</strong> risponde alle esigenze del terzo millennio
      con 4 direttrici: <em>separazione dei flussi</em>, <em>arredi integrati</em>, <em>spazio flessibile</em> e
      <em>sistemi frangisole</em>. La scala all’ingresso separa percorsi pubblico/privato, arredi raso-muro
      ottimizzano gli spazi, pareti vetrate scorrevvoli modulano l’open space e i pannelli forati schermano le facciate,
      garantendo comfort e identità architettonica.
    </p>
    <p>
      All’interno, tende a rullo incassate regolano la luce; all’esterno, le grandi aperture a sud/est/ovest
      massimizzano l’apporto solare invernale e sono filtrate in estate dai pannelli Rasoparete.
    </p>
  `,
  info: [
    { name: 'Team di progettazione', info: 'Claudio Fava' },
    { name: 'Cliente', info: 'Rasoparete' }
  ]
}

// pulizia Fancybox quando si lascia la pagina
onBeforeUnmount(() => {
  try { $fancybox?.destroy() } catch {}
})
</script>
