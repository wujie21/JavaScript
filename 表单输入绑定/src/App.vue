<script setup>
import Register from './components/Register.vue'
</script>
<!-- 
  结合事件模型：
  e.target：触发事件的目标元素
  e.currentTarget：触发事件的当前元素
-->
<template>
  <div class="container">
    <Register></Register>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
  color: black;
}
</style>