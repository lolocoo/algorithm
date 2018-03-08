class Stack {
    constructor() {
        this.store = []
        this.top = 0
    }
    push(elem) {
        this.store[this.top++] = elem
    }
    pop() {
        return this.store[--this.top]
    }
    peek() {
        return this.store[this.top - 1]
    }
    clear() {
        this.top = 0
    }
    length() {
        return this.top
    }
}

let stack = new Stack()

stack.push('david')
stack.push('raymond')
stack.push('bryan')

console.log(stack.length())