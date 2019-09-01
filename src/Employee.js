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

module.exports = Employee
