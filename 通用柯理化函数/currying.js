// add的参数不固定，看有几个数字累计相加
function add(a, b, c, d) {
  return a + b + c + d
}

function currying(fn, ...args) {
  // fn.length 回调函数的参数的总和
  // args.length currying函数 后面的参数总和 
  // 如：add (a,b,c,d)  currying(add,1,2,3,4)
  if (fn.length === args.length) {
    return fn(...args)
  } else {
    // 继续分步传递参数 newArgs 新一次传递的参数
    return function anonymous(...newArgs) {
      // 将先传递的参数和后传递的参数 结合在一起
      let allArgs = [...args, ...newArgs]
      return currying(fn, ...allArgs)
    }
  }
}

let fn1 = currying(add, 1, 2) // 3
let fn2 = fn1(3) // 6
let fn3 = fn2(4) // 10
console.log('fn1', fn1)

console.log('fn2', fn2)


function curry(func) {
  return function curried(...args) {
    // 关键知识点：function.length 用来获取函数的形参个数
    // 补充：arguments.length 获取的是实参个数
    console.log('curried', func.length, args)
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}

// 测试
function sum(a, b, c, d) {
  return a + b + c + d
}
const curriedSum = curry(sum)
console.log(curriedSum(1, 2, 3, 4))
console.log(curriedSum(1)(2, 3, 4))
console.log(curriedSum(1)(2)(3)(4))