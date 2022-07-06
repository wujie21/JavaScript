// 声明空数组
let emptyarr = [];

//声明并初始化数组
let arr = [1, "Apple"];

//数组具有length属性，它随数组长度自动变化
console.log(arr.length);

//判断数组。数组也是对象，不能用typeof将其与Object区分。
Array.isArray([]) //true
Array.isArray({}) //false

/* Array.from(arraylike[,mapfunction[,thisArg]])：将类数组对象或可迭代对象转换为数组。
*/

//查
console.log(arr[1]); //使用下标，但是下标不能为负
console.log(arr.at(-1)); //使用at方法，下标可以为负

// arr.splice(index,len,[items])实现增删改。
/*
1、index	必需。整数，在“原数组”指定位置添加/删除项目，使用负值指定从原数组末尾开始的位置。
2、len	可选。要删除的项目数。如果设置为 0，则不会删除任何项目。
3、item1, ..., itemX	可选。要添加到数组中的新项目。
返回值：删除元素构成的数组
*/
//增
arr.splice(arr.length, 0, "Money"); //在尾部追加'Money'
//删
arr.splice(1, 1); //删除第二个元素
//改（先删后加）
arr.splice(0, 1, 2); //把第一个元素改为2

/*
数组方法:
1、删除并返回原数组尾元素                   arr.pop()
2、在原数组尾部添加元素，返回新数组长度      arr.push(items)
3、删除并返回原数组首元素                   arr.shift()
4、在原数组首部添加元素，返回新数组长度      arr.unshift(items)
*/

/*
数组遍历:
for循环
for..0f
.forEach(function(item,index,array))
*/
let fruits = ["Apple", "Pear"];
for (let item of fruits) {
  console.log(item);
}

/*
arr.slice([start], [end])
  返回一个新数组，截取原数组[strat,end)。
  start缺省值为0，end缺省值为arr.length。
  strat和end可以是负数
*/
//arr.slice()获取数组副本
let target = [1, 2, 1];
let copy = target.slice();

/*
arr.concat(arg1, arg2...)
返回一个新数组[arr,arg1,arg2...]
*/
//argN为数组时，会浅复制数组元素
console.log(arr.concat([1, 1, 1, [2, 2]]));
//类似数组的对象具有Symbol.isConcatSpreadable属性，也会当作数组处理
let arrobj = {
  0: "handsome",
  1: "boy",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
console.log(arr.concat(arrobj));

/*
arr.forEach(function(item, index, array){
  // ... do something with item
}[,thisArg]);
为每个数组元素执行一个函数。返回undefined。
*/
arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

/*数组搜素。使用===比较。
arr.indexOf(item, from) 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
arr.lastIndexOf(item, from) —— 和上面相同，只是从右向左搜索。
arr.includes(item, from) —— 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）。

对象数组，搜素“第一个”符合条件的对象
arr.find(function(item, index, array) {
  // 如果返回 true，则返回 当前item 并停止迭代
  // 如果没找到，则返回 undefined
}[,thisArg]);
arr.findIndex(function(item, index, array) {
  // 如果返回 true，则返回 当前index 并停止迭代
  // 如果没找到，则返回 -1
}[,thisArg]);

对象数组，搜素所有符合条件的对象构成的数组
arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
}[,thisArg]);
*/
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// let user = users.find(item => item.id == 4);
// let user=users.findIndex((item,index,array)=>{return item.id===4})
let user = users.filter(function (item, index, array) {
  return item.id > 1;
});
console.log(user);

/*数组转换
arr.map(function(item, index, array) {
  // 返回新值，默认undefined
}[,thisArg])
返回由新值构成的新数组
*/
let nums = [1, 2, 3];
console.log(
  nums.map(function (item, index, array) {
    if (item % 2 != 0) {
      return item * item;
    }
  })
);

/*数组原地排序
arr.sort((a,b)=>a-b)  升序排序
arr.sort((a,b)=>b-a)  降序排序

arr.reverse()   原地逆置数组

字符串排序类似：
str.sort((a, b) => a.localeCompare(b)); 升序排序
str.sort((a, b) => b.localeCompare(a)); 降序排序
*/

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log( countries.sort( (a, b) => b.localeCompare(a) ) );

/*
str.split(delim) 通过给定的分隔符 delim 将字符串分割成一个数组。
arr.join(glue) 通过给定的连接符 glue 将数组元素连接为字符串。
*/
let str='wujie'
console.log(str.split(''))
let strarr=['wujie','futong']
console.log(strarr.join(''))

/*
arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
  accumulator —— 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。最终作为方法的返回值。
  item —— 当前的数组元素。
  index —— 当前索引。
  array —— 数组本身。
  initial —— 建议始终指定初始值

arr.reduceRight同理，只是遍历为从右到左。
*/
let sum=nums.reduce(function(accumulator,item,index,array){
  return accumulator+item   //累加器
},0)
console.log(sum)