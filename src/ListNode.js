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

module.exports = ListNode
