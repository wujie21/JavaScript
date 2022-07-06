let obj={
  name:"wujie"
}

const FunA=()=>{
  return "Hello"
}

// 统一暴露。推荐。
export{
  obj,
  FunA,
}


/* 
通用引入
import * as ex from './js/export.js' 
console.log(ex.obj.name) 

解构引入
import { obj,fuc}from './js/export.js'
*/