<template>
  <div class="error-popup">
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: String,
})
</script>

<style scoped>
.error-popup {
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: x-large;
}
</style>
