
/**
 * 数组去重
 * @param {} params  arr
 */

function unique(arr) {
  // 创建一个set 
  let set = new Set();
  arr.forEach(item => {
    !set.has(item) && set.add(item);
  });
  return Array.from(set)
}

console.log('unique arr',unique([1,2,,2,3,3]))