<template>
  <div class="welcome" ref="welcomeRef">
    <aside class="group-user">
      <span class="login-text">Добрый день {{ user }}</span>
      <button @click="handlerLogout" class="logout-button">Выйти</button>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useAnimations } from '@/composables/useAnimations'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { onMounted, ref } from 'vue'

const user = ref('')
const welcomeRef = ref<HTMLElement | null>(null)
const { clearUser, getUser } = useUserStore()
const { slideOutToRight } = useAnimations()

const handlerLogout = () => {
  clearUser()
  router.push({
    name: 'login',
  })
}

onMounted(() => {
  user.value = getUser()
  if (welcomeRef.value) slideOutToRight(welcomeRef.value, { duration: 0.5 })
})
</script>

<style scoped>
.group-user {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 24px;
  background-color: black;
  color: white;
}

.login-text {
  font-size: x-large;
}

.logout-button {
  width: 64px;
  height: 64px;
  padding: var(--spacing-xs);
  border-radius: 50%;
  color: white;
  background-color: rgb(96, 5, 69);
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color var(--transition-duration) var(--transition-timing);
}

.logout-button:hover {
  border: 2px solid var(--secondary-color);
}
</style>
