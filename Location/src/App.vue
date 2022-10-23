<script setup>
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import NotFound from './components/NotFound.vue'
import { ref, computed } from 'vue'
const routes = {
  '/': Home,
  '/Register': Register,
  '/non-existent-path': NotFound
}
// location.hash是网页位置的标识符，可读写。比如http://domain/#admin的location.hash="#admin"。
// 指定网页位置的标识符，有两个方法。一是使用锚点，比如<a name="print"></a>，二是使用id属性，比如<div id="print" >。
// 改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页。
// 改变#会改变浏览器的访问历史。"后退""前进"按钮可切换前后位置。
// 当location.hash发生变化时，就会触发onhashchange事件。
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
  console.log(location.hash)
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/Register">Register</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView"></component>
</template>

<style scoped>

</style>
