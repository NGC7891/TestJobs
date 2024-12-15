<template>
  <section class="login-page">
    <aside class="login-form" ref="loginFormRef">
      <login-form title="Введите имя" @submit="handleSuccess" />
    </aside>

    <aside class="error-popup" ref="errorPopupRef">
      <error-popup v-if="showError" :message="errorMessagePopup" />
    </aside>
  </section>
</template>

<script setup lang="ts">
import LoginForm from '@/components/form/LoginForm.vue'
import ErrorPopup from '@/components/popup/ErrorPopup.vue'
import { useAnimations } from '@/composables/useAnimations'
import { useValidate } from '@/composables/useValidate'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { onMounted, ref } from 'vue'

const showError = ref(false)
const errorMessagePopup = ref('')

const loginFormRef = ref<HTMLElement | null>(null)
const errorPopupRef = ref<HTMLElement | null>(null)

const { validateLength } = useValidate()
const { fadeInBottom, showPopupAnimation, slideOutToLeft } = useAnimations()
const { setUser, isLogined } = useUserStore()

const handleSuccess = async (username: string) => {
  const { isValid, errorMessage } = validateLength(username)

  if (isValid && loginFormRef.value) {
    setUser(username)
    await slideOutToLeft(loginFormRef.value, { duration: 0.5 })

    router.push({
      name: 'welcome',
    })
  } else {
    errorMessagePopup.value = errorMessage || 'Какая то ошибка'
    showError.value = true
    if (errorPopupRef.value)
      showPopupAnimation(errorPopupRef.value, {
        duration: 1,
        onComplate() {
          showError.value = false
        },
      })
  }
}

onMounted(() => {
  if (isLogined) {
    router.push({
      name: 'welcome',
    })
  } else {
    if (loginFormRef.value) fadeInBottom(loginFormRef.value, { duration: 1 })
  }
})
</script>

<style scoped>
.login-page {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.login-form {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-popup {
  position: absolute;
  width: 100vw;
  bottom: 0px;
}
</style>
