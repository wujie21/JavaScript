class IncreasingCounter {
  /* 实例属性新写法：定义在类内部的最顶层（事实上，可以写在任意位置） */
  _count = 0;
  increment() {
    this._count++;
  }
  /* 对某个属性设置存值函数和取值函数，拦截该属性的存取行为。 */
  get prop(){
    console.log("getted")
    return this._count
  }
  set prop(value){
    console.log("setted")
    this._count=value
  }
}
let i=new IncreasingCounter()
console.log(i.hasOwnProperty("_count")) //true
console.log(IncreasingCounter.prototype.hasOwnProperty("prop")) //true
console.log(Object.getOwnPropertyDescriptor(IncreasingCounter.prototype,"prop"))
console.log(i.prop)
i.prop=2