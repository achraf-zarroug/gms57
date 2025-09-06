<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterShow from './components/FooterShow.vue';
import HeaderShow from './components/HeaderShow.vue';
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <HeaderShow />
    <main>
      <RouterView />
    </main>
    <FooterShow />
  </div>
</template>

<style scoped>

</style>
