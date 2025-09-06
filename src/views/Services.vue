<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-black text-center mb-16">Nos <span class="text-[#e50914]">Services</span></h1>
      
      <!-- Modern card grid with images instead of emojis -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        <!-- Service Card 1: Entretien & Révision -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/entretien-voiture.jpg" 
                 alt="Entretien & Révision" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Entretien & Révision</h3>
            <p class="text-gray-300 leading-relaxed">Maintenance préventive complète, vidanges, changement de filtres et révisions périodiques pour prolonger la vie de votre véhicule.</p>
          </div>
        </div>

        <!-- Service Card 2: Mécanique & Electronique -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Mécanique & Electronique.jpg" 
                 alt="Mécanique & Electronique" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Mécanique & Electronique</h3>
            <p class="text-gray-300 leading-relaxed">Réparations mécaniques et électroniques avancées, systèmes de freinage, transmission et composants électroniques.</p>
          </div>
        </div>

        <!-- Service Card 3: Diagnostic & Optimisation moteur -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Diagnostic & Optimisation moteur.jpeg" 
                 alt="Diagnostic & Optimisation moteur" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Diagnostic & Optimisation moteur</h3>
            <p class="text-gray-300 leading-relaxed">Diagnostic électronique complet, optimisation des performances moteur et reprogrammation pour améliorer les performances.</p>
          </div>
        </div>

        <!-- Service Card 4: Carrosserie & Pneumatique -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Carrosserie & Pneumatique.jpg" 
                 alt="Carrosserie & Pneumatique" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Carrosserie & Pneumatique</h3>
            <p class="text-gray-300 leading-relaxed">Services de carrosserie, peinture, montage et équilibrage de pneumatiques, géométrie et parallélisme.</p>
          </div>
        </div>

        <!-- Service Card 5: Électricité auto -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Électricité auto.jpeg" 
                 alt="Électricité auto" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Électricité auto</h3>
            <p class="text-gray-300 leading-relaxed">Installation et réparation de systèmes électriques, alternateurs, démarreurs, éclairage et systèmes de charge.</p>
          </div>
        </div>

        <!-- Service Card 6: Dépannage -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#e50914] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e50914]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/maher1.jpg" 
                 alt="Dépannage" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#e50914] transition-colors">Dépannage</h3>
            <p class="text-gray-300 leading-relaxed">Service de dépannage d'urgence 24h/7j, remorquage et assistance routière pour vous sortir de toute situation.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

