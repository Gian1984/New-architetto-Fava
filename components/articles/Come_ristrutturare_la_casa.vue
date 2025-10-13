<!-- components/articles/Come_ristrutturare_la_casa.vue -->
<template>
  <div class="bg-white">
    <div aria-labelledby="features-heading" class="mx-auto max-w-full pt-32 pb-12 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-full px-4 lg:max-w-none lg:px-0">

        <!-- Titolo -->
        <div class="mx-auto max-w-full border-b border-black">
          <h2 id="features-heading"
              class="text-xl text-left leading-10 mx-auto max-w-7xl pb-2 font-medium tracking-tight text-gray-400">
            ' PAINT IT BLACK ' è su Come Ristrutturare La Casa, Marzo - Aprile 2024
          </h2>
        </div>

        <div>
          <div class="mx-auto max-w-full py-12 sm:py-12">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="max-w-3xl">
                <p class="text-2xl font-medium tracking-tight text-gray-900">Rinascita in nero</p>
                <p class="mt-4 text-gray-500">
                  La trasformazione di un bilocale a Viareggio in un open space dominato dal nero, con dettagli in legno
                  di rovere, un’opera di design su misura che ottimizza spazio e funzionalità
                </p>

                <!-- Link alla copertina con Fancybox -->
                <a
                    href="/img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp"
                    data-fancybox="gallery2"
                    data-caption="Come Ristrutturare La Casa — Mar/Apr 2024"
                    class="hover:text-indigo-500 flex items-center gap-2 my-10"
                >
                  Sfoglia
                  <DocumentSearchIcon class="h-6 w-6"/>
                </a>
              </div>

              <!-- Galleria -->
              <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                <div class="overflow-hidden mx-auto">
                  <a
                      href="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina1.webp"
                      data-fancybox="gallery2"
                      data-caption="Rinascita in nero — pagina 1"
                  >
                    <img
                        src="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina1.webp"
                        alt="Rinascita in nero — pagina 1"
                        class="w-full max-w-5xl object-cover"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden mx-auto">
                  <a
                      href="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina2.webp"
                      data-fancybox="gallery2"
                      data-caption="Rinascita in nero — pagina 2"
                  >
                    <img
                        src="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina2.webp"
                        alt="Rinascita in nero — pagina 2"
                        class="w-full max-w-5xl object-cover"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden mx-auto">
                  <a
                      href="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina3.webp"
                      data-fancybox="gallery2"
                      data-caption="Rinascita in nero — pagina 3"
                  >
                    <img
                        src="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina3.webp"
                        alt="Rinascita in nero — pagina 3"
                        class="w-full max-w-5xl object-cover"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden mx-auto">
                  <a
                      href="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina4.webp"
                      data-fancybox="gallery2"
                      data-caption="Rinascita in nero — pagina 4"
                  >
                    <img
                        src="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina4.webp"
                        alt="Rinascita in nero — pagina 4"
                        class="w-full max-w-5xl object-cover"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden mx-auto">
                  <a
                      href="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina5.webp"
                      data-fancybox="gallery2"
                      data-caption="Rinascita in nero — pagina 5"
                  >
                    <img
                        src="/img/pubblicazioni/CRC_marzo_aprile_2024/pagina5.webp"
                        alt="Rinascita in nero — pagina 5"
                        class="w-full max-w-5xl object-cover"
                        loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <!-- /Galleria -->
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentMagnifyingGlassIcon as DocumentSearchIcon } from '@heroicons/vue/24/outline'

const pageTitle = `'PAINT IT BLACK' — Come Ristrutturare La Casa (Mar–Apr 2024)`

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: 'Rinascita in nero: bilocale a Viareggio trasformato in open space con palette scura e dettagli in rovere.' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: 'Galleria dell’articolo su CRC — Mar/Apr 2024.' },
    { property: 'og:image', content: '/img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp' }
  ]
})
</script>
