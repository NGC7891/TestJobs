import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
    },
    // Для 404 урлов
    {
      path: '/:pathMatch(.*)*',
      name: 'Oops',
      component: () => import('@/views/OopsView.vue'),
    },
  ],
})

// Юзаем пинью
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.name === 'welcome' && !userStore.isLogined) {
    next({ name: 'login' })
  } else if (to.name === 'home' && userStore.isLogined) {
    next({ name: 'welcome' })
  } else {
    next()
  }
})

export default router
