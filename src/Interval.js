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

module.exports = Interval
