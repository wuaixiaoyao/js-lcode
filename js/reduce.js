/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-09-10 13:57:05 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-09-10 14:39:03
 */

/**
 * 
 * @param {回调函数} fn 
 * @param {初始值} initinalValue
 */
// function myReduce(fn, initinalValue) {
//   const len = this.length;
//   let pre;
//   if (!!initinalValue) {
//     // pre 初始值为 initinalValue
//     pre = initinalValue;
//     let i = 0;
//     while (i < len) {
//       console.log(pre, this[i], i)
//       pre = fn(pre, this[i], i)
//       i++
//     }

//   } else {
//     let i = 0;
//     while (i < len - 1) {
//       console.log(pre, this[i], i)
//       if (!pre) {
//         pre = fn(this[i], this[i + 1], i + 1)
//       } else {
//         pre = fn(pre, this[i + 1], i)
//       }
//       i++
//     }
//   }
//   return pre
// }

// Array.prototype.myReduce = myReduce;

Array.prototype.myReduce = function(fn, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === 'undefined') {
      prev = fn(this[i], this[i+1], i+1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev
}


/**
 * e.g. 
 */

const sum = [1, 3, 6].reduce((pre, current, currentndex) => {
  return pre + current
}, 10)
console.log('sum:', sum)
/**
 * e.g. 
 */
const mySum = [1, 3, 6].myReduce((pre, current, currentndex) => {
  return pre + current
})
console.log('myReduce sum:', mySum)