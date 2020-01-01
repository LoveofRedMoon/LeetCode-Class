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
   * static method for the parameter might be null
   * @static
   * @param {TreeNode} root
   * @returns {Array}
   * @memberof TreeNode
   */
  static show(root) {
    // exclude some error
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
    // skip null at the end of array
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
      // config the max length of one line
      const maxCharNum = 100
      console.log('---- it will misplaced if line breaks ----')
      const res = [[this.val]]
      let temp = [this.left, this.right]
      while (
        temp.some(v => v !== null) &&
        temp.reduce((p, v) => p + (v === null ? 1 : v.toString().length + 1)) <
          maxCharNum
      ) {
        res.push(temp)
        temp = temp.reduce(
          (p, v) => (
            v === null ? p.push(null, null) : p.push(v.left, v.right), p
          ),
          []
        )
      }
      // TODO
    } else {
      const maxDepth = 6
      console.log('---- Upper means left, and Lower means right ----')
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
              lres.push(' '.repeat(res[i].length) + ' ↘→ ' + v.right.val)
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

module.exports = TreeNode
