#响应式原理：
let proxy = new Proxy(target,handler)
handler={
  get(target,propName){
  /*...*/
  return Reflect.get(target,propName)
  }
  set(target,propName,newVal){
  /*更新页面*/
  return Reflect.set(target,propName,newVal)
  }
  deletePropeety(target,propName){
  /*更新页面*/
  return Reflect.deleteProperty(target,propName)
  }
}