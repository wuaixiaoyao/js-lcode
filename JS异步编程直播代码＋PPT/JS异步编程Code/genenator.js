function * f1(){
  console.log(11)
  yield 22
  console.log(33)
  yield 44
  console.log(55)
}

var g = f1();
console.log(g.next().value);
console.log(66) 
// g.next();
console.log(g.next().value)
console.log(77);
// g.next()



// =====异步 Generator 函数就是async函数与 Generator 函数的结合========= //
async function* gen() {
  yield 'hello';
}
const genObj = gen();
const next = genObj.next();
console.log('next', next);
next.then(item => {
  console.log(item)
})