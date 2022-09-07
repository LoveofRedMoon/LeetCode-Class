//declare module 'leetcode-class' {
export class ListNode<T = any> {
    static create<T = any>(arr: Array<T>): ListNode<T>;
    static show<T = any>(root: ListNode<T> | null): Array<T>;
    static createIntersectList<T = any>(
        firstArr: Array<T>,
        secondArr: Array<T>,
        IntersectArr: Array<T>
    ): [ListNode<T>, ListNode<T>] | null;
    constructor(val?: T, next?: ListNode<T> | null);
    visualShow(): void;
    getLast(): ListNode<T>;
    next: ListNode<T> | null;
    val: T;
}
export class Interval<T = any> {
    static createList<T = any>(arr: Array<T>[]): Interval<T>[];
    static show<T = any>(root: Interval<T> | null): Array<T> | null;
    static showList<T = any>(root: Interval<T>[]): Array<T>[];
    constructor(start: T, end: T);
    start: T;
    end: T;
}
export class Employee {
    constructor(id: number, importance: number, subordinates: number[]);
    static createArr(arr: [number, number, number[]][]): Employee[];
    id: number;
    importance: number;
    subordinates: number[];
}
export class TreeNode<T = any> {
    static create<T = any>(arr: Array<T>): TreeNode<T>;
    static show<T = any>(root: TreeNode<T> | null): Array<T>;
    constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null);
    visualShow(): void;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    val: T;
}
export class Heap<T = any> {
    constructor(
        initialArray: T[],
        valueFunction: (element: T) => number,
        isMaxHeap: boolean /* = false */
    );
    add(element: T): number;
    delete(): T | null;
    value: Array<T>;
}
export function runScript(
    commonds: String[],
    inputs: any[][],
    classes: any[] | any
): any[];
// }
