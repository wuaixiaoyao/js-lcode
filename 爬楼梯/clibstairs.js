// e.g. https://zhuanlan.zhihu.com/p/145313729
/**
 * 爬楼梯
 * n = 1 ret = 1
 * n = 2 ret = 2
 * n = 3 ret = 1 + 2
 * n = 4 ret = 2 + (1+2)
 */
function climbStairs(n) {
  if (n == 1 || n == 2) return n;

  // 三个变量接收 当前的、前一个、前两个
  let ret = 0,
    // 前一个
    pre = 2,
    // 前两个
    prepre = 1;

  for (let i = 3; i <= n; i++) {
    ret = pre + prepre;
    prepre = pre;
    pre = ret;
  }
  return ret;
}
