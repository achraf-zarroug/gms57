<template>
  <header class="bg-black border-b border-gray-800 sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-2xl font-bold text-red-500">
          <img 
  src="/images/log1.png" 
  alt="GMS57 - Groupe Motors Sport" 
  class="h-10 md:h-14 lg:h-16 w-auto"
/>

        </router-link>
        <nav class="hidden md:flex space-x-8 items-center">
          <router-link 
            to="/" 
            class="transition-colors"
            :class="$route.name === 'Home' ? 'text-red-500' : 'text-white hover:text-red-500'"
          >
            Accueil
          </router-link>
          <router-link 
            to="/about" 
            class="transition-colors"
            :class="$route.name === 'About' ? 'text-red-500' : 'text-white hover:text-red-500'"
          >
            À propos
          </router-link>
          <router-link 
            to="/services" 
            class="transition-colors"
            :class="$route.name === 'Services' ? 'text-red-500' : 'text-white hover:text-red-500'"
          >
            Services
          </router-link>
          <router-link 
            to="/contact" 
            class="transition-colors"
            :class="$route.name === 'Contact' ? 'text-red-500' : 'text-white hover:text-red-500'"
          >
            Contact
          </router-link>
          <a 
            href="https://wa.me/33695299064" 
            target="_blank" 
            class="ml-4 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Devis gratuit
          </a>
        </nav>
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-800">
        <nav class="flex flex-col space-y-2 mt-4">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Home' ? 'text-red-500' : 'text-white'" 
            class="text-left py-2"
          >
            Accueil
          </router-link>
          <router-link 
            to="/about" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'About' ? 'text-red-500' : 'text-white'" 
            class="text-left py-2"
          >
            À propos
          </router-link>
          <router-link 
            to="/services" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Services' ? 'text-red-500' : 'text-white'" 
            class="text-left py-2"
          >
            Services
          </router-link>
          <router-link 
            to="/contact" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Contact' ? 'text-red-500' : 'text-white'" 
            class="text-left py-2"
          >
            Contact
          </router-link>
          <a 
            href="https://wa.me/33695299064" 
            target="_blank" 
            class="inline-flex items-center justify-center mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            Devis gratuit
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
export default{
  name: 'HeaderShow',
  setup(){
const mobileMenuOpen = ref(false)

    return{mobileMenuOpen}
  }
}
</script>
