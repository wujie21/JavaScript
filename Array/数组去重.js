/* 将数组中相同的值去重，值可以是任意类型。 */
import _ from "lodash";
/* let arr=[1,2,3,2,1,{},{}]
let newArr=[]
arr.forEach(item=>{
  // includes方法采用的是浅比较
  if(!newArr.includes(item)){
    newArr.push(item)
  }
})
console.log(newArr) */

/* 值的深比较：_.isEqual(obj,other) */
let arr = [1, 2, 3, 2, 1, {}, {}];
let newArr = [];
/* 依次检查原数组的每个元素，在新数组中是否有相同的值 */
arr.forEach((arrItem) => {
  if (
    !newArr.some((ele) => {
      return _.isEqual(ele, arrItem);
    })
  ) {
    newArr.push(arrItem);
  }
});
console.log(newArr);
