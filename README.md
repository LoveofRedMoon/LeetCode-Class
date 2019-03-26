# LeetCode-Class

主要是 JavaScript 在 LeetCode 上面的 `ListNode`, `TreeNode`, `Interval`, 方便各位调试

## ListNode

链表结构

构造函数: `ListNode`

通过数组创建链表(遵循 LeetCode 题目规范): `ListNode.create(arr : Array) : ListNode`

通过数组创建交叉链表(遵循 LeetCode 题目规范, 如 160 题): `ListNode.createIntersectList(firstArr: Array<any>,secondArr: Array<any>IntersectArr: Array<any>) : [ListNode, ListNode]`, 参数依次为: 首个链表未交叉部分, 下个链表未交叉部分, 交叉部分

将链表转化为数组进行输出: `ListNode.prototype.show() : Array`

获取链表最后一个`ListNode`: `ListNode.prototype.getLast() : ListNode`

拓展(还未开工): 随机构建一个长度为 m 的链表: `ListNode.mock(m : Number) : ListNode`

## Interval

区间结构

构造函数: `Interval`

通过数组创建区间数组(遵循 LeetCode 题目规范): `Interval.createList(arr : Array[]) : Interval[]`

将链表转化为数组进行输出: `Interval.show() : Array`

将链表数组转化为数组进行输出: `Interval.showList() : Array[]`

## Employee

区间结构

构造函数: `Employee`

将 LeetCode 的 Employee 样例转换为 Employee 数组(遵循 LeetCode 题目规范): `Employee.createArr(arr: [number, number, number[]][]) : Employee[]`

## TreeNode

二叉树形结构

构造函数: `TreeNode`

通过数组创建二叉树(遵循 LeetCode 题目规范): `TreeNode.create(arr : Array) : TreeNode`

将二叉树转化为数组进行输出: `TreeNode.prototype.show() : Array`

拓展(还未开工):
