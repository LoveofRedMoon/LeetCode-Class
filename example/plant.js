const { runScript } = require('../index')

/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.capacity = capacity
    this.all = []
    this.emptyPos = []
}

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    if (this.emptyPos.length) {
        this.all[this.emptyPos[0]] = val
        this.emptyPos.shift()
    } else this.all.push(val)
}

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    while (this.all.length) {
        const p = this.all.pop()
        if (p !== undefined) return p
    }
    return -1
}

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    // 尝试拿出第 (index+1)*capacity-1 - index*capacity
    const capacity = this.capacity
    const start = Math.min(this.all.length - 1, (index + 1) * capacity - 1)
    const end = index * capacity
    if (start < end) return -1
    const all = this.all
    for (let i = start; i >= end; i--) {
        if (all[i] !== undefined) {
            // 拿出这个
            const l = this.emptyPos.length
            for (let j = 0; j < l; j++) {
                if (this.emptyPos[j] > i) {
                    this.emptyPos.splice(j, 0, i)
                    const val = all[i]
                    all[i] = undefined
                    return val
                }
            }
            this.emptyPos.push(i)
            const val = all[i]
            all[i] = undefined
            return val
        }
    }
    return -1
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
const ml = [
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
]
const input = [
    [2],
    [1],
    [2],
    [3],
    [4],
    [5],
    [0],
    [20],
    [21],
    [0],
    [2],
    [],
    [],
    [],
    [],
    []
]

runScript(ml, input, [DinnerPlates])
