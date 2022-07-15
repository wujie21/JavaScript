/* 私有属性和方法：# */
class demo{
  /* 私有属性和方法只能在类的内部使用obj.#prop。在类的外部，obj.#prop一律报错。 */
  #value=0
  #inner(){
    console.log("used only in class")
  }
  showValue(){
    console.log(this.#value)
    this.#inner()
  }
}
let d=new demo()
d.showValue()

/* in操作符 */
class C {
  #brand;
  static isC(obj) {
    if (#brand in obj) {
      // 私有属性 #brand 存在
      return true;
    } else {
      // 私有属性 #foo 不存在
      return false;
    }
  }
}
