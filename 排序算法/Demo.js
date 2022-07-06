/* 递归：快速排序 */
const _quickSort = array => {
  // 补全代码
  //第一要素  结束条件   定义返回条件 如果数组的长度小于1 那么就返回就行了
  if(array.length<=1){
      return array
  }

  //第二要素 函数目的 寻找比中间数小的放做数组 大的放右数组
  //先将找到数组的中间位置的下标
  let mid = Math.floor(array.length/2);

  //在元素数组中删除这个元素。 并保存这个数
  var midNumber = array.splice(mid,1)[0];

  //定义比中间位置数值小的数组   （比数组中间位置元素小的放在leftArr）
  let leftArr = []
  //定义比中间位置数值小的数组   （数组中间位置元素大的放在rightArr）
  let rightArr = []
  for(let i = 0 ; i<array.length; i++){
      if(midNumber>array[i]){
          leftArr.push(array[i])
      }else{
          rightArr.push(array[i])
      }
  }

  //第三要素  等价关系 
  //左边leftArr midNumber rightArr 将这三个数组链接起来。midNumber是这一个数
  let leftSort= _quickSort(leftArr)
  let midSort = [midNumber]
  let rightSort = _quickSort(rightArr)
  return leftSort.concat(midSort,rightSort)
  //return _quickSort(leftArr).concat([midNumber],_quickSort(rightArr))
}