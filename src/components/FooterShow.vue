<template>
  <footer class="bg-black border-t border-gray-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="text-2xl font-bold text-red-500 mb-4">
            <img 
  src="/images/log1.png" 
  alt="GMS57 - Groupe Motors Sport" 
  class="h-10 md:h-14 lg:h-16 w-auto"
/>
          </div>
          <p class="text-gray-400">Votre garage de confiance pour l'entretien et la performance de tous types de véhicules.</p>
        </div>
       <div>
  <h4 class="text-lg font-semibold mb-4 text-white">Contact</h4>
  <div class="space-y-3 text-gray-400">

    <!-- Téléphone -->
    <a href="tel:0695299064" class="flex items-center gap-3 hover:text-white transition-colors">
      <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.036 3.11a1 1 0 01-.272 1.06l-2.2 2.2a16.001 16.001 0 006.586 6.586l2.2-2.2a1 1 0 011.06-.272l3.11 1.036a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>06 95 29 90 64</span>
    </a>

    <!-- Email (icône corrigée) -->
    <a href="mailto:gms57000@gmail.com" class="flex items-center gap-3 hover:text-white transition-colors">
      <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <!-- Heroicons: Mail -->
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span>gms57000@gmail.com</span>
    </a>

    <!-- Adresse (icône corrigée) -->
    <a
      href="https://maps.app.goo.gl/68iL1AK3g4Xwabuk8"
      target="_blank" rel="noopener"
      class="flex items-start gap-3 hover:text-white transition-colors"
    >
      <svg class="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <!-- Heroicons: Location Marker -->
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.243-4.243a8 8 0 1110.607 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>17 Rue de la Patrotte, METZ 57050</span>
    </a>

  </div>
</div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Suivez-nous</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">Facebook</a>
            <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">Instagram</a>
            <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 GMS57 - Groupe Motors Sport. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
export default{
  name: 'FooterShow',
  setup(){

    return{}
  }
}
</script>
