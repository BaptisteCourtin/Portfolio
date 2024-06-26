import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ???
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/themes',
      name: 'themes',
      // route level code-splitting
      // this generates a separate chunk (Theme.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/ThemesView.vue')
    },
    {
      path: '/projet/:id',
      name: 'projet',
      component: () => import('./views/ProjetView.vue')
    },
    {
      path: '/parcours',
      name: 'parcours',
      component: () => import('./views/ParcoursView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/BlogView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})

export default router
