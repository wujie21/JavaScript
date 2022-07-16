class Person {
  constructor() {
    this.id = "001";
    this.name = "wujie";
  }
  showThis() {
    console.log(this);
  }
  static showThis() {
    console.log(this);
  }
}
class Student extends Person {
  //Student.prototype.__proto__===Person.prototype
  //Student.__proto__===Person
  constructor() {
    /* super()代表父类构造函数。子类构造函数必须先于this出现之前执行super()。*/
    super(); //父类构造函数返回this，this.__proto__===Student.prototype
    this.age = 17;
    /* 对this进行加工 */
    /* 默认返回this */
  }
  showThis() {
    /* super在普通方法中代表父类原型对象 */
    super.showThis(); //super.showThis()中的this指向调用此方法的实例
  }
  static showThis() {
    /* super在普通方法中代表父类对象 */
    super.showThis(); //super.showThis()中的this指向调用此方法的子类对象
  }
}
console.log(Object.getPrototypeOf(Student)===Person)  //true。通过子类获取父类。
let stu = new Student();
stu.showThis();
Student.showThis();