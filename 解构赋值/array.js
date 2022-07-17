/* 数组形式的解构赋值:只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。*/
/* 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。 */
/* 匹配规则：数组的元素是按次序排列的，变量的取值由它的位置决定 */
let [foo,[[bar],baz]]=[1,[[2,2.1],3]]
console.log(foo,bar,baz)  //1 2 3
let [,,third]=[1,2,3]
console.log(third)  //3
let [x,,z]=[1,2,3]
console.log(x,z)    //1 3
let [head,...tail]=[1,2,3,4]
console.log(head,tail)  //1 [ 2, 3, 4 ]
let [one,two]=[1]
/* 解构不成功，变量默认为undefined */
console.log(one,two)  //1 undefined

/* 解构赋值允许指定默认值，当数组成员===undefined时，默认值生效。默认值如果是表达式，该表达式是惰性求值的。 */
let [a,b=2]=[1]
console.log(a,b)  //1 2
let [A,B=2]=[1,null]
console.log(A,B)  //1 null
function fn1(){
  return "fn1"
}
let [t=fn1()]=[]
console.log(t)  //fn1

/* 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。 */
let [m=1,n=m]=[]
console.log(m,n)  //1 1
/* 错误示例
let [v=u,u=1]=[]
console.log(v,u) 
*/

/* 字符串可以像数组一样被解构 */
let [s,...remains]='wujie'
console.log(s,remains)