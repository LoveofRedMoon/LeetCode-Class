class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
    /**
     * @static
     * @param {Array} arr
     * @returns {ListNode}
     * @memberof ListNode
     */
    static create(arr) {
        if (!Array.isArray(arr)) return null
        const res = new ListNode(null)
        let temp = res
        for (let i = 0, len = arr.length; i < len; i++)
            temp = temp.next = new ListNode(arr[i])
        return res.next
    }
    /**
     * @static
     * @param {Array} firstArr
     * @param {Array} secondArr
     * @param {Array} IntersectArr
     * @returns {[ListNode, ListNode]}
     * @memberof ListNode
     */
    static createIntersectList(firstArr, secondArr, IntersectArr) {
        if (
            !Array.isArray(firstArr) ||
            !firstArr.length ||
            !Array.isArray(secondArr) ||
            !secondArr.length ||
            !Array.isArray(IntersectArr)
        )
            return null
        const f = ListNode.create(firstArr),
            s = ListNode.create(secondArr),
            ff = f.getLast(),
            ss = s.getLast(),
            i = ListNode.create(IntersectArr)
        ff.next = ss.next = i
        return [f, s]
    }
    /**
     * @static
     * @param {ListNode} root
     * @returns {Array}
     * @memberof ListNode
     */
    static show(root) {
        if (!(root instanceof ListNode)) return []
        const res = []
        let temp = root
        while (temp) {
            res.push(temp.val)
            temp = temp.next
        }
        return res
    }
    /**
     * @returns {Array}
     * @memberof ListNode
     */
    show() {
        if (!(this instanceof ListNode)) return []
        const res = []
        let temp = this
        while (temp) {
            res.push(temp.val)
            temp = temp.next
        }
        return res
    }
    /**
     * 可视化展示
     * @memberof ListNode
     */
    visualShow() {
        console.log(ListNode.show(this).join(' -> '))
    }
    /**
     * @returns {ListNode}
     * @memberof ListNode
     */
    getLast() {
        let root = this
        while (root.next) root = root.next
        return root
    }
    /**
     * @static
     * @param {Number} n
     * @returns {ListNode}
     * @memberof ListNode
     */
    static mock(n) {
        const arr = Array(n)
            .fill(0)
            .map((v, i) => i + 1)
            .sort(() => Math.random() < 0.5)
        return ListNode.create(arr)
    }
}

class Interval {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
    /**
     * @static
     * @param {Array[]} arr[]
     * @returns {Interval[]}
     * @memberof Interval
     */
    static createList(arr) {
        if (!Array.isArray(arr)) return null
        return arr.map(v => new Interval(v[0], v[1]))
    }
    /**
     * @static
     * @param {Interval} root
     * @returns {Array}
     * @memberof Interval
     */
    static show(root) {
        if (!(root instanceof Interval)) return null
        return [root.start, root.end]
    }
    /**
     * @returns {Array}
     * @memberof Interval
     */
    show() {
        if (!(this instanceof Interval)) return null
        return [this.start, this.end]
    }
    /**
     * @static
     * @param {Interval[]} roots
     * @returns {Array}
     * @memberof Interval
     */
    static showList(roots) {
        if (!Array.isArray(roots)) return null
        return roots.map(v => [v.start, v.end])
    }
}

class Employee {
    /**
     *Creates an instance of Employee.
     * @param {Number} id
     * @param {Number} importance
     * @param {Number[]} subordinates
     * @memberof Employee
     */
    constructor(id, importance, subordinates) {
        this.id = id
        this.importance = importance
        this.subordinates = subordinates
    }
    /**
     * @static
     * @param {[Number, Number, Number[]][]} arr
     * @returns {Employee[]}
     * @memberof Employee
     */
    static createArr(arr) {
        return arr.map(v => new Employee(v))
    }
}

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
    /**
     * @static
     * @param {Array} arr
     * @returns {TreeNode}
     * @memberof TreeNode
     */
    static create(arr) {
        if (!Array.isArray(arr)) return null
        const res = new TreeNode(arr[0])
        let temp = [res]
        for (let i = 1, len = arr.length; i < len; i += 2) {
            const cur = temp.shift()
            if (!cur) break
            if (arr[i] !== null) temp.push((cur.left = new TreeNode(arr[i])))
            if (i + 1 < len && arr[i + 1] !== null)
                temp.push((cur.right = new TreeNode(arr[i + 1])))
        }
        return res
    }
    /**
     * 不写作成员方法为了入参为null
     * @static
     * @param {TreeNode} root
     * @returns {Array}
     * @memberof TreeNode
     */
    static show(root) {
        // 排除其他情况
        if (!(root instanceof TreeNode)) return []
        const res = []
        let temp = [root]
        while (temp.length) {
            const cur = temp.shift()
            if (cur === null) {
                res.push(null)
                continue
            }
            res.push(cur.val)
            temp.push(cur.left)
            temp.push(cur.right)
        }
        // 去除数组末尾的null
        let lastIndex = res.length
        while (lastIndex-- > 0 && res[lastIndex] === null);
        res.splice(lastIndex + 1, res.length - lastIndex - 1)
        return res
    }
    /**
     * @returns {Array}
     * @memberof TreeNode
     */
    show() {
        return TreeNode.show(this)
    }
    /**
     * 可视化展示
     * @memberof TreeNode
     */
    visualShow(isVertical) {
        if (isVertical) {
            // 配置一行最多输出字符数
            const maxCharNum = 100
            console.log('---- 折行显示会错位 ----')
            const res = [[this.val]]
            let temp = [this.left, this.right]
            while (
                temp.some(v => v !== null) &&
                temp.reduce(
                    (p, v) => p + (v === null ? 1 : v.toString().length + 1)
                ) < maxCharNum
            ) {
                res.push(temp)
                temp = temp.reduce(
                    (p, v) => (
                        v === null
                            ? p.push(null, null)
                            : p.push(v.left, v.right),
                        p
                    ),
                    []
                )
            }
            // 处理各层字符串的位置
        } else {
            // 配置最多输出层数
            const maxDepth = 6
            console.log('---- 上为左, 下为右 ----')
            let res = [this.val + ''],
                temp = [this]
            for (let i = 0; i < maxDepth && temp.length; i++) {
                const lres = [],
                    ltemp = []
                temp.forEach((v, i) => {
                    if (!v) {
                        ltemp.push(null)
                        lres.push(res[i])
                    } else {
                        ltemp.push(v.left)
                        lres.push(res[i] + (v.left ? ' -> ' + v.left.val : ''))
                        if (v.right) {
                            ltemp.push(v.right)
                            lres.push(
                                ' '.repeat(res[i].length) + ' ↘→ ' + v.right.val
                            )
                        }
                    }
                })
                res = lres
                temp = ltemp
            }
            console.log(res.join('\n'))
        }
    }
}

module.exports = { ListNode, TreeNode, Interval }
