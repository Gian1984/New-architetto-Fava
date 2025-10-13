<template>
  <div class="bg-white mb-6">
    <main class="pt-20 max-w-full mx-auto px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Titoli mobile -->
        <h1 class="mt-3 text-lg font-semibold text-gray-900 text-center lg:hidden">
          VIVERE IN 20 MQ
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivalta di Torino (TO) - 2020
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
            VIVERE IN 20 MQ
          </h1>
          <h2 class="text-lg text-gray-900 hidden lg:block">
            Rivalta di Torino (TO) - 2020
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
  name: 'VIVERE IN 20 MQ',
  images: [
    { id: 1, name: 'Soluzione A',  imageSrc: '/img/vivere20metri/01-scaled.jpg', imageAlt: 'Vivere in 20 mq – soluzione A',  primary: true },
    { id: 2, name: 'Spaccato A',   imageSrc: '/img/vivere20metri/02-scaled.jpg', imageAlt: 'Vivere in 20 mq – spaccato soluzione A', primary: true },
    { id: 3, name: 'Soluzione B1', imageSrc: '/img/vivere20metri/03-scaled.jpg', imageAlt: 'Vivere in 20 mq – soluzione B1', primary: true },
    { id: 4, name: 'Soluzione B2', imageSrc: '/img/vivere20metri/04-scaled.jpg', imageAlt: 'Vivere in 20 mq – soluzione B2', primary: true },
    { id: 5, name: 'Spaccato B',   imageSrc: '/img/vivere20metri/05-scaled.jpg', imageAlt: 'Vivere in 20 mq – spaccato soluzione B', primary: true }
  ],
  description: `
    <p>
      Sfida: ricavare un mini-appartamento indipendente in soli 20 m² dentro l’abitazione di famiglia.<br><br>
      <strong>Soluzione A</strong>: parete attrezzata + letto rialzato che integrano frigo, armadio e cassetti.<br>
      <strong>Soluzione B</strong>: letto a scomparsa con meccanismo a ribalta per massima flessibilità d’uso.<br><br>
      Il tutto secondo il principio “<em>piccolo ma bello</em>”.
    </p>
  `,
  info: [
    { name: 'Luogo', info: 'Rivalta di Torino (TO)' },
    { name: 'Stato', info: 'Concept, studio di fattibilità' },
    { name: 'Cliente', info: 'Privato' },
    { name: 'Team di progettazione', info: 'Claudio Fava' }
  ]
}

onBeforeUnmount(() => { try { $fancybox?.destroy() } catch {} })
</script>
