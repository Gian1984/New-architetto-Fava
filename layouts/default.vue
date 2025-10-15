<template>
  <div>
    <Header />

    <main
        id="contenuto-principale"
        tabindex="-1"
        role="main"
        aria-label="Contenuto principale del sito Claudio Fava Architetto"
    >
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>