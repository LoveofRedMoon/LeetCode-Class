declare module 'leetcode-class' {
  export class ListNode {
    static create(arr: Array<any>): ListNode
    static show(root: ListNode | null): Array<any>
    constructor(val: any)
    visualShow(): void
    next: TreeNode | null
    val: any
  }
  export class Interval {
    static createList(arr: Array[]): Interval[]
    static show(root: Interval | null): Array | null
    static showList(root: Interval[]): Array[]
    constructor(start: any, end: any)
    start: any
    end: any
  }
  export class Employee {
    constructor(id: number, importance: number, subordinates: number[])
    static createArr(arr: [number, number, number[]][])
    id: number
    importance: number
    subordinates: number[]
  }
  export class TreeNode {
    static create(arr: Array<any>): TreeNode
    static show(root: TreeNode | null): Array<any>
    constructor(val: any)
    visualShow(): void
    left: TreeNode | null
    right: TreeNode | null
    val: any
  }
}
