/**
 * array To tree
 * e.g. [{name:"i am son1", code: 'son1', parentCode: 'parent1',children : {} }]
 */


arrEG = [{
  name: "i am parent1",
  code: 'parent1',
  parentCode: 'parent1',
  children: [{
    name: "i am son1",
    code: 'son1',
    parentCode: 'parent1',
    children: []
  }]
}]


//参考： https://blog.csdn.net/qq_33594380/article/details/82462701

/**
 * arrar e.g. 
 */
var nodes = [{
    id: 10,
    title: 'dw10',
    parentId: 4
  },
  {
    id: 2,
    title: 'dw2',
    parentId: 0
  },
  {
    id: 4,
    title: 'dw4',
    parentId: 2
  },
  {
    id: 12,
    title: 'dw12',
    parentId: 2
  },
  {
    id: 8,
    title: 'dw8',
    parentId: 4
  }
];

// sort
function cmp(a, b) {
  return a.parentId - b.parentId;
}
nodes.sort(cmp);

var midObj = {};
// 从后向前遍历
for (var i = nodes.length - 1; i >= 0; i--) {
  var nowPid = nodes[i].parentId;
  var nowId = nodes[i].id;
  /**
   * 建立当前节点的父节点的children 数组，
   * e.g.: 
   * { 22: [
   *    {
   *      id: 224,
          title: 'dw4',
           parentId: 22
   *    },
         {
   *      id: 225,
          title: 'dw4',
           parentId: 22
   *    }
   * ] }
   */
  if (midObj[nowPid]) {
    //存在父节点时， 直接push
    midObj[nowPid].push(nodes[i]);
  } else {
    //不存在时 先创建数组 
    midObj[nowPid] = [];
    midObj[nowPid].push(nodes[i]);
  }
  // 将children 放入合适的位置
  if (midObj[nowId]) {
    //若midobj 已经存在当前节点  把当前节点 作为childern 赋值给 nodes[i] 并删除 midobj[nowId]
    nodes[i].children = midObj[nowId];
    delete midObj[nowId];
  }
}
console.log('----------------')

console.log(midObj[0][0])

console.log('----------------')


var info = () => {
  console.log(this.age, this)
}
info()
