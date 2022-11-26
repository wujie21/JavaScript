<script setup>
import { ref, reactive } from 'vue'
const classObj = reactive({
  container: true,
  border: true
})
const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})
</script>

<template>
  <div :class="classObj">
    <div :style="styleObject">wujie is a handsome boy!</div>
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

.border {
  border: 1px solid silver;
  border-radius: 5px;
}
</style>
