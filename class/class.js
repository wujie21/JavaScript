class Animal {
  /* 定义在原型对象的方法。必填，通过new命令生成对象实例时，自动调用此方法。 */
  constructor(name, age) {
    /* 此函数默认返回this，所以可以通过this指定实例属性和方法 */
    this.name = name;
    this.age = age;
  }
  /* 定义在原型对象的方法 */
  showInfo() {
    /* this指向调用该方法的对象 */
    console.log(this);
  }
  /* 定义类对象的属性和方法 */
  static showClass() {
    /* this指向类对象自身 */
    return this
  }
}
let A = new Animal("cat", 1);   //调用Animal.prototype.constructor，默认返回this
console.log(A.__proto__.hasOwnProperty("showInfo"))   //true
console.log(Animal.hasOwnProperty("showClass"))   //true
console.log(Animal.showClass()===Animal)    //true
console.log(Object.getPrototypeOf(A))