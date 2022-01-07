// e.g. https://zhuanlan.zhihu.com/p/145313729
function climbStairs(n) {
  if (n == 1 || n == 2) return n;

  let ret = 0,
    pre = 2,
    prepre = 1;
  for (let i = 3; i <= n; i++) {
    ret = pre + prepre;
    prepre = pre;
    pre = ret;
  }
  return ret;
}
