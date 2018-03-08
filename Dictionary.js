class Dictionary {
    constructor () {
        this.store = {}
    }
    add (key, val) {
        this.store[key] = val
    }
    find (key) {
        return this.store[key]
    }
    remove (key) {
        delete this.store[key]
    }
    count () {
        return Object.keys(this.store).length
    }
    clear () {
        Object.keys(this.store).forEach(key => delete this.store[key])
    }
    showAll () {
        Object.keys(this.store).forEach(key => console.log(`${key} -> ${this.store[key]}`))
    }
}

let book = new Dictionary()
book.add('Mike', '123')
book.add('David', '345')
book.add('Cynthia', '456')
book.showAll()