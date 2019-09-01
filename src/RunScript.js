const reg = /[^a-zA-Z0-9_]/
/**
 * 生成eval执行语句
 *
 * @param {String[]} commonds
 * @param {any[][]} inputs
 * @param {Object[]} classes
 * @returns {any[]}
 */
function run(commonds, inputs, classes) {
    if (commonds.some(v => reg.test(v)) || inputs.some(v => reg.test(v)))
        throw new Error('可能包含注入性代码, 请手动执行')
    if (inputs.some(v => v && !Array.isArray(v)))
        console.warn('输入参数若不是数组, 将转为空')
    if (!classes) classes = []
    if (!Array.isArray(classes)) classes = [classes]
    const classNames = classes.map(v => v.name)
    let preObj = null
    const res = commonds.map((v, i) => {
        const input = Array.isArray(inputs[i]) ? inputs[i] : []
        const index = classNames.indexOf(v)
        if (index > -1) {
            preObj = new classes[index](...input)
            return null
        } else {
            const res = preObj[v].apply(preObj, input)
            if (res === undefined) return null
            return res
        }
    })
    return res
}

module.exports = run
