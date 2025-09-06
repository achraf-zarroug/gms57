<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-black text-center mb-12">Contactez <span class="text-red-500">GMS57</span></h1>
      
      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-gray-900 p-8 rounded-lg">
          <h2 class="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">Nom complet</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none">
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input v-model="form.email" type="email" required class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none">
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea v-model="form.message" required rows="5" class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none resize-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Envoyer le message
            </button>
          </form>
          
          <!-- WhatsApp Button -->
          <div class="mt-8 pt-8 border-t border-gray-800">
            <a href="https://wa.me/216XXXXXXXX" target="_blank" class="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-gray-900 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Informations de contact</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>06 95 29 90 64</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>gms57000@gmail.com</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>17 Rue de la Patrotte, METZ 57050</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span class="text-red-500">09h00 - 19h00</span>
              </div>
              <div class="flex justify-between">
                <span>Samedi</span>
                <span class="text-red-500">09h00 - 14h00</span>
              </div>
              <div class="flex justify-between">
                <span>Dimanche</span>
                <span class="text-gray-500">Fermé</span>
              </div>
            </div>
          </div>

       <!-- Google Maps -->
<div class="bg-gray-800 rounded-lg overflow-hidden">
  <div class="relative w-full h-64 sm:h-80 lg:h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d167072.3729930599!2d5.8882856!3d49.1340198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794df23e950ddb1%3A0x5f90f79997a343e9!2sGMS%2057%20GROUP%20MOTORS%20SPORT!5e0!3m2!1sen!2stn!4v1757179495096!5m2!1sen!2stn"
      class="absolute inset-0 w-full h-full border-0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>


        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default{
name: 'Contact',
setup(){
const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert('Message envoyé avec succès!')
  form.value = { name: '', email: '', message: '' }
}
return{
    form,submitForm
}
}
}

</script>
