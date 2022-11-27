<script setup>
import { ref } from 'vue'
import { nanoid } from 'nanoid'
/* 列表渲染：尽量使用数组（对象数组很够用）；给每个数组项指定一个唯一id，作为:key绑定值 */
let arr = ref([
  { uuid: nanoid(), name: 'wujie', age: 12, sex: 'male', },
  { uuid: nanoid(), name: 'yumw', age: 12, sex: 'female', }
])
</script>

<template>
  <div class="container">
    <template v-for="(item, index) in arr" :key="item.uuid">
      {{ index + 1 }} my name is {{ item.name }}, I'm {{ item.age }} years old.<br>
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
