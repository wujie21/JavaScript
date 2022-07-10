/* Promise.all(promiseList) */
let p = Promise.all([
  Promise.resolve("p1"),
  /* Promise.resolve("p2"), */
  Promise.reject(new Error("p2")),
  Promise.resolve("p3"),
]);
p.then((value) => {
  console.log(value); //['p1','p2','p3']
}).catch((err) => {
  console.log(err); //p2
});
/* promiseList所有成员都resolved，p的状态才会变成resolved，此时promiseList所有成员的value组成一个数组，作为p的value。
   promiseList所有成员中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的err，作为p的err
*/

/* Promise.race(promiseList) */
/* 返回promiseList中第一个率先改变状态的实例 */
const p = Promise.race([
  fetch("/resource-that-may-take-a-while.txt"),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("request timeout")), 5000);
  }),
]);
/* fetch函数返回一个promise实例 */
p.then(console.log).catch(console.error);

/* Promise.allSettled(promiseList):只有等到promiseList所有成员都发生状态变更（不管是resolved还是rejected），返回的 Promise 对象才会resolved，接受promiseList所有成员作为value。 */
let p = Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject(new Error("fail")),
]);
p.then((value) => {
  console.log(value);
});

/* 异步函数通过Promise.resolve()包装return值，返回一个Promise对象 */
/* await会等待promise对象处理完成 */
async function main() {
  const promises = [fetch("/api-1"), fetch("/api-2"), fetch("/api-3")];
  return await Promise.allSettled(promises);
}
main().then((arr) => {
  arr.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log(item.value);
    } else {
      console.log(item.reason);
    }
  });
});


/* Peomise.any(promiseList):只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；只有所有参数实例都变成rejected状态，包装实例才会变成rejected状态 */

/* Promise.try(f):https://wangdoc.com/es6/promise.html#promiseprototypefinally*/
database.users.get({id: userId})
.then(...)
.catch(...)   //catch可以处理database.users.get的异步错误，但不能处理同步错误

//使用try...catch捕获同步错误
try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}

//用Promise.try包装promise对象，就可以同时处理所有同步和异步的错误
Promise.try(() => database.users.get({id: userId}))
.then(...)
.catch(...)