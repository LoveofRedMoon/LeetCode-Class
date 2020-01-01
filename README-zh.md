# LeetCode-Class

主要是 JavaScript 在 LeetCode 上面的 `ListNode`, `TreeNode`, `Interval`, `Employee`, 方便各位调试

## ListNode(链表)

### 构造函数

```js
const node = new ListNode(val);
```

### 数组初始化

通过数组创建链表(遵循 LeetCode 题目规范): `ListNode.create(arr : Array) : ListNode`

```js
const head = ListNode.create([1,2,3,4,5]);
```

### 可视化展示
`ListNode.prototype.visualShow() : void`
```js
const head = ListNode.create([1,2,3,4,5]);

head.visualShow()
//1 -> 2 -> 3 -> 4 -> 5
```

### 交叉链表初始化
通过数组创建交叉链表(遵循 LeetCode 题目规范, 如 160 题): `ListNode.createIntersectList(firstArr: Array<any>,secondArr: Array<any>IntersectArr: Array<any>) : [ListNode, ListNode]`, 参数依次为: 首个链表未交叉部分, 下个链表未交叉部分, 交叉部分

```js
const [head1, head2] = ListNode.createIntersectList([1,2],[3,4],[5,6]);
```

### 链表转数组
将链表转化为数组进行输出: `ListNode.prototype.show() : Array`

```js
const head = ListNode.create([1,2,3]);

head.show();
// [1,2,3]
ListNode.show(head);
// [1,2,3]
```

### 获取链表末尾节点
获取链表最后一个`ListNode`: `ListNode.prototype.getLast() : ListNode`

```js
const head = ListNode.create([1,2,3]);

head.getLast().show();
// [3]
```


### 随机生成链表
随机构建一个长度为 n 的链表: `ListNode.mock(n : Number) : ListNode`

```js
const head = ListNode.mock(5);
```

## Interval(区间)

### 构造函数
`Interval`
```js
const interval = new Interval(1,3);
```

### 数组初始化
通过数组创建区间数组(遵循 LeetCode 题目规范): `Interval.createList(arr : Array[]) : Interval[]`
```js
const intervals = Interval.createList([[1,2],[3,4]])
```

### 区间转数组
将链表转化为数组进行输出: `Interval.show() : Array`
```js
const interval = new Interval(1,3);

interval.show()
// [1,3]
Interval.show(interval)
// [1,3]
```

将链表数组转化为数组进行输出: `Interval.showList() : Array[]`
```js
const intervals = Interval.createList([[1,2],[3,4]])

Interval.showList(intervals)
// [[1,2],[3,4]]
```

## Employee(雇佣人员)

### 构造函数
`Employee`
```js
const employee = new Employee(1)
```

将 LeetCode 的 Employee 样例转换为 Employee 数组(遵循 LeetCode 题目规范): `Employee.createArr(arr: [number, number, number[]][]) : Employee[]`

## TreeNode(二叉树)

### 构造函数
`TreeNode`
```js
const node = new TreeNode(5)
```

### 数组初始化
通过数组创建二叉树(遵循 LeetCode 题目规范): `TreeNode.create(arr : Array) : TreeNode`

> 注: LeetCode题目规范为单层从左至右排成数组, 不可缺少位置填`null`

```js
const head = TreeNode.create([1,2,3,null,4,null,null,5,6]);
```

### 二叉树转数组
将二叉树转化为数组进行输出: `TreeNode.prototype.show() : Array`
```js
const head = TreeNode.create([1,2,3,null,4,null,null,5,6]);

head.show()
// [1,2,3,null,4,null,null,5,6]
TreeNode.show(head)
// [1,2,3,null,4,null,null,5,6]
```

### 可视化展示
将二叉树转化为数组进行输出: `TreeNode.prototype.visualShow() : void`
```js
const head = TreeNode.create([1,2,3,null,4,null,null,5,6]);

head.visualShow()
// ---- 上为左, 下为右 ----
// 1 -> 2
//        ↘→ 4 -> 5
//             ↘→ 6
//   ↘→ 3
```

## RunScript(对应实现类)(testing)

> 例如`1172`题, 餐盘栈. 欢迎提`issue`

### 运行
将输入参数按照一定顺序执行
`function runScript(ommonds: String[], inputs: any[][], classes?: any[]): any[]`
```js
// 从左到右的参数为
// commonds 执行的命令列表
// inputs 所对应执行的参数
// classes 对应执行类数组(毕竟跨作用域了)
runScript(["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"], [[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]], [DinnerPlates])

// 详见example示例
```