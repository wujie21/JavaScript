// 分别暴露。
export let obj={
  name:"wujie"
}

export const FunA=()=>{
  return "Hello"
}


/* 
通用引入
import * as ex from './js/export.js' 
console.log(ex.obj.name) 

解构引入
import {obj,fuc}from './js/export.js'
*/