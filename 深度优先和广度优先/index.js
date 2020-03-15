/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-03-13 11:02:10 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-03-14 09:49:25
 */


// 二叉树如下：

var myTree = {
    val: 6,
    left: {
        val: 5,
        left: {
            val: 4,
            left: {
                val: 41,
                left: {
                    val: 411
                },
                right: {
                    val: 412
                }
            },
            right: {
                val: 42
            }
        },
        right: {
            val: 3,
            left: {
                val: 31
            },
            right: {
                val: 32
            }
        }
    },
    right: {
        val: 2,
        right: {
            val: 1
        }
    }
}


// 广度优先遍历 
// 思路是利用队列，从根节点开始，依次将左节点、右节点push进数组。队列后进后出
function bfs(tree) {
    var queue = [tree]
    var res = []
    var count = 0
    while (queue[count] && queue[count].val) { // 直到队列中某值不存在为止
        // 推入值到res
        res.push(queue[count].val)

        // 推入左右节点到队列 queue （左右节点可能有子节点）， queue 增大。   
        var left = queue[count].left
        var right = queue[count].right
        if (left) {
            queue.push(left)
        }
        if (right) {
            queue.push(right)
        }

        count++
    }
    return res
}
console.log('--------广度优先------------')
console.log(bfs(myTree))



//深度优先遍历

// 递归版本
var res = [];
function dfs(tree) {
   
    if (tree.val) {
        res.push(tree.val);
        //递归子节点
        if (tree.left) {
            dfs(tree.left)
        }   
        if (tree.right) {
            dfs(tree.right)
        }


    }
    return res
}    

console.log('--------递归 深度优先------------')
console.log(dfs(myTree))
// 栈版本, 把各级节点都放入栈中， 然后一个个出栈处理
//后进先出
function  dfsStack (tree) {
    //
    var stack = [tree];
    var res = [];
    while (stack.length) {
        
        //取出最后节点，因为后进 所以顺序可能是乱的，每次只出一个
        var node = stack.pop(); 
        // 把val fn
        res.push(node.val);
        //平铺 左右节点
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
        
    }

    return res


}

console.log('-------------')
console.log(dfsStack(myTree))


function test (num) {
    if (num > 2) {
        console.log('> 2')
        console.time('sssssss')
        for (let index = 0; index < 10000000; index++) {
           
            if (index > 9990000000) {
                // console.log(index)
            }
        }
        console.timeEnd('sssssss')
    } 
    if (num > 3) {
        console.log('> 3')
    }
}
test(4)