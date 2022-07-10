/*
https://juejin.cn/post/7018181022760042504
https://juejin.cn/post/6844903635868975111
*/

/*
for(const key in object){
  ...
}
遍历对象自身与原型上可枚举的、非Symbol属性key。遍历顺序不确定。
let obj={
  name:'wujie',
  age:17,
  sex:'man'
}
let prototype={
  class:'human',
  say(){
  }
}
Object.setPrototypeOf(obj,prototype)  //设置obj原型对象为prototype
for(const key in obj){
  console.log(key,obj[key])
}
*/

/*
for(const item of Iterable){
  ...
}
遍历可迭代对象
*/