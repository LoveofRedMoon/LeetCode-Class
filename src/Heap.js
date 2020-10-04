class Heap {
  constructor(initialArray, valueFunction, isMaxHeap) {
    this.isMaxHeap = !!isMaxHeap
    this.valueFunction =
      valueFunction instanceof Function ? valueFunction : null
    this.value = Array.isArray(initialArray) ? initialArray : [initialArray]
    this.init()
  }
  static getValue(el, vF) {
    return vF ? vF.call(el, el) : el
  }
  exchange(i, j) {
    const temp = this.value[i]
    this.value[i] = this.value[j]
    this.value[j] = temp
  }
  init() {
    for (let i = this.value.length; i-- > 1; ) {
      const parentI = Math.floor((i - 1) / 2)
      if (
        (Heap.getValue(this.value[parentI], this.valueFunction) >
          Heap.getValue(this.value[i], this.valueFunction)) ^
        this.isMaxHeap
      ) {
        this.exchange(i, parentI)
      }
    }
  }
  add(el) {
    let idx = this.value.length
    this.value.push(el)
    while (idx) {
      const parentI = Math.floor((idx - 1) / 2)
      if (
        (Heap.getValue(this.value[parentI], this.valueFunction) >
          Heap.getValue(this.value[idx], this.valueFunction)) ^
        this.isMaxHeap
      ) {
        this.exchange(idx, parentI)
      } else {
        return idx
      }
      idx = parentI
    }
    return idx
  }
  delete() {
    if (this.value.length < 1) {
      return null
    }
    const r = this.value[0]
    this.value[0] = this.value.pop()
    let idx = 0
    const len = this.value.length
    const val = Heap.getValue(this.value[idx], this.valueFunction)
    while (1) {
      const sonLeft = idx * 2 + 1
      if (sonLeft >= len) {
        break
      }
      if (val > Heap.getValue(this.value[(sonLeft, this.valueFunction)])) {
        this.exchange(idx, sonLeft)
        idx = sonLeft
        continue
      }
      const sonRight = sonLeft + 1
      if (sonRight >= len) {
        break
      }
      if (val > Heap.getValue(this.value[(sonRight, this.valueFunction)])) {
        this.exchange(idx, sonRight)
        idx = sonRight
        continue
      }
      break
    }
    return r
  }
}

module.exports = Heap
