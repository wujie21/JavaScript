<script setup>
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import { ref, provide } from 'vue'
const selected = ref(false)
function updateSelected() {
  selected.value = true
}
provide('selected', { selected, updateSelected })
</script>

<template>
  <template v-if="!selected">
    <Home></Home>
  </template>
  <template v-else>
    <Register></Register>
  </template>
</template>

<style scoped>

</style>
