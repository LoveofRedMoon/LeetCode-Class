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
    for (let i = 0, len = arr.length; i < len; i++) temp = temp.next = new ListNode(arr[i])
    return res.next
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
   * 可视化展示
   * @memberof ListNode
   */
  visualShow() {
    console.log(ListNode.show(this).join(' -> '))
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
      if (i + 1 < len && arr[i + 1] !== null) temp.push((cur.right = new TreeNode(arr[i + 1])))
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
      while (temp.some(v => v !== null) && temp.reduce((p, v) => p + (v === null ? 1 : v.toString().length + 1)) < maxCharNum) {
        res.push(temp)
        temp = temp.reduce((p, v) => (v === null ? p.push(null, null) : p.push(v.left, v.right), p), [])
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
;(function() {
  const root = this
  if (typeof window !== 'undefined' && root === window) {
    isBrowserSide = true
  } else {
    module.exports = { ListNode, TreeNode }
  }
}.call(this))
