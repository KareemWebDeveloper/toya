<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import sidebar from '@/components/sidebar.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <header>
    <sidebar />
    <RouterView />
    <Footer />
  </header>

</template>

<style>

</style>

