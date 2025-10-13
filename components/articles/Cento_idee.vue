<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="mx-auto max-w-full pt-32 pb-12 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-full px-4 lg:max-w-none lg:px-0">
        <!-- Heading -->
        <div class="max-w-full mx-auto border-b border-black">
          <h2
              id="features-heading"
              class="text-xl text-left leading-10 mx-auto max-w-full pb-2 font-medium tracking-tight text-gray-400 sm:text-xl"
          >
            ' CASA RIVOLI ' è su 100 IDEE PER RISTRUTTURARE, Luglio 2022
          </h2>
        </div>

        <!-- Content -->
        <div>
          <div class="mx-auto max-w-full py-12 sm:py-12">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="max-w-3xl">
                <p class="text-2xl font-medium tracking-tight text-gray-900 sm:text-2xl">Il wellness a casa</p>
                <p class="mt-4 text-gray-500">
                  Un viaggio nel mondo del <em>salus per aquam</em> alla ricerca delle soluzioni più idonee
                  all'area wellness connessa direttamente alla zona notte, per una rigenerazione totale.
                  La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e
                  tecnologie contemporanee.
                </p>

                <!-- Fancybox opener (copertina) -->
                <a
                    href="/img/pubblicazioni/100idee_luglio2022/copertina_idee.webp"
                    data-fancybox="gallery-100idee"
                    data-caption="100 Idee per Ristrutturare — Luglio 2022 (Copertina)"
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
                      href="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp"
                      data-fancybox="gallery-100idee"
                      data-caption="Il wellness a casa"
                  >
                    <img
                        src="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp"
                        alt="Il wellness a casa"
                        class="aspect-w-3 aspect-h-2 object-cover sm:pr-2 lg:pr-12 float-end"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp"
                      data-fancybox="gallery-100idee"
                      data-caption="Luogo di rigenerazione"
                  >
                    <img
                        src="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp"
                        alt="Luogo di rigenerazione"
                        class="aspect-w-3 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp"
                      data-fancybox="gallery-100idee"
                      data-caption="Relax e integrazione"
                  >
                    <img
                        src="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp"
                        alt="Relax e integrazione"
                        class="aspect-w-5 aspect-h-2 object-cover object-center"
                        loading="lazy"
                    />
                  </a>
                </div>

                <div class="overflow-hidden object-cover object-center mx-auto">
                  <a
                      href="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp"
                      data-fancybox="gallery-100idee"
                      data-caption="Spa in camera"
                  >
                    <img
                        src="/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp"
                        alt="Spa in camera"
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
   import '@fancyapps/ui/dist/fancybox/fancybox.css'
   import { Fancybox } from '@fancyapps/ui'
   Fancybox.bind('[data-fancybox]', { Thumbs: { autoStart: true } })

</script>
