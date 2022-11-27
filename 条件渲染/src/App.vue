<script setup>
import { ref } from 'vue'
let age = ref(12)
</script>

<template>
  <div class="container">
    <template v-if="age < 14">
      未成年
    </template>
    <template v-else-if="age < 30">
      青年
    </template>
    <template v-else-if="age < 50">
      壮年
    </template>
    <template v-else-if="age < 60">
      中老年
    </template>
    <template v-else>
      老年
    </template>
  </div>
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
