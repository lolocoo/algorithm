// priority queues

class Queue {
    constructor() {
        this.store = []
    }
    enqueue(elem) {
        this.store.push(elem)
    }
    dequeue() {
        this.store.shift()
    }
    front() {
        return this.store[0]
    }
    back() {
        return this.store[this.store.length - 1]
    }
    empty() {
        return this.store.length ? false : true
    }
    toString() {
        return this.store.join('\n')
    }
}