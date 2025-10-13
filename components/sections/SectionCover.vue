<script setup lang="ts">
defineProps<{
  img: string
  title: string
  text?: string
  pretitle?: string
  to: string
}>()
</script>

<template>
  <section class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">
        <!-- background image -->
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" :src="img" :alt="title" loading="lazy" />
        </div>

        <!-- overlay bottom-right -->
        <div class="relative min-h-screen px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div
              class="absolute bottom-6 right-4 sm:bottom-10 sm:right-10
                   w-[92%] sm:w-auto
                   max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs"
          >
            <div class="bg-white/50 lg:ml-12 p-2">
              <p v-if="pretitle" class="mt-2 text-sm lg:text-base text-black">{{ pretitle }}</p>
              <p class="pt-1 text-base md:text-lg lg:text-xl text-gray-700 text-left">
                {{ title }}
              </p>
              <p v-if="text" class="mt-2 text-sm lg:text-base text-black">
                {{ text }}
              </p>
              <div class="text-right">
                <NuxtLink
                    :to="to"
                    class="mt-6 mb-2 bg-white/70 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex items-center"
                >
                  <span class="px-1 py-0.5">vai al progetto</span>
                  <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- /overlay -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.spacing { padding-bottom: 20px; }
</style>

