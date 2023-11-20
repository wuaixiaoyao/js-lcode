/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-03-19 22:17:24 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-06-15 20:18:23
 */



// 链表
var obj3 = {
  name: 'obj3',
  next: null
};
var obj2 = {
  name: 'obj2',
  next: obj3
};
var obj1 = {
  name: 'obj1',
  next: obj2
}

console.log('obj1', obj1)
// 链表结构
// obj1 = {
//   name: 'obj1',
//   next: {
//     name: 'obj2',
//     next: {
//       name: 'obj3',
//       next: null
//     }
//   }
// }

// 打印链表各级节点名
function printList(node) {
  var p = node;
  while (p) {
    console.log(p.name);
    p = p.next
  }
}

//翻转链表
function reverseLikedList (node) {
  //队列存放 name
  var stackNameList = [];
  var p = node;
  while (p) {
    stackNameList.push(p.name)
    p = p.next
  }
  console.log(stackNameList)
  var nextObj = {};
  var p = {

  }
  while (p) {
    var obj = {};
    obj.name = cur;
    obj.next = pre;
    nextObj = obj;
    return obj
  }
  
  let res = ''
  console.log(res)

}

function reverse(nodeLst){
  var pNode = nodeLst; 
  var pPre = null;   //翻转之后 第一个节点的next值 为 null   
  var pNext;
  while(pNode){
      pNext = pNode.next;        //获取到当前节点的下一个节点
      pNode.next = pPre;         //当前节点的前一个指向上一个节点
      pPre = pNode;               //上一个节点赋值为当前节点
      pNode = pNext;              //当前节点赋值为下一个节点
  }

  console.log(pPre)
  return pPre;
}

// reverse(obj1)


/**
 * 翻转链表
 * @param {链表} nodeList 
 */


function myLinkedListReverse(nodeList) {
  //定义当前节点
  var pNode = nodeList;

  //定义 pPre 为上一个节点
  var pPre = null; //初始位null
  //定义下一个节点 存放下一个节点
  var nextNode

  while(pNode){
    //确定下一个节点
    var nextNode = pNode.next;
    
    //当前节点的next指向上一个节点;
    pNode.next = pPre;
    
    //上一个节点赋值为当前节点
    pPre = pNode;

    //处理下一个节点
    pNode = nextNode;
  }

  return pPre;
}

console.log('myLinkedListReverse: ', myLinkedListReverse(obj1))

// reverseLikedList(obj1)





