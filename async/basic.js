/* 调用async函数惠立即生成一个promise对象。当所有await语句执行完成、遇到return语句或抛出错误时，该对象状态才会改变（才会执行then指定的回调）。
    1、无return值。用Promise.resolve()包装undefined
    2、有return值。用Promise.resolve()包装该值
    */
/* await语句暂停async函数，等待其参数promise的结果：
    1、resolved。继续执行async函数。返回value。
    2、rejected。抛出错误，中断async函数。
    */
async function test() {
  /* return await Promise.resolve("success") */
  return await Promise.reject(new Error("fail")); //等价于throw new Error("fail")
}
test()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
