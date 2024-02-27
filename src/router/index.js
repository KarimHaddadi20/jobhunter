import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AnnonceView from '../views/AnnonceView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: HomeView
    },




    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },


    {

      path: '/login',
      name: 'login',
      component: LoginView
    },

    {

      path: '/annonce',
      name: 'annonce',
      component: AnnonceView
    },

  ]
})

export default router

// dans cette page en importe juste les écrans ça veut dire les pages de notre application 
// on n'importe pas les composants ici