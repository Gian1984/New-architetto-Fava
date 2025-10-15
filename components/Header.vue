<!-- Header.vue -->
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ArrowLeftIcon, HomeIcon, UsersIcon, FolderOpenIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { h, defineComponent, computed } from 'vue'
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isProjects = computed(() => route.path.startsWith('/projects'))
const isPress = computed(() => route.path.toLowerCase().includes('/articles'))

const navigation = {
  social: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/search/top?q=claudiofava.arch',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6', 'aria-hidden': 'true' }, [
              h('path', { d: 'M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0022 12z' })
            ])
      })
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/claudiofava.arch/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6', 'aria-hidden': 'true' }, [
              h('path', { d: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6-1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z' })
            ])
      })
    },
    {
      name: 'pinterest',
      href: 'https://www.pinterest.it/cfava1949/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', class: 'h-6 w-6', 'aria-hidden': 'true' }, [
              h('path', { d: 'M12 2a10 10 0 00-3.7 19.3c.1-.9.2-2.2.5-3.2l1.6-6.7s-.4-.8-.4-2c0-1.9 1.1-3.4 2.6-3.4 1.2 0 1.8.9 1.8 2 0 1.2-.8 3.1-1.2 4.8-.3 1.3.7 2.4 2 2.4 2.4 0 4.2-2.6 4.2-6.3 0-2.7-1.9-4.6-5.2-4.6-3.8 0-6.1 2.8-6.1 5.9 0 1.1.4 2.2 1 2.8.1.1.1.2.1.3l-.4 1.6c-.1.2-.2.2-.4.1-1.6-.7-2.6-2.8-2.6-4.6C4 6 7.3 2 12 2z' })
            ])
      })
    }
  ]
}

function scrollToId(id: string) {
  const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (process.client) {
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
  }
}
function goHomeTop() {
  if (isHome.value) { scrollToId('home'); return }
  navigateTo('/')
}
</script>

<template>
  <!-- skip link -->
  <a href="#contenuto-principale"
     class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 bg-white px-3 py-2 rounded">
    salta al contenuto
  </a>

  <header>
    <Disclosure as="nav" class="bg-white/50 backdrop-blur shadow fixed z-50 w-full" v-slot="{ open }" aria-label="menu principale">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <!-- ADD: relative per poter centrare i social con absolute -->
        <div class="relative flex justify-between h-16">
          <!-- logo -->
          <div class="flex items-center lg:pr-44">
            <button type="button" @click="goHomeTop" class="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded" aria-label="vai alla homepage">
              <img
                  src="/img/logo_black.png"
                  alt="logo claudio fava arch"
                  class="h-8 w-auto lg:h-12 object-contain"
                  loading="eager"
                  decoding="async"
                  width="120"
                  height="48"
              />
            </button>
          </div>

          <!-- SOCIAL DESKTOP: sempre centrati -->
          <div
              class="pointer-events-none hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-label="social"
              role="group"
          >
            <div class="pointer-events-auto flex items-center justify-center space-x-6">
              <a
                  v-for="item in navigation.social"
                  :key="item.name"
                  :href="item.href"
                  target="_blank"
                  rel="noopener"
                  class="text-gray-900 hover:text-gray-500 rounded p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  :aria-label="`apri ${item.name} in nuova scheda`"
              >
                <component :is="item.icon" />
              </a>
            </div>
          </div>

          <!-- right side (desktop) -->
          <div class="hidden sm:ml-12 sm:flex sm:items-center sm:space-x-8" role="navigation" aria-label="sezioni pagina">
            <template v-if="isHome">
              <!-- usa anchor reali + scroll programmato per semantica link -->
              <a href="#home"
                 @click.prevent="scrollToId('home')"
                 class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                home
              </a>
              <a href="#profilo"
                 @click.prevent="scrollToId('profilo')"
                 class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                chi siamo
              </a>
              <a href="#progetti"
                 @click.prevent="scrollToId('progetti')"
                 class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                progetti
              </a>
              <a href="#press"
                 @click.prevent="scrollToId('press')"
                 class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                press
              </a>
              <a href="#formCont"
                 @click.prevent="scrollToId('formCont')"
                 class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                contatti
              </a>
            </template>
            <template v-else>
              <NuxtLink :to="isPress ? '/#press' : '/#progetti'"
                        class="inline-flex items-center p-2 text-black hover:text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="torna indietro">
                <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">indietro</span>
              </NuxtLink>
            </template>
          </div>

          <!-- mobile menu button -->
          <div class="-mr-2 flex items-center sm:hidden">
            <DisclosureButton
                v-if="isHome"
                id="toggle-menu-mobile"
                class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
                :aria-controls="'mobile-menu'"
                :aria-label="open ? 'chiudi menu' : 'apri menu'"
            >
              <span class="sr-only">Open main menu</span>
              <span v-if="!open" class="block h-8 w-8 focus:outline-none active:bg-transparent"  aria-hidden="true">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64">
                  <g id="Layer_47" data-name="Layer 47">
                    <path d="M12,20.84H32a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,12,20.84Z"/>
                    <path d="M53.5,32A1.5,1.5,0,0,0,52,30.5H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,32Z"/>
                    <path d="M52,43.16H32a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,43.16Z"/>
                  </g>
              </svg>
            </span>
              <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
            </DisclosureButton>

            <NuxtLink
                v-else
                :to="isProjects ? '/#progetti' : isPress ? '/#press' : '/#progetti'"
                class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
                aria-label="torna indietro"
            >
              <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
              <span class="sr-only">indietro</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- mobile panel -->
      <DisclosurePanel class="sm:hidden" :id="'mobile-menu'" role="region" aria-label="menu mobile">
        <div class="bg-white/75 shadow">
          <a href="#home" @click.prevent="scrollToId('home')"
             class="w-full text-black flex items-center gap-2 px-4 py-3 border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black">
            <HomeIcon class="h-6 w-6" aria-hidden="true" /> <span>home</span>
          </a>
          <a href="#profilo" @click.prevent="scrollToId('profilo')"
             class="w-full text-black flex items-center gap-2 px-4 py-3 border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black">
            <UsersIcon class="h-6 w-6" aria-hidden="true" /> <span>chi siamo</span>
          </a>
          <a href="#progetti" @click.prevent="scrollToId('progetti')"
             class="w-full text-black flex items-center gap-2 px-4 py-3 border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black">
            <FolderOpenIcon class="h-6 w-6" aria-hidden="true" /> <span>progetti</span>
          </a>
          <a href="#press" @click.prevent="scrollToId('press')"
             class="w-full text-black flex items-center gap-2 px-4 py-3 border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black">
            <FolderOpenIcon class="h-6 w-6" aria-hidden="true" /> <span>press</span>
          </a>
          <a href="#formCont" @click.prevent="scrollToId('formCont')"
             class="w-full text-black flex items-center gap-2 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black">
            <ChatBubbleLeftIcon class="h-6 w-6" aria-hidden="true" /> <span>contatti</span>
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<style scoped>
/* piccoli reset per i bottoni del menu mobile */
button:focus { outline: none }

/* assicura area clic sufficiente su icone e link */
a, button { min-height: 44px; }

/* helper sr-only (tailwind di solito lo fornisce, qui per sicurezza) */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>

