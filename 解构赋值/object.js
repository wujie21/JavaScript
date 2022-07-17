/* 匹配规则：先找到同名属性，然后再赋给对应的变量。解构失败，变量默认为undefined */
/* 对象解构赋值的全写形式：let {key1:value1=defaut,key2:value2=defaut}=obj
当key与value相同时，可简写为：let {value1=defaut,value2=defaut}=obj*/

let {foo,bar,baz}={bar:'bar',foo:'foo'}
console.log(foo,bar,baz)  //foo bar undefined
/* 解构内置对象Math的三个函数，赋到同名变量上 */
let {log,sin,cos}=Math
console.log(log,sin,cos)
/* 解构嵌套结构的对象 */
let obj={
  p:[
    'hello',{y:'world'}
  ]
}
let {p,p:[x,{y}]}=obj //x='hello' y='world' p=['hello',{y:'world'}]
/* 指定默认值：默认值生效的条件是，对象的属性值严格等于undefined。*/
let {o=3}={}  
let {message:msg="no content"}={}

/* 注意事项
// 错误的写法
let x;
{x} = {x: 1};
// {x}会被当作代码块

// 正确的写法
let x;
({x} = {x: 1}); //加圆括号，变成表达式
*/