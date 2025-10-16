<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ArrowUpIcon } from '@heroicons/vue/24/outline'
import {defineComponent, h} from "vue";

const currentYear = new Date().getFullYear()

function scrollTop() {
  if (!process.client) return

  // tenta di scorrere verso l'header principale (navbar)
  const header = document.getElementById('menu-principale')

  if (header) {
    header.scrollIntoView({ behavior: 'smooth' })
    return
  }

  // altrimenti, scrolla direttamente in cima alla pagina
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// --- DATI HARD-CODED ---
const COMPANY_NAME = 'Arch. Claudio Fava'
const COMPANY_PIVA = '10620700012'
const COMPANY_ADDRESS = 'Corso Turati 19/b, Torino'
const COMPANY_EMAIL = 'info@favaclaudio.com'
const COMPANY_PHONE = '+39 328 864 8607'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Corso+Turati+19%2Fb%2C+Torino'
const WEBMASTER_NAME = 'WebMaster Gianluca Tiengo'
const WEBMASTER_URL = 'https://gianlucatiengo.com/'

const social = {
  social: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/search/top?q=claudiofava.arch',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6' }, [
              h('path', { d: 'M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0022 12z' })
            ])
      })
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/claudiofava.arch/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6' }, [
              h('path', { d: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6-1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z' })
            ])
      })
    },
    {
      name: 'pinterest',
      href: 'https://www.pinterest.it/cfava1949/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6' }, [
              h('path', { d: 'M12 2a10 10 0 00-3.7 19.3c.1-.9.2-2.2.5-3.2l1.6-6.7s-.4-.8-.4-2c0-1.9 1.1-3.4 2.6-3.4 1.2 0 1.8.9 1.8 2 0 1.2-.8 3.1-1.2 4.8-.3 1.3.7 2.4 2 2.4 2.4 0 4.2-2.6 4.2-6.3 0-2.7-1.9-4.6-5.2-4.6-3.8 0-6.1 2.8-6.1 5.9 0 1.1.4 2.2 1 2.8.1.1.1.2.1.3l-.4 1.6c-.1.2-.2.2-.4.1-1.6-.7-2.6-2.8-2.6-4.6C4 6 7.3 2 12 2z' })
            ])
      })
    }
  ]
}
</script>

<template>
  <footer class="bg-gray-700 text-white" aria-labelledby="footer-heading" id="contatti">
    <h2 id="footer-heading" class="sr-only">footer</h2>

    <div class="mx-auto py-5 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-10">

        <!-- logo -->
        <button
            @click="scrollTop"
            class="mx-auto flex flex-col items-center text-center"
            aria-label="Torna in alto"
        >
          <img
              src="/img/cropped-logo-small.png"
              alt="Logo"
              class="block h-12 w-auto object-contain"
              loading="eager"
              decoding="async"
          />
          <p class="mt-4 hidden md:block text-xs">{{ COMPANY_NAME }}</p>
        </button>


        <!-- address -->
        <a :href="MAPS_URL" target="_blank" rel="noopener" class="text-white hover:text-gray-300 mx-auto text-center">
          <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
            <MapPinIcon class="h-6 w-6" />
          </span>
          <p class="mt-4 hidden md:block text-xs">{{ COMPANY_ADDRESS }}</p>
        </a>

        <!-- email -->
        <a :href="`mailto:${COMPANY_EMAIL}`" class="text-white hover:text-gray-300 mx-auto text-center">
          <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
            <EnvelopeIcon class="h-6 w-6" />
          </span>
          <p class="mt-4 hidden md:block text-xs">{{ COMPANY_EMAIL }}</p>
        </a>

        <!-- phone -->
        <a :href="`tel:${COMPANY_PHONE.replace(/\\s+/g, '')}`" class="text-white hover:text-gray-300 mx-auto text-center">
          <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
            <PhoneIcon class="h-6 w-6" />
          </span>
          <p class="mt-4 hidden md:block text-xs">{{ COMPANY_PHONE }}</p>
        </a>
      </div>

      <!-- social -->
      <div class="flex justify-center space-x-6 mt-5">
        <a
            v-for="s in social.social"
            :key="s.name"
            :href="s.href"
            target="_blank"
            rel="noopener"
            class="hover:text-gray-300 inline-flex items-center"
            :aria-label="s.name"
            :title="s.name"
        >
          <component :is="s.icon" aria-hidden="true" />
          <span class="sr-only">{{ s.name }}</span>
        </a>
      </div>

    </div>

    <div class="mx-auto max-w-7xl px-4 pb-6">
      <p class="text-center text-xs">
        © {{ currentYear }} {{ COMPANY_NAME }} – P.IVA {{ COMPANY_PIVA }}.
        Tutti i diritti riservati.
        <NuxtLink :to="WEBMASTER_URL" class="underline hover:text-gray-300">{{ WEBMASTER_NAME }}</NuxtLink>.
      </p>

      <button
          class="fixed bottom-4 right-4 inline-flex items-center justify-center rounded-full bg-white text-gray-800 p-2 shadow"
          aria-label="Torna all’inizio"
          @click="scrollTop"
      >
        <ArrowUpIcon class="h-6 w-6" />
      </button>
    </div>
  </footer>
</template>

