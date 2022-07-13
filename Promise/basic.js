let p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(resolve, 1000, "success");
  } else {
    setTimeout(reject, 1000, new Error("fail")); //1s后抛出错误，最好catch一下，否则程序可能不会正常运行。
  }
});
/* 
resolve函数的参数，指定了promise对象resolved时的值。
reject函数的参数，指定了promise对象rejected时的错误信息，建议采用Error对象。
特别地，resolve函数参数为另一个promise对象时，原样返回该对象。
*/

/* .then(onFulfill,onRejected)返回值，是Promise.resolve()对回调函数返回值的包装。 */
/* .catch(onRejected)相当于.then(null, rejection) */
/* .finally(()=>{})：resolved和rejected后都会执行回调函数 */
let p1 = p.then(
  (value) => {
    return value;
  },
  (err) => {
    /* Promise.reject(err)相当于抛出错误。最好catch一下，否则程序可能不会正常运行。 */
    return Promise.reject(err); 
    /* throw err; */
  }
);
p1.catch(() => {});
setTimeout(console.log, 2000, p1);



/* 如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。 */
const someAsyncThing = function () {
  return new Promise(function (resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function () {
  console.log("everything is great");
});

setTimeout(() => {
  console.log(123);
}, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123


