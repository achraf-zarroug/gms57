<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-5xl font-bold text-black text-center mb-12">À Propos de <span class="text-red-500">GMS57</span></h1>
        
        <!-- Enhanced hero section with garage image and detailed description -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-semibold mb-6 text-red-500">Votre Garage de Confiance</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Depuis plus de 10 ans, <strong class="text-black">GMS57 - Groupe Motors Sport</strong> s'est imposé comme une référence dans l'entretien et la réparation automobile. Notre garage moderne, équipé des dernières technologies de diagnostic, vous garantit un service professionnel pour tous types de véhicules.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Spécialisés dans la mécanique générale, l'électronique automobile et l'optimisation moteur, nous intervenons sur toutes marques avec la même exigence de qualité. Notre passion pour l'automobile nous pousse à nous former continuellement aux nouvelles technologies.
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span class="text-gray-600">Certification professionnelle et formation continue</span>
            </div>
          </div>
          <div class="relative">
            <img 
              src="/images/maher1.jpg" 
              alt="Atelier GMS57 - Garage moderne équipé"
              class="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>

        <!-- Added team section with mechanic profiles -->
        <div class="mb-20">
          <h2 class="text-4xl font-bold text-black text-center mb-12">Notre <span class="text-red-500">Équipe</span></h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-500 transition-colors">
              <img 
                src="/images/maher1.jpg" 
                alt="Chef mécanicien"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 class="text-xl font-semibold text-center mb-2">Mohamed Salah</h3>
              <p class="text-red-500 text-center mb-3">Chef Mécanicien</p>
              <p class="text-gray-400 text-sm text-center">15 ans d'expérience en mécanique générale et diagnostic électronique</p>
            </div>
            
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-500 transition-colors">
              <img 
                src="/images/maher1.jpg" 
                alt="Spécialiste moteur"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 class="text-xl font-semibold text-center mb-2">Ahmed Ben Ali</h3>
              <p class="text-red-500 text-center mb-3">Spécialiste Moteur</p>
              <p class="text-gray-400 text-sm text-center">Expert en optimisation et réparation moteur, toutes marques</p>
            </div>
            
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-500 transition-colors">
              <img 
                src="/images/maher1.jpg" 
                alt="Technicien électronique"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 class="text-xl font-semibold text-center mb-2">Karim Trabelsi</h3>
              <p class="text-red-500 text-center mb-3">Technicien Électronique</p>
              <p class="text-gray-400 text-sm text-center">Spécialisé en diagnostic électronique et systèmes embarqués</p>
            </div>
          </div>
        </div>

        <!-- Added equipment and facilities section -->
        <div class="mb-20">
          <h2 class="text-4xl font-bold text-black text-center mb-12">Nos <span class="text-red-500">Équipements</span></h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <img 
                src="/images/maher1.jpg" 
                alt="Équipement de diagnostic"
                class="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold mb-3 text-red-500">Diagnostic de Pointe</h3>
              <p class="text-gray-300">Équipements de diagnostic dernière génération pour identifier précisément les pannes sur tous types de véhicules.</p>
            </div>
            
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <img 
                src="/images/maher1.jpg" 
                alt="Pont élévateur professionnel"
                class="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold mb-3 text-red-500">Atelier Moderne</h3>
              <p class="text-gray-300">Ponts élévateurs professionnels et outillage spécialisé pour intervenir en toute sécurité sur votre véhicule.</p>
            </div>
          </div>
        </div>

        <!-- Enhanced statistics section with better styling -->
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 class="text-3xl font-bold text-center mb-8">GMS57 en <span class="text-red-500">Chiffres</span></h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold text-red-500 mb-2">12+</div>
              <p class="text-gray-400 font-medium">Années d'expérience</p>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-red-500 mb-2">1500+</div>
              <p class="text-gray-400 font-medium">Véhicules réparés</p>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-red-500 mb-2">98%</div>
              <p class="text-gray-400 font-medium">Satisfaction client</p>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-red-500 mb-2">24h</div>
              <p class="text-gray-400 font-medium">Service dépannage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
