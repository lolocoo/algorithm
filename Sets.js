/*
 * ES6 实现了 Set
 * let set = new Set()
 * set.add(val)
 * set.has(val)
 * set.delete(val)
 * set.clear()
 * set.keys()
 * set.values()
 * set.entries()
 * set.size
 * let a = new Set([1,2,3])
 * let b = new Set([4,3,2])
 * 
 * let union = new Set([...a, ...b])
 * let intersect = new Set([...a].filter(x => b.has(x)))
 * let difference = new Set([...a].filter(x => !b.has(x)))
 */

class Set {
    constructor() {
        this.store = []
    }
    add(data) {
        if (this.store.indexOf(data) !== -1) return false
        this.store.push(data)
        return true
    }
    remove(data) {
        let pos = this.store.indexOf(data)
        if (pos === -1) return false
        this.store.splice(pos, 1)
        return true
    }
    size() {
        return this.store.length
    }
    union(set) {
        let temp = new Set()
        for (let val of this.store) {
            temp.add(val)
        }
        for (let val of set.store) {
            !temp.contains(val) && temp.add(val)
        }
        return temp
    }
    contains(data) {
        return this.store.indexOf(data) === -1 ? false : true
    }
    intersect(set) {
        let temp = new Set()
        for (let val of this.store) {
            set.contains(val) && temp.add(val)
        }
        return temp
    }
    subset(set) {
        if (this.size() > this.set.size()) return false
        for (let val of this.store) {
            if (!set.contains(val)) return false
        }
        return true
    }
    difference(set) {
        let temp = new Set()
        for (let val in this.store) {
            !set.contains(val) && temp.add(val)
        }
        return temp
    }
    show() {
        return this.store
    }
}

let setA = new Set()
let setB = new Set()

setA.add('roc')
setB.add('wang')
setB.add('roc')

let unionSet = setA.union(setB)
console.log(unionSet.show())