import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Page d acceuil - GMS57',
        description: 'page d acceuil de gms57'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'à propos - GMS57',
        description: 'informations de gms57'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: 'Services - GMS57',
        description: 'liste des services de gms57'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact - GMS57',
        description: 'page de contact e gms57'
      }
    }
  ],
   scrollBehavior() {
  return { top: 0 }
}
})
// Mise à jour des meta tags pour chaque route
router.beforeEach((to, _ , next) => {
  document.title = to.meta.title as string || 'Votre Site'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '')
  }
  next()
})
export default router