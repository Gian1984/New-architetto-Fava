<template>
  <div class="bg-white mb-6">
    <div class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">CASA GRAMSCI</h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">Condove (TO) - 2022</h2>

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
                    width="1200" height="800"
                    loading="lazy" decoding="async"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Dettagli -->
        <div class="mt-8 lg:col-span-3">
          <h1 class="text-xl font-semibold text-gray-900 text-left hidden lg:block">CASA GRAMSCI</h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">Condove (TO) - 2022</h2>

          <div class="mt-10 space-y-10">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Descrizione</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description" />
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">La boiserie a nastro</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description1" />
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">Rovere “nordico”</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description2" />
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">Pura versatilità</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description3" />
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">Bagno con layout a zone</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description4" />
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">Complice la luce</h3>
              <div class="mt-4 prose prose-sm text-gray-600 max-w-none" v-html="product.description5" />
            </div>
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
    </div>
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
  description: string
  description1: string
  description2: string
  description3: string
  description4: string
  description5: string
  info: InfoRow[]
}

const product: ProjectView = {
  name: 'CASA GRAMSCI',
  images: [
    { id: 1,  name: 'Vista 1',  imageSrc: '/img/casagramsci/01.webp', imageAlt: 'Casa Gramsci vista interna 1', primary: true },
    { id: 2,  name: 'Vista 2',  imageSrc: '/img/casagramsci/02.webp', imageAlt: 'Casa Gramsci vista interna 2', primary: true },
    { id: 3,  name: 'Vista 3',  imageSrc: '/img/casagramsci/09.webp', imageAlt: 'Casa Gramsci vista interna 3', primary: true },
    { id: 4,  name: 'Vista 4',  imageSrc: '/img/casagramsci/10.webp', imageAlt: 'Casa Gramsci vista interna 4', primary: true },
    { id: 5,  name: 'Vista 5',  imageSrc: '/img/casagramsci/11.webp', imageAlt: 'Casa Gramsci vista interna 5', primary: true },
    { id: 6,  name: 'Vista 6',  imageSrc: '/img/casagramsci/12.webp', imageAlt: 'Casa Gramsci vista interna 6', primary: true },
    { id: 7,  name: 'Vista 7',  imageSrc: '/img/casagramsci/13.webp', imageAlt: 'Casa Gramsci vista interna 7', primary: true },
    { id: 8,  name: 'Vista 8',  imageSrc: '/img/casagramsci/14.webp', imageAlt: 'Casa Gramsci vista interna 8', primary: true },
    { id: 9,  name: 'Vista 9',  imageSrc: '/img/casagramsci/15.webp', imageAlt: 'Casa Gramsci vista interna 9', primary: true },
    { id: 10, name: 'Vista 10', imageSrc: '/img/casagramsci/16.webp', imageAlt: 'Casa Gramsci vista interna 10', primary: true },
    { id: 11, name: 'Vista 11', imageSrc: '/img/casagramsci/17.webp', imageAlt: 'Casa Gramsci vista interna 11', primary: true },
    { id: 12, name: 'Vista 12', imageSrc: '/img/casagramsci/18.webp', imageAlt: 'Casa Gramsci vista interna 12', primary: true },
    { id: 13, name: 'Vista 13', imageSrc: '/img/casagramsci/19.webp', imageAlt: 'Casa Gramsci vista interna 13', primary: true },
    { id: 14, name: 'Vista 14', imageSrc: '/img/casagramsci/20.webp', imageAlt: 'Casa Gramsci vista interna 14', primary: true },
    { id: 15, name: 'Vista 15', imageSrc: '/img/casagramsci/21.webp', imageAlt: 'Casa Gramsci vista interna 15', primary: true },
    { id: 16, name: 'Vista 16', imageSrc: '/img/casagramsci/22.webp', imageAlt: 'Casa Gramsci vista interna 16', primary: true },
    { id: 17, name: 'Vista 17', imageSrc: '/img/casagramsci/23.webp', imageAlt: 'Casa Gramsci vista interna 17', primary: true },
    { id: 18, name: 'Vista 18', imageSrc: '/img/casagramsci/24.webp', imageAlt: 'Casa Gramsci vista interna 18', primary: true },
    { id: 19, name: 'Vista 19', imageSrc: '/img/casagramsci/25.webp', imageAlt: 'Casa Gramsci vista interna 19', primary: true },
    { id: 20, name: 'Vista 20', imageSrc: '/img/casagramsci/26.webp', imageAlt: 'Casa Gramsci vista interna 20', primary: true }
  ],
  description: `
    <p>Situato in un edificio anni ’60 multifamiliare… arredi su misura e materiali naturali…</p>
    <p>…putrella in ferro a vista… rovere e marmo verde Guatemala… doccia in gres porcellanato verde lucente…</p>
  `,
  description1: `
    <p>Boiserie a mezza parete in rovere che connette cucina e pranzo… listelli allineati fissati a parete.</p>
  `,
  description2: `
    <p>Rovere naturale “miele” per arredi su misura, contrappunti neri su sedute e base tavolo: insieme armonioso.</p>
  `,
  description3: `
    <p>Zona relax raccolta e luminosa, affacciata su pranzo/cucina e TV: spazio conviviale e per la lettura.</p>
  `,
  description4: `
    <p>Bagno suddiviso in tre zone: antibagno con lavabo, doccia in nicchia a sinistra, sanitari con porta in vetro per la luce.</p>
  `,
  description5: `
    <p>Doccia walk-in in nicchia, rivestita con tavelline di gres blu mare posate in verticale; “pozzo di luce” a soffitto.</p>
  `,
  info: [
    { name: 'Luogo', info: 'Condove (TO)' },
    { name: 'Stato', info: 'Realizzato' },
    { name: 'Cliente', info: 'Privato' },
    { name: 'Team di progettazione', info: 'Claudio Fava' },
    { name: 'Foto', info: 'Paolo Properzi' }
  ]
}

// pulizia Fancybox quando si lascia la pagina
onBeforeUnmount(() => {
  try { $fancybox?.destroy() } catch {}
})
</script>
