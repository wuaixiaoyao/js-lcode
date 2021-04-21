/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-04-20 19:32:26 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2021-03-08 21:57:01
 */

//两数之和

var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i< nums.length; i++) {
      let k = target-nums[i]
      if(map.has(k)) {
          return [map.get(k), i]
      }
      map.set(nums[i], i)
  }
  return [];
};

console.log('twoSum:', twoSum([2], [4]));


