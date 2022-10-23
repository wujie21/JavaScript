<script setup>
import { reactive, ref, nextTick } from 'vue'
// reactive可以创建深层次的响应式对象或数组。
const state = reactive({ count: 0 })
const increment = () => {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}

const raw = {}
const proxy = reactive(raw)
// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true
// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true
// 依靠深层响应性，响应式对象内的嵌套对象依然是代理
proxy.nested = raw
console.log('proxy.nested === raw:', proxy.nested === raw) // false

/* reactive() API 有两条限制：
 1、仅对对象类型有效（对象、数组和Map、Set这样的集合类型），而对string、number、boolean这样的原始类型无效。
 2、只能直接对该响应式对象操作。将响应式对象的属性赋值或解构至本地变量等操作会失去响应式。
*/

// Vue 提供了一个 ref() 方法来允许我们创建可以使用任何值类型的响应式 ref。
// ref 的 .value 属性也是响应式的。同时，当值为对象类型时，会用 reactive() 自动转换它的 .value。
const v = 1
const obj = { id: 1 }
const vRef = ref(v)
const objRef = ref(obj)
console.log(vRef, objRef)
console.log(vRef.value === v, objRef.value === reactive(obj))   //true true

//ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性
//ref 在模板中作为顶层属性被访问时，会被自动“解包”
//ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，会自动解包:
const refObj = ref(1)
const resObj = reactive({
  refObj
})
console.log(resObj.refObj)

</script>

<template>
  <button @click="increment">{{state.count}}</button>
</template>

<style scoped>

</style>
