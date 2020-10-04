declare module 'leetcode-class' {
  export class ListNode<T = any> {
    static create(arr: Array<T>): ListNode
    static show(root: ListNode | null): Array<T>
    static createIntersectList(
      firstArr: Array<T>,
      secondArr: Array<T>,
      IntersectArr: Array<T>
    ): [ListNode, ListNode] | null
    constructor(val: T)
    visualShow(): void
    getLast(): ListNode
    next: ListNode | null
    val: T
  }
  export class Interval<T = any> {
    static createList(arr: Array[]): Interval[]
    static show(root: Interval | null): Array | null
    static showList(root: Interval[]): Array[]
    constructor(start: T, end: T)
    start: T
    end: T
  }
  export class Employee {
    constructor(id: number, importance: number, subordinates: number[])
    static createArr(arr: [number, number, number[]][])
    id: number
    importance: number
    subordinates: number[]
  }
  export class TreeNode<T = any> {
    static create(arr: Array<T>): TreeNode
    static show(root: TreeNode | null): Array<T>
    constructor(val: any)
    visualShow(): void
    left: TreeNode | null
    right: TreeNode | null
    val: T
  }
  export class Heap<T = any> {
    constructor(
      initialArray: T[],
      valueFunction: (element: T) => number,
      isMaxHeap: boolean = false
    )
    add(element: T): number
    delete(): T | null
  }
  export function runScript(
    commonds: String[],
    inputs: any[][],
    classes?: any[]
  ): any[]
}
