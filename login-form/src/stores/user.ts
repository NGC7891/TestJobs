import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(localStorage.getItem('user') || '')

  const setUser = (name: string) => {
    user.value = name
    localStorage.setItem('user', name)
  }

  const getUser = () => user.value

  const clearUser = () => {
    user.value = ''
    localStorage.removeItem('user')
  }

  const isLogined = computed(() => user.value.length > 0)

  return {
    getUser,
    setUser,
    clearUser,
    isLogined,
  }
})
