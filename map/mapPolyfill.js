/*
 * @Author: wuaixiaoyao
 * @Date: 2020-04-20 19:18:35
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-04-26 23:24:28
 */

class Map {
  constructor() {
    this.obj = {};
  }

  get(key) {
    key = Symbol(key);

    return this.obj[key];
  }

  set(key, value) {
    key = Symbol(key);
    this.obj[key] = value;
  }
}

//实现 es6 的map
/**
 *
 * ES6的Map的键可以是任意的数据结构，并且不重复。
 * 那么map的底层原理是啥呢
 * Map利用链表，hash的思想来实现
 */

function myMap() {
  this.bucketLength = 8;
  this.init();
}

myMap.prototype.init = function () {
  // 初始化 桶 8
  this.bucket = new Array(this.bucketLength);
  for (var i = 0; i < this.bucket.length; i++) {
    this.bucket[i] = {
      type: "bucket_" + i,
      next: null,
    };
  }
};
//
// 1. [0, 8)
// 2. 重复算值固定
myMap.prototype.makeHash = function (key) {
  let hash = 0;
  // string
  if (typeof key !== "string") {
    if (typeof key == "number") {
      //number NaN
      hash = Object.is(key, NaN) ? 0 : key;
    } else if (typeof key == "object") {
      // null {} []
      hash = 1;
    } else if (typeof key == "boolean") {
      // true false boolean
      hash = Number(key);
    } else {
      // undefined  function(){}
      hash = 2;
    }
  } else {
    // string
    // 'a' 'ab' 'asdasdadasda';
    // 长度大于等于3 前三个字符 ascii 累加
    for (let i = 0; i < 3; i++) {
      // key[]
      hash += key[i] ? key[i].charCodeAt(0) : 0;
    }
  }
  return hash % 8;
};

myMap.prototype.set = function (key, value) {
  let hash = this.makeHash(key);
  let oTempBucket = this.bucket[hash];
  // 如果存在当前oTempBucket  链表结构
  while (oTempBucket.next) {
    if (oTempBucket.next.key == key) {
      oTempBucket.next.value = value;
      return;
    } else {
      // 截取为next节点
      oTempBucket = oTempBucket.next;
    }
  }
  oTempBucket.next = {
    key: key,
    value: value,
    next: null,
  };
  console.log("oTempBucket: ", oTempBucket);
};

myMap.prototype.get = function (key) {
  let hash = this.makeHash(key);
  let oTempBucket = this.bucket[hash];
  // 循环获取节点的key 相同的节点
  while (oTempBucket) {
    if (oTempBucket.key == key) {
      return oTempBucket.value;
    } else {
      oTempBucket = oTempBucket.next;
    }
  }
  return undefined;
};

myMap.prototype.delete = function (key) {
  let hash = this.makeHash(key);
  let oTempBucket = this.bucket[hash];
  while (oTempBucket.next) {
    if (oTempBucket.next.key == key) {
      oTempBucket.next = oTempBucket.next.next;
      return true;
    } else {
      oTempBucket = oTempBucket.next;
    }
  }
  return false;
};

myMap.prototype.has = function (key) {
  let hash = this.makeHash(key);
  let oTempBucket = this.bucket[hash];
  while (oTempBucket) {
    if (oTempBucket.next && oTempBucket.next.key == key) {
      return true;
    } else {
      oTempBucket = oTempBucket.next;
    }
  }
  return false;
};

myMap.prototype.clear = function (key) {
  this.init();
};

const a = new myMap();
const key = "key";
a.set(key, "123");

const key2 = {
  a: 2,
};

const key3 = {
  a: 2,
};

a.set(key2, "222");
a.set(key3, "333");

console.log("a: ", a);
console.log("key: ", a.get(key));

console.log("key2: ", a.get(key2));
console.log("key3: ", a.get(key3));
