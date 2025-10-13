<!-- pages/index.vue -->
<template>
  <!-- HERO -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div id="home" class="relative min-h-screen">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="mx-auto">
          <div class="relative shadow-xl sm:overflow-hidden min-h-screen">
            <div class="absolute inset-0">
              <img
                  class="min-h-full w-full object-cover"
                  src="/img/PaintIt/SantAmbrogio_21bis.webp"
                  alt="il progetto degli spazi"
                  loading="eager"
                  decoding="async"
              />
            </div>

            <!-- Overlay: bottom-right -->
            <div class="relative min-h-screen px-4 sm:px-6 lg:px-8">
              <div class="pt-10 sm:pt-14 flex justify-center">
                <h1 class="text-center text-xl text-black lg:mb-10 py-20">
                  ARCHITETTURA<span class="text-white">&</span>INTERIOR DESIGN
                </h1>
              </div>

              <div
                  class="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 max-w-sm md:max-w-xs lg:max-w-screen-sm xl:max-w-screen-sm w-[92%] sm:w-auto"
              >
                <div class="bg-white/50 p-2 lg:ml-12">
                  <p class="pt-1 md:text-l lg:text-3xl text-grey-500 sm:max-w-3xl text-left font-medium">
                    Progettiamo spazi su misura dalla forte identità, coniugando estetica ed esigenze del cliente
                  </p>
                  <div class="text-right">
                    <button
                        class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white ml-auto hover:bg-gray-700 hover:text-white text-sm sm:text-lg text-black font-medium py-1 px-2 rounded-full flex items-center opacity-50"
                        @click="scrollToId('formCont')"
                    >
                      <span class="px-1 py-0.5">prenota la tua consulenza gratuita</span>
                      <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Overlay -->
          </div>
        </div>
      </div>
    </transition>

    <!-- BLOCCHI COVER -->
    <SectionCover
        img="/img/casagramsci/01.webp"
        title="CASA GRAMSCI"
        text="55 mq riconfigurati puntando su arredi su misura, materiali naturali e con un progetto che lascia in comunicazione gli ambienti."
        :to="`/projects/casa-gramsci`"
    />
    <SectionCover
        img="/img/PRO_7700.webp"
        pretitle="FOCUS ON:"
        title="CASA RIVOLI"
        text="Il contrasto bianco e legno diventa il segno di continuità degli ambienti."
        :to="`/projects/casa-rivoli`"
    />
    <SectionCover
        img="/img/PRO_7942.webp"
        title="IL PROGETTO DEGLI SPAZI"
        text="Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente."
        :to="`/projects/sala-centrale-operativa-telecontrol`"
    />
    <SectionCover
        img="/img/dante/PR_R0550 copy-min.webp"
        title="PROGETTI SU MISURA"
        text="Attraverso la ricerca di nuove forme, materiali e tecniche."
        :to="`/projects/project_dante`"
    />
    <SectionCover
        img="/img/foto-LORA.webp"
        title="LA CURA DEL DETTAGLIO"
        text="Disegniamo arredi personalizzati studiando ogni particolare."
        :to="`/projects/oragiusta-moncalieri`"
    />

    <!-- TEAM -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-12">
        <div class="space-y-12">
          <div class="space-y-5 mx-auto text-center max-w-7xl">
            <h2 id="profilo" class="text-xl mx-auto max-w-full text-center text-gray-900 tracking-tight border-b border-black leading-10">
              CHI SIAMO
            </h2>
            <p class="text-gray-900 max-w-3xl mx-auto">
              Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall'interior design al recupero dell'esistente, fino a edifici ex-novo.
            </p>
          </div>

          <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-24">
            <li v-for="person in team" :key="person.name" class="py-10 px-6 bg-gray-200 text-center xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <img class="mx-auto h-56 w-56 xl:w-80 xl:h-80 object-cover" :src="person.imageSrc" :alt="person.imageAlt" loading="lazy" />
                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="text-xl text-black">{{ person.name }}</h3>
                    <p class="text-indigo-400 pb-6">{{ person.role }}</p>
                    <p class="hidden lg:block text-base font-light text-gray-700 text-left">
                      {{ person.description }}
                    </p>
                    <p class="lg:hidden text-base font-light text-gray-700 text-left border-b border-gray-700 pt-2 pb-2">
                      {{ person.description }}
                    </p>
                  </div>
                  <ul role="list" class="flex justify-center space-x-5 pl-2 mt-4">
                    <li>
                      <a :href="person.linkedinUrl" class="text-gray-400 hover:text-blue-700" target="_blank" rel="noopener">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- PROGETTI -->
    <div class="bg-white pb-5" id="progetti">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:py-10 sm:px-6 lg:px-12">
        <div class="mx-auto py-3 text-center lg:py-3">
          <h2 class="max-w-full border-b border-black text-xl text-gray-700 sm:max-w-7xl mx-auto leading-10">PROGETTI</h2>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-12">
          <article v-for="p in projects" :key="p.slug" class="group relative">
            <NuxtLink :to="`/projects/${p.slug}`">
              <!-- RATIO 4:3 -->
              <div class="relative w-full overflow-hidden group-hover:opacity-80" style="padding-bottom:75%">
                <img
                    :src="p.cover"
                    :alt="p.title"
                    class="absolute inset-0 h-full w-full object-center object-cover"
                    loading="lazy"
                    decoding="async"
                />
              </div>
            </NuxtLink>
            <p class="mt-2 text-sm text-gray-700">
              <NuxtLink :to="`/projects/${p.slug}`" class="inline-flex items-center uppercase text-black rounded-full p-1 pr-2 sm:text-xs lg:text-sm xl:text-base hover:text-gray-500">
                {{ p.title }}
              </NuxtLink>
            </p>
          </article>
        </div>
      </div>
    </div>

    <!-- GALLERY -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 text-center px-4 lg:py-12 sm:px-6 lg:px-12">
        <div class="space-y-4 sm:space-y-12">
          <h2 id="gallery" class="max-w-full border-b border-black text-xl text-gray-700 sm:max-w-7xl mx-auto leading-10">GALLERY</h2>
        </div>
      </div>
    </div>

    <div class="bg-white relative overflow-hidden">
      <div class="gallery-wrap" style="background-image: url('/img/PRO_7711.jpg');">
        <div class="item" style="background-image: url('/img/loragiusta/foto-3-scaled.jpg');"></div>
        <div class="item" style="background-image: url('/img/PRO_7701.jpg');"></div>
        <div class="item" style="background-image: url('/img/PRO_7943.jpg');"></div>
        <div class="item" style="background-image: url('/img/loragiusta/foto-2-scaled.jpg');"></div>
        <div class="item" style="background-image: url('/img/casagramsci/11.webp');"></div>
      </div>
    </div>

    <!-- PRESS -->
    <div class="bg-white" id="press">
      <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-12">
        <div>
          <div class="space-y-5 mx-auto text-center max-w-7xl sm:px-6 lg:px-12 px-4">
            <h2 class="text-xl mx-auto text-center max-w-full border-b border-black text-gray-900 tracking-tight leading-10">
              PRESS
            </h2>
          </div>

          <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-12 max-w-7xl mx-auto">
            <li v-for="a in articles" :key="a.slug" class="py-10 px-6 text-center xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <div class="center">
                  <div class="page">
                    <NuxtLink :to="`/articles/${a.slug}`">
                      <img
                          class="mx-auto h-auto w-52 xl:w-52 xl:h-auto shadow"
                          :src="a.cover"
                          :alt="a.title"
                          loading="lazy"
                          decoding="async"
                      />
                    </NuxtLink>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="font-medium text-lg leading-6 space-y-1 text-center">
                    <NuxtLink :to="`/articles/${a.slug}`" class="text-gray-500 hover:text-gray-700">
                      <!-- usa titleHtml se presente, altrimenti fallback su title -->
                      <h3 v-if="a.titleHtml" class="max-w-lg text-xl font-light text-black sm:max-w-3xl mx-auto" v-html="a.titleHtml" />
                      <h3 v-else class="max-w-lg text-xl text-black sm:max-w-3xl mx-auto">
                        {{ a.title }}
                      </h3>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <!-- CONTATTI -->
    <ContactForm id="formCont" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '~/components/forms/ContactForm.vue'
import SectionCover from '~/components/sections/SectionCover.vue'
import { publicProjects } from '~/utils/projectRegistry'
import { publicArticles } from '~/utils/articleRegistry'
import { useSeoMeta, useHead } from '#imports'

// --- SEO HOME ---------------------------------------------------------------
const SITE_NAME = 'Claudio Fava Architetto'
const SITE_URL  = 'https://www.favaclaudio.com'
const OG_IMAGE  = '/img/PaintIt/SantAmbrogio_01b.webp'
const SITE_DESC = 'Studio di architettura a Torino: progetti su misura tra interior design, ristrutturazioni, retail e concept.'

useSeoMeta({
  title: `${SITE_NAME} — Architettura & Interior Design`,
  description: SITE_DESC,
  ogTitle: `${SITE_NAME} — Architettura & Interior Design`,
  ogDescription: SITE_DESC,
  ogType: 'website',
  ogUrl: SITE_URL,
  ogImage: OG_IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: `${SITE_NAME} — Architettura & Interior Design`,
  twitterDescription: SITE_DESC,
  twitterImage: OG_IMAGE,
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: SITE_URL },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
  meta: [
    { name: 'keywords', content: 'architettura, interior design, ristrutturazioni, Torino, arredi su misura, retail, concorsi' },
  ],
  // JSON-LD con `children` (evita TS error)
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo_black.png`,
        sameAs: [
          'https://www.facebook.com/search/top?q=claudiofava.arch',
          'https://www.instagram.com/claudiofava.arch/',
          'https://www.pinterest.it/cfava1949/'
        ]
      }),
    },
  ] as any,
})
// ---------------------------------------------------------------------------

// plugin injections
const { $emailjs, $gsap } = useNuxtApp()
const gsap = $gsap as any

// registri
const projects = publicProjects()
const articles = publicArticles()

// team
type TeamMember = {
  name: string; role: string; imageSrc: string; imageAlt: string; description: string; linkedinUrl: string
}
const team = ref<TeamMember[]>([
  {
    name: 'Claudio Fava',
    role: 'Architetto',
    imageSrc: '/img/2013-07-16-B-N-low.jpg',
    imageAlt: 'Claudio Fava Foto',
    description:
        'Nasce a Torino nel 1984. Si laurea presso la Facoltà di Architettura del Politecnico di Torino nel 2010, dopo un tirocinio presso lo studio milanese Claudio Bellini Design+Design. Inizia il suo percorso, collaborando con lo Studio Neirotti di Vinovo e lo studio LSB architetti associati per cui lavora in pianta stabile per due anni e dove ha modo di accrescere le proprie conoscenze lavorando su progetti in diversi ambiti. Nel 2014 inizia la sua attività da libero professionista, iniziando importanti collaborazioni con arch. Giorgio Fava, arch. Paolo Neirotti e Sceg Architetti.',
    linkedinUrl: 'https://www.linkedin.com/in/claudio-fava-7ab95015/'
  },
  {
    name: 'Giorgio Fava',
    role: 'Architetto',
    imageSrc: '/img/giocut.jpg',
    imageAlt: 'Giorgio Fava Foto',
    description:
        'Laureato presso la Facoltà di Architettura del Politecnico di Torino, sperimenta esperienze lavorative diverse in ambito teatrale ed artistico presso Teatro Regio di Torino, Steve McCurry Studio di New York, MOdenArte Gallery di Boca Raton, Florida. Dal 2007 lavora in pianta stabile presso Cantieri Navali Sanlorenzo prima come architetto di commessa e dal 2014 come Project Manager per il design di interni di motor yachts dai 30 ai 40 metri.',
    linkedinUrl: 'https://www.linkedin.com/in/giorgio-fava-5730b234/'
  }
])

// transizioni
function beforeEnter(el: Element) {
  (el as HTMLElement).style.opacity = '0'
}
function enter(el: Element, done: () => void) {
  if (import.meta.client && gsap?.to) gsap.to(el, { opacity: 1, duration: 1.2, onComplete: done })
  else { (el as HTMLElement).style.opacity = '1'; done() }
}

// helper
function scrollToId(id: string) {
  if (import.meta.client) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.spacing { padding-bottom: 20px; }
.gallery-wrap { display:flex; flex-direction:row; width:100%; height:70vh; }
.item { flex:1; height:100%; background-position:center; background-size:cover; transition:flex .8s ease; }
.item:hover { flex:7; }
@media (max-width: 736px){
  .gallery-wrap { flex-direction:column; }
}
</style>

