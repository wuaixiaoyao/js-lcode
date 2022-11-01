// 双指针
var longestPalindrome = function (s) {
  let resStr = "";
  // 扫两遍，第一遍，假设结果是个奇数回文串，则最长回文串在这个循环里找到
  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;

    // 当前下标 两头对比若相等则重复循环
    while (i < s.length && s[l] === s[r] && l >= 0 && r < s.length) {
      l--;
      r++;
    }
    // 循环跳出时，l, r两个字符是不相等的，所以回文串是l+1 --->  r-1 这个范围
    if (r - l - 1 > resStr.length) {
      // < == > r > (l + 1 + resStr.length)
      resStr = s.slice(l + 1, r);
    }
  }

  // 第二遍，假设结果是偶数回文串，则最长的回文串在这个循环里找到
  for (let i = 1; i < s.length; i++) {
    let l = i - 1,
      r = i;
    while (i < s.length && s[l] === s[r] && l >= 0 && r < s.length) {
      l--;
      r++;
    }
    if (r - l - 1 > resStr.length) {
      resStr = s.slice(l + 1, r);
    }
  }
  return resStr;
};

console.log(longestPalindrome("ababad"));
console.log(longestPalindrome("cbbdff"));
console.log(longestPalindrome("fabcdedcbag"));
