/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-02-25 17:52:37 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-02-25 18:02:42
 */

 //冒泡排序

 function sort(arr) {
  var len = arr.length;
  for (var i = 0 ; i < len -1 ; i++) {
    //外层循环 ， 
    for (var j = 0; j < len -1 - i; j ++) {//
      //内层循环， 依次对比相邻的两个, 把大的数字往后排
      if(arr[j] > arr[j + 1]){
        var c = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = c;
        
      }

    }
  }
  return arr
 }

 console.log(sort([3,1,4,2,10,9]))