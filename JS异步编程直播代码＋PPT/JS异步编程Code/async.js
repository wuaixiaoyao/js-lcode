setTimeout(function () {
  console.log('setTimeout as st')
}, 0)

async function async1() {
  console.log('async1 start as a1s')
  await async2();
  // 停
  console.log('async1 end as a1e')
}

async function async2() {
  console.log('async2 as a2')
}

console.log('script start as st')

async1();
// 执行
console.log('script end as se')