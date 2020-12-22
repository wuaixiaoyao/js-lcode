/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-02-24 11:28:46 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-25 10:38:34
 */


var mergeTrees1 = function(t1, t2) {
  if (t1 instanceof Array && t2 instanceof Array) {
      let merTree = [];
      // 二叉树合并逻辑
      if (t1.length >0 || t2.length > 0) {
          let len = t1.length > t2.length ? t1.length : t2.length;
          //循环遍历
          for( i = 0; i < len; i ++){
              if(!t1[i] && !t2[i]){
                merTree[i] = null;      
              }else {
                 t1i = Boolean(t1[i]) ? t1[i] : Number(Boolean(t1[i]));
                 t2i = Boolean(t2[i]) ? t2[i] : Number(Boolean(t2[i])); 
                // debugger
                 merTree[i] = t1i + t2i;
              }
              
          }
      }else{
          merTree = [];
      }
      return merTree

  } else {
    throw Error('not  array')
  }

};

console.log( '----循环------', mergeTrees1([1,3,2,5], [2,1,3,null,4,null,7]));





//使用递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

 
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function (t1, t2) {
  var tree
  if (t1 && t2) {
    tree = new TreeNode(t1.val + t2.val);
    tree.left = mergeTrees(t1.left, t2.left);
    tree.right = mergeTrees(t1.right, t2.right);
  }else {
    tree = t1 || t2
  }  
  return tree

}


var fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

console.log('----process -----', process.cwd())
console.log('---appDirectory ----', appDirectory)

try {
  console.log('aaa---', a)
} catch (err) {
  
}