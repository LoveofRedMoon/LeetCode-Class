# LeetCode-Class

This project is convenient for you to debug `LeetCode`

includes `ListNode`, `TreeNode`, `Interval`, `Employee`

## ListNode

### Constructor

```js
const node = new ListNode(val)
```

### Initialize using an array

(Follow LeetCode topic specifications): `ListNode.create(arr : Array) : ListNode`

```js
const head = ListNode.create([1, 2, 3, 4, 5])
```

### Visual display

`ListNode.prototype.visualShow() : void`

```js
const head = ListNode.create([1, 2, 3, 4, 5])

head.visualShow()
//1 -> 2 -> 3 -> 4 -> 5
```

### Initialize Cross linked List using arrays

(Follow LeetCode topic specifications, Example Question 160): `ListNode.createIntersectList(firstArr: Array<any>,secondArr: Array<any>IntersectArr: Array<any>) : [ListNode, ListNode]`, parameters are: first ListArray Uncrossed, second ListArray Uncrossed, crossed

```js
const [head1, head2] = ListNode.createIntersectList([1, 2], [3, 4], [5, 6])
```

### Transform ListNodes to array

`ListNode.prototype.show() : Array`

```js
const head = ListNode.create([1, 2, 3])

head.show()
// [1,2,3]
ListNode.show(head)
// [1,2,3]
```

### Get the last ListNode for a ListNode

`ListNode.prototype.getLast() : ListNode`

```js
const head = ListNode.create([1, 2, 3])

head.getLast().show()
// [3]
```

### Mock a ListNode with length n

`ListNode.mock(n : Number) : ListNode`

```js
const head = ListNode.mock(5)
```

## Interval

### Constructor

`Interval`

```js
const interval = new Interval(1, 3)
```

### Initialize using an array

(Follow LeetCode topic specifications): `Interval.createList(arr : Array[]) : Interval[]`

```js
const intervals = Interval.createList([
  [1, 2],
  [3, 4]
])
```

### Transform Interval to array

`Interval.show() : Array`

```js
const interval = new Interval(1, 3)

interval.show()
// [1,3]
Interval.show(interval)
// [1,3]
```

Transform Intervals to arrays: `Interval.showList() : Array[]`

```js
const intervals = Interval.createList([
  [1, 2],
  [3, 4]
])

Interval.showList(intervals)
// [[1,2],[3,4]]
```

## Employee

### Constructor

`Employee`

```js
const employee = new Employee(1)
```

(Follow LeetCode topic specifications): `Employee.createArr(arr: [number, number, number[]][]) : Employee[]`

## TreeNode

### Constructor

`TreeNode`

```js
const node = new TreeNode(5)
```

### Initialize using an array

(Follow LeetCode topic specifications): `TreeNode.create(arr : Array) : TreeNode`

> P.S. LeetCode title specification is From top to bottom, from left to right, indispensable position fill with`null`

```js
const head = TreeNode.create([1, 2, 3, null, 4, null, null, 5, 6])
```

### Transfrom TreeNode to array

`TreeNode.prototype.show() : Array`

```js
const head = TreeNode.create([1, 2, 3, null, 4, null, null, 5, 6])

head.show()
// [1,2,3,null,4,null,null,5,6]
TreeNode.show(head)
// [1,2,3,null,4,null,null,5,6]
```

### Visual display

`TreeNode.prototype.visualShow() : void`

```js
const head = TreeNode.create([1, 2, 3, null, 4, null, null, 5, 6])

head.visualShow()
// 1 -> 2
//        ↘→ 4 -> 5
//             ↘→ 6
//   ↘→ 3
```

## RunScript(For Constructor)

> For Question `1172`, Dinner Plate Stacks. `issue` is need For this is Test

### Run

Execute input parameters in a certain order
`function runScript(ommonds: String[], inputs: any[][], classes?: any[]): any[]`

```js
// The parameters from left to right are
// commonds : List of executed commands
// inputs : Corresponding execution parameters
// classes : Corresponding execution class array
runScript(
  [
    'DinnerPlates',
    'push',
    'push',
    'push',
    'push',
    'push',
    'popAtStack',
    'push',
    'push',
    'popAtStack',
    'popAtStack',
    'pop',
    'pop',
    'pop',
    'pop',
    'pop'
  ],
  [[2], [1], [2], [3], [4], [5], [0], [20], [21], [0], [2], [], [], [], [], []],
  [DinnerPlates]
)

// see example
```

### results compare

please use nodejs `assert` to confirm the result is right.
