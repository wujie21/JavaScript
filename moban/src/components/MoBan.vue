<!-- <script setup>内导入或定义的变量/函数都能够在模板中直接使用 -->
<script setup>
const name = 'wujie'
const rawHtml = `<span style='color:red'>This should be red.</span>`
const dynamicId = '001'
const number = 1
const ok = true
const message = 'Wujie'
const id = '002'
const seen = true
const getTitle = (arg) => {
  return arg + '21'
}
const showInfo = (arg) => {
  return arg + ' is a handsome boy'
}
const doSomething = () => {
  alert('clicked')
}
</script>
<template>
  <!-- 文本插值：双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。 -->
  <span>Name:{{name}}</span>

  <!-- 若想插入 HTML，需要使用 v-html 指令。不推荐使用。 -->
  <!-- span 的内容将会被替换为 rawHtml 属性的值 -->
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- v-bind（简写:):v-bind 指令指示 Vue 将HTML元素的 id attribute 与组件的 dynamicId 属性保持一致。如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除。 -->
  <div v-bind:id="dynamicId"></div>
  <!-- 
    or 
    <div :id="dynamicId"></div>
   -->

  <!-- 在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：
    在文本插值中 (双大括号)
    在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中
   -->
  <span>{{number+1}}</span>
  <span>{{ok?'YES':'NO'}}</span>
  <span>{{message.split('').reverse().join('')}}</span>
  <div :id="`list-${id}`"></div>

  <!-- 可以在绑定的表达式中使用一个组件暴露的方法 -->
  <!-- 绑定在表达式中的方法在组件每次更新时都会被重新调用 -->
  <span :title="getTitle(name)">{{showInfo(name)}}</span>

  <!-- v-if 指令会基于表达式 seen 的值的真假来移除/插入该 <p> 元素 -->
  <p v-if="seen">Now you see me</p>
  <!-- v-on 指令，监听 DOM 事件 -->
  <a v-on:click="doSomething"> ... </a>
  <!-- 简写
  <a @click="doSomething"> ... </a>
  -->

  <!-- v-bind和v-on等指令可使用动态参数，动态参数中表达式的值应当是一个字符串，或者是 null。如：
  <a :[attributeName]="url"> ... </a>
  <a @[eventName]="doSomething">
  -->

  <!-- 修饰符 -->
  <form @submit.prevent="onSubmit">...</form>
</template>

<style scoped>

</style>
