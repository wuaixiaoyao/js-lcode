/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-03-12 12:08:37 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-06-15 20:23:28
 */

//求多个数组的交集

//e.g. getIntersection([1,2,3], [2,3,4])

function getIntersection(...args) {
  //判读是一个还是多个数组
  if (args.length > 1) {
    return args.reduce((pre, cur) => {
      let preResult = [...new Set(pre)].filter(item => cur.includes(item));
      //用数组的 includes 或者 set 的has方法验证
      //let preResult = [...new Set(pre)].filter(item => new Set(cur).has(item) );
      return preResult
    })
  } else {
    return args[0]
  }

}
console.log(getIntersection([1, 2, 2, 3], [2, 2, 3, 4, 5], [3, 4, 5]))