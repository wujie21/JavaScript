// 默认暴露
export default{
  obj:{
    name:"wujie"
  },
  
  FunA:()=>{
    return "Hello"
  }
}

/* 
通用引入
import * as ex from './js/export.js' 
console.log(ex.default.obj.name) 

解构引入
import {default as ex} from './js/export.js' 
console.log(ex.obj.name)

简写形式（推荐）
import ex from './js/export.js'  
console.log(ex.obj.name)
 */