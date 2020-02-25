/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-02-25 13:51:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-25 14:41:50
 */

var SortedStack = function() {
  this.stack = [];//定义栈
};

/** 
 * 入栈
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
  val && this.stack.push(val)
};

/**
 * 出栈
 * @return {void}
 */

SortedStack.prototype.pop = function() {
  if(this.stack && this.stack.length > 0){
    var last = this.stack.pop();
    return last    
  }
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
  
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {

};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */



 