/* 链式调用：
由于Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
建议链式调用写法：then()方法里面不要定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法 */
let p=new Promise((resolve,reject)=>{
  reject(new Error("fail"))
})

/* catch可以捕获前面then方法执行中的错误 */
p.then((value)=>{console.log(1)}).then((value)=>{console.log(2)}).catch((err)=>{console.log(err)})