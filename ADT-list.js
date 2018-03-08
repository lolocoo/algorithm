class List {
    constructor () {
        this.listSize = 0
        this.pos = 0
        this.dataStore = []
    }
    clear () {
        delete this.dataStore
        this.dataStore = []
        this.listSize = this.pos = 0
    }
    find (elem) {
       return this.dataStore.indexOf(elem)
    }
    toString () {
        return this.dataStore
    }
    insert (elem, after) {
        let pos = this.find(after)
        if (pos > -1) {
           this.dataStore.splice(pos + 1, 0, elem)
           ++this.listSize
           return true
        }
        return false
    }
    append (elem) {
        this.dataStore[this.listSize++] = elem
    }
    remove (elem) {
        let findAt = this.find(elem)
        if (findAt > -1) {
            this.dataStore.splice(findAt, -1)
            return true
        }
        return false
    }
    front () {
        this.pos = 0
    }
    end () {
        this.pos = this.listSize - 1
    }
    prev () {
        if (this.pos > 0) {
            --this.pos
        }
    }
    next () {
        if (this.pos < this.listSize - 1) {
            ++this.pos
        }
    }
    length () {
        return this.listSize
    }
    currPos () {
        return this.pos
    }
    moveTo (pos) {
        this.pos = pos
    }
    getElement () {
        return this.dataStore[this.pos]
    }
    contains (elem) {
        return this.dataStore.indexOf(elem) > -1 ? true : false
    }
}

let list = new List()
list.append('calyton')
list.append('raymond')
list.append('cynthia')
list.append('jennifer')
list.append('bryan')
list.append('danny')

list.next()
console.log(list.getElement())