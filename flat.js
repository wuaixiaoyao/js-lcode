/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-03-28 18:46:56 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2021-03-08 21:58:00
 */

 // 数组扁平化

 /**
  * e.g.  [1, [2, [3,4, [5,6]]]]
  */


  function flatten (arr) {
    return arr.reduce((pre, cur) => {
      if (Array.isArray(cur)) {
        // 扩展运算符
         return [...pre, ...flatten(cur)] 
      }  
      return [...pre, cur]
    }, [])
  }
  var testArr = [1, [2, [3,4, [5,6]]]];
  console.log('flatten fn:', flatten(testArr))
  console.log('es6 flat 方法：', (testArr.flat(Infinity)))


  