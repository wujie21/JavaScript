/* Symbol是ES6引入的“原始数据类型”，表示唯一的值，常用于保证属性名的唯一性。
      通过Symbol("desc")函数，创建Symbol值，字符串参数用于对Symbol值进行描述。
      */

let s = Symbol("wujie");
let s1 = Symbol("wujie");
console.log(typeof s, s, s1); //Symbol Symbol("wujie") Symbol("wujie")
console.log(s === s1); //false
console.log(s.description); //wujie

/* Symbol值做属性名 
      Symbol作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
      */
let mysymbol = Symbol();
let anosymbol = Symbol();
let thirdsymbol = Symbol();
let a = {
  [mysymbol]: { value: "good" }, //建议属性的增删改查统一采用[]
};
a[anosymbol] = { value: "very good" };
Object.defineProperty(a, thirdsymbol, { value: "nice" });
console.log(a);

/* Object.getOwnPropertySymbols(obj)：返回对象所有Symbol键构成的数组 */
console.log(Object.getOwnPropertySymbols(a));

/* Reflect.ownKeys()方法可以返回所有类型的键名（字符串键名和Symbol键名） */
a["test"] = "well done";
console.log(Reflect.ownKeys(a));

/* 
  Symbol.for():它接受一个字符串作为参数，然后在全局Symbol表中搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局Symbol表。Symbol.for()可以让我们重复使用同一个Symbol值。
*/
let s1 = Symbol("w");
let s2 = Symbol.for("w"); //此Symbol值在全局Symbol表中，Symbol函数没有登记机制
let s3 = Symbol.for("w");
console.log(s1, s2, s1 === s2, s2 === s3); //Symbol(w) Symbol(w) false true

/* Symbol.keyFor()方法返回一个"已登记的"Symbol类型值的名称。 */
console.log(Symbol.keyFor(s2)); //w
