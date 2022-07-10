import * as superagent from "/superagent.min.js";
const NUM_RETRIES = 3;
async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      /* 使用try...catch处理await后面可能的异步错误 */
      await superagent.get("http://google.com/this-throws-an-error");
      break;
    } catch (e) {}
  }
  console.log(i); // 3
}
test();


/* 如果多个异步操作之间没有继发关系，可以同时触发 */
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}
or
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}