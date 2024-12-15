<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <h2 class="form-title">{{ title }}</h2>
    <div class="input-group">
      <input
        v-model.trim="userName"
        type="text"
        class="form-input"
        placeholder="Имя"
      />
      <button type="submit" class="submit-button">Войти</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface EmitsType {
  (e: 'submit', username: string): void
}

const emit = defineEmits<EmitsType>()

const userName = ref('')

defineProps({
  title: String,
  default: null,
})

const handleSubmit = () => emit('submit', userName.value)
</script>

<style scoped>
.login-form {
  max-width: 400px;
  max-height: 140px;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.537);
  color: var(--background-color);
  border-radius: var(--spacing-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-md);
}

.input-group {
  width: 100%;
  display: flex;
  gap: var(--spacing-sm);
}

.form-title {
  width: 100%;
  font-size: large;
  letter-spacing: 0.1rem;
}

.form-input {
  width: 100%;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-xs);
}

.submit-button {
  width: 100%;
  max-width: 120px;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-sm);
  background-color: rgb(230, 102, 51);
  border: 2px solid transparent;
  transition: border-color var(--transition-duration) var(--transition-timing);
  color: var(--text-color);
  font-size: large;
  font-weight: bold;
  letter-spacing: 0.1rem;
}
.submit-button:hover {
  border: 2px solid var(--secondary-color);
}
</style>
