// 一个数据结构只要具有 Symbol.iterator 属性，就可以认为是"可遍历的"（iterable）。
// 迭代器Iterator，其实就是一个具有 next() 方法的对象。
function createIterator(items){
  let i=0;
  return{
    next(){
      let done=i>=items.length
      let value=!done?items[i++]:undefined
      // next方法必须返回如下对象
      return{
        done:done,  //是否迭代完成
        value:value //当前值
      }
    }
  }
}
//iterator就是迭代器对象
let iterator=createIterator([1,2,1])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

let obj={}
// Symbol.iterator属性指向一个函数，该函数返回一个迭代器对象。
obj[Symbol.iterator]=function(){
  return createIterator([1,2,1])
}
for(const item of obj){
  console.log(item)
}

//ES6为 Array，Map，Set，String，TypedArray，arguments等默认部署了Symbol.iterator属性。所以它们是可迭代对象。