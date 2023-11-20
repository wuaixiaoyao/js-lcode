const dp = Array.from(new Array(3), () => new Array(10).fill(1))

console.log('dp[n,m]:', dp)
// 1 . vue eventBus, node eventEmitter
// 2.  背包问题 动态规划
// 3.  http 请求 实现 hooks 各个阶段打印日志


// var theThing;
var replaceThing = function () {
  var originalThing = theThing;
  console.log('originalThing---:', originalThing)

  var unused = function () {
    console.log('originalThing:', originalThing)
    if (originalThing) // 对于 ‘originalThing’的引⽤用
      console.log('hi');
  };
  var theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log('message');
    }
  };
  return unused

};
// setInterval(replaceThing, 1000);
console.log('unused', replaceThing()())