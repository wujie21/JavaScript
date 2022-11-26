<script setup>
import { ref, computed } from 'vue'
let first_name = ref('wu')
let last_name = ref('jie')
let full_name = computed(() => {
  return first_name.value + last_name.value
})
</script>

<template>
  <div class="container">{{ full_name }}</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  color: black;
  /*   background-image: url(https://tse3-mm.cn.bing.net/th/id/OIP-C.QnObsMl_X8Ij4K1Bi8f_DwHaNJ?w=170&h=303&c=7&r=0&o=5&dpr=2&pid=1.7);
  background-size: 100vw 100vh; */
}
</style>
