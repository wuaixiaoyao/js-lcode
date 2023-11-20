/*
 * @Author: wuaixiaoyao
 * @Date: 2020-02-25 17:28:25
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-05-13 10:24:56
 */

//参考 http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
//快排 利用分治法和递归

var arr = [9, 3, 10, 45, 34, 21];
function quikSort(arr) {
  if (arr.length <= 1) return arr;
  //查找中间点位（基点）
  let interIndex = Math.floor(arr.length / 2);
  let interItem = arr.splice(interIndex, 1)[0]; // 拿到中间值
  //定义左侧 右侧 两个数组, 存放对比后的数据
  let leftArr = [],
    rightArr = [];
  // 遍历
  arr.forEach((item) => {
    if (item < interItem) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });
  return [...quikSort(leftArr), interItem, ...quikSort(rightArr)];
}
