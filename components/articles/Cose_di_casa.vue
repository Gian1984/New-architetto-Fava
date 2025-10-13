<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="mx-auto max-w-7xl pt-32 pb-12 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-7xl px-4 lg:max-w-none lg:px-0">
        <!-- Heading -->
        <div class="max-w-7xl mx-auto border-b border-black">
          <h2
              id="features-heading"
              class="text-xl text-left leading-10 mx-auto max-w-7xl pb-2 font-bold tracking-tight text-gray-400 sm:text-xl"
          >
            ' CASA RIVOLI ' è su 100 IDEE PER RISTRUTTURARE, Luglio 2022
          </h2>
        </div>

        <!-- Content -->
        <div>
          <div class="mx-auto max-w-full py-12 sm:py-12">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="max-w-3xl">
                <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">55 m² luminosi e su misura</p>
                <p class="mt-4 text-gray-500">
                  Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto,
                  l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con
                  un progetto d'interni che lascia in comunicazione gli ambienti.
                </p>

                <!-- Fancybox opener (copertina) -->
                <a
                    href="/img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp"
                    data-fancybox="gallery-cdc"
                    data-caption="Cose di Casa — 8 Agosto 2022 (Copertina)"
                    class="hover:text-indigo-500 flex items-center gap-2 my-10"
                >
                  <span>Sfoglia</span>
                  <DocumentMagnifyingGlassIcon class="h-6 w-6" />
                </a>
              </div>

              <!-- Gallery -->
              <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                      data-fancybox="gallery-cdc"
                      data-caption="55 mq luminosi e su misura"
                  >
                    <img
                        src="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                        alt="55 mq luminosi e su misura"
                        class="aspect-w-5 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp"
                      data-fancybox="gallery-cdc"
                      data-caption="Pura versatilità"
                  >
                    <img
                        src="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp"
                        alt="Pura versatilità"
                        class="aspect-w-5 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp"
                      data-fancybox="gallery-cdc"
                      data-caption="Fresca e naturale"
                  >
                    <img
                        src="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp"
                        alt="Fresca e naturale"
                        class="aspect-w-5 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp"
                      data-fancybox="gallery-cdc"
                      data-caption="Complice la luce"
                  >
                    <img
                        src="/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp"
                        alt="Complice la luce"
                        class="aspect-w-5 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <!-- /Gallery -->
            </div>
          </div>
        </div>
        <!-- /Content -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { DocumentMagnifyingGlassIcon } from '@heroicons/vue/24/outline'
// Fancybox è caricato globalmente dal plugin `plugins/fancybox.client.ts`
</script>
