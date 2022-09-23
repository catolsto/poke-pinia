import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () =>  import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'acerca',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('@/views/PokemonView.vue')
    },
    {
      path: '/pokemon/:nombre',
      name: 'poke',
      component: () => import('@/views/PokeView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('@/views/FavoritosView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
  },
  
  ]
})

export default router
