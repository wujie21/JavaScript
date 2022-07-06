// require("./sub") 引入的是module.exports对象
// 解构赋值
let {FunA,FunB}=require('./sub')
console.log(FunA(),FunB())