class Animal {
  /* 定义实例的属性和方法 */
  constructor(name, age) {
    /* this指向实例 */
    this.name = name;
    this.age = age;
  }
  /* 定义原型对象的属性和方法 */
  showInfo() {
    /* this指向调用该方法的对象 */
    console.log(this);
  }
  /* 定义类对象的属性和方法 */
  static showClass() {
    /* this指向 */
    return this;
  }
}
let A = new Animal("cat", 1);
console.log(A.hasOwnProperty("showInfo"))   //false
console.log(Animal.hasOwnProperty("showClass"))   //true
console.log(Animal.showClass()===Animal)    //true