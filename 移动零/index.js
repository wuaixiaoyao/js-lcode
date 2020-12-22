/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-03-13 15:35:05 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-03-28 18:46:38
 */

var arr = [0, 1, 0, 3, 12]

/**
 * 移动零 必须在原数组上操作
 * @param {*} arr 
 */
var moveZeroes = function (nums) {
  //
  var res = [];
  var zeroArr = [];
  nums.forEach(val => {
    if (val === 0) {
      zeroArr.push(0);
    } else {
      res.push(val)
    }
  });
  return res.concat(zeroArr);
};

function moveZeroes1(nums) {
  var i = 0;
  nums.forEach((num, index) => {
    //
    i++;
    console.log(i)
    if (num === 0) {
      nums.splice(index, 1)
      nums.push(0)
    }

  })
  console.log('----nums----', nums)
  

}




console.log('-------moveZeroes-------')
console.log(moveZeroes(arr))


//console.log('-------moveZeroes1-------')
// console.log(moveZeroes1(arr))
/**
 * 
 * @param {*} nums 
 */
function moveZeroes2(nums) {
  console.log('-------moveZeroes2-------', nums)
  var queue = [...nums];
  var index = 0;
  var zeroArr = [];
  while (queue.length) {
    //取出第一个， 先进先出
    var num = queue.shift();
    console.log('----num----', num)

    if (num === 0) {
      nums.splice(index, 1)
      console.log('----此时nums----', nums)
      nums.push(0)
    } else {
      index++
    }
    
  } 
  
  console.log('-------moveZeroes2结果-------', nums)



}
moveZeroes2(arr)


function moveZeroes3(nums) {
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[temp] === 0) {
      nums.splice(temp, 1)
      nums[nums.length] = 0;
    } else {
      temp++
    }
  }
  console.log('----------------------3---------', nums)
}

moveZeroes3(arr)


process.nextTick(function foo() {
  console.log('执行 foo')
  // process 递归会陷入死循环  递归调用process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！
  //process.nextTick(foo);


  

});

/**
 * es5 会存在变量声明提升
 */
a = test  + 100;
console.log('test', test)
var test = 200;
console.log('aaa', a)


