<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ArrowLeftIcon, HomeIcon, UsersIcon, FolderOpenIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { h, defineComponent } from 'vue'
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

function scrollToId(id: string) {
  if (process.client) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
function goHomeTop() {
  if (isHome.value) { scrollToId('home'); return }
  navigateTo('/')
}
</script>

<template>
  <Disclosure as="nav" class="bg-white/50 backdrop-blur shadow fixed z-50 w-full" v-slot="{ open }">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ADD: relative per poter centrare i social con absolute -->
      <div class="relative flex justify-between h-16">
        <!-- logo -->
        <div class="flex items-center lg:pr-44">
          <button @click="goHomeTop" class="flex items-center" aria-label="Vai alla homepage">
            <img
                src="/img/logo_black.png"
                alt="Logo"
                class="h-8 w-auto lg:h-12 object-contain"
                loading="eager"
                decoding="async"
            />
          </button>
        </div>

        <!-- SOCIAL DESKTOP: sempre centrati -->
        <div
            class="pointer-events-none hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="social"
        >
          <div class="pointer-events-auto flex items-center justify-center space-x-6">
            <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
                target="_blank"
                rel="noopener"
                class="text-gray-900 hover:text-gray-500"
                :aria-label="item.name"
            >
              <component :is="item.icon" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- right side (desktop) -->
        <div class="hidden sm:ml-12 sm:flex sm:items-center sm:space-x-8">
          <template v-if="isHome">
            <button class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium" @click="scrollToId('home')">home</button>
            <button class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium" @click="scrollToId('profilo')">chi siamo</button>
            <button class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium" @click="scrollToId('progetti')">progetti</button>
            <button class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium" @click="scrollToId('press')">press</button>
            <button class="border-transparent text-black hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-xs font-medium" @click="scrollToId('formCont')">contatti</button>
          </template>
          <template v-else>
            <NuxtLink :to="isPress ? '/#press' : '/#progetti'" class="inline-flex items-center p-2 text-black hover:text-gray-500">
              <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
              <span class="sr-only">back</span>
            </NuxtLink>
          </template>
        </div>

        <!-- mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
              v-if="isHome"
              id="close"
              class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span class="sr-only">open main menu</span>
            <Bars3Icon v-if="!open" class="h-8 w-8" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>

          <NuxtLink
              v-else
              :to="isProjects ? '/#progetti' : isPress ? '/#press' : '/#progetti'"
              class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span class="sr-only">back</span>
            <ArrowLeftIcon class="h-6 w-6" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- mobile panel -->
    <DisclosurePanel class="sm:hidden">
      <div class="bg-white/75 shadow">
        <button @click="scrollToId('home')" class="w-full text-black flex items-center gap-2 px-4 py-2 border-b">
          <HomeIcon class="h-6 w-6" /> <span>home</span>
        </button>
        <button @click="scrollToId('profilo')" class="w-full text-black flex items-center gap-2 px-4 py-2 border-b">
          <UsersIcon class="h-6 w-6" /> <span>chi siamo</span>
        </button>
        <button @click="scrollToId('progetti')" class="w-full text-black flex items-center gap-2 px-4 py-2 border-b">
          <FolderOpenIcon class="h-6 w-6" /> <span>progetti</span>
        </button>
        <button @click="scrollToId('press')" class="w-full text-black flex items-center gap-2 px-4 py-2 border-b">
          <FolderOpenIcon class="h-6 w-6" /> <span>press</span>
        </button>
        <button @click="scrollToId('formCont')" class="w-full text-black flex items-center gap-2 px-4 py-2">
          <ChatBubbleLeftIcon class="h-6 w-6" /> <span>contatti</span>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
/* piccoli reset per i bottoni del menu mobile */
button:focus { outline: none }
</style>
