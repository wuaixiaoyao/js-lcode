/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-02-25 15:02:54 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-25 16:38:38
 */

//最小栈
/**
 * initialize your data structure here.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []; //存储栈
  this.sortedArr = []; //辅助栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  var s = this.sortedArr
  if (s.length === 0) return s[0] = x;
  if (x <= s[0]) return s.unshift(x)
  if (x > s[s.length - 1]) return s.push(x)
  for (let i = 0; i < s.length; i++) {
    if (x > s[i] && x <= s[i + 1]) {
      this.sortedArr = [...s.slice(0, i + 1), x, ...s.slice(i + i)]
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var index = this.sortedArr.findIndex(item => {
    return item === this.stack[this.stack.length - 1]
  })
  this.sortedArr.splice(index, 1);
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.sortedArr[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
var min = minStack.getMin(); //--> 返回 -3.
console.log('----min--', min)
minStack.pop();
var top = minStack.top(); //--> 返回 0.
console.log('----top---', top)
console.log(minStack.getMin()); //--> 返回 -2.