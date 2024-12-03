import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import UploadView from '../views/UploadView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

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
      component: SignupView,
      meta: { 
              hideNav: true ,
              bGray: true
            }  
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { 
              hideNav: true ,
              bGray: true
            } 
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
