<script setup>
const test1 = (e) => {
  console.log(e.target)
}
const test2 = (msg, e) => {
  console.log(msg, e)
}
</script>

<template>
  <div class="container">
    <!-- 方法事件处理器会自动接收原生 DOM 事件并触发执行 -->
    <div class="procedure" @click="test1">方法事件处理器</div>
    <br />
    <!-- 使用 $event 变量传入原生 DOM 事件-->
    <div class="jsexp" @click="test2('test2', $event)">内联事件处理器</div>
  </div>
  <!-- 
    事件修饰符
    按键修饰符
    鼠标修饰符
    https://cn.vuejs.org/api/built-in-directives.html#v-on
    https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers
   -->
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: antiquewhite;
  color: black;
  /*   background-image: url(https://tse3-mm.cn.bing.net/th/id/OIP-C.QnObsMl_X8Ij4K1Bi8f_DwHaNJ?w=170&h=303&c=7&r=0&o=5&dpr=2&pid=1.7);
  background-size: 100vw 100vh; */
}

.procedure,
.jsexp {
  width: 50vw;
  height: 30vh;
  background-color: red;
}
</style>
