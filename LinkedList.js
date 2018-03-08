// linked list
class Node {
    constructor (elem) {
        this.elem = elem
        this.previous = null
        this.next = null
    }
}
class LinkedList {
    constructor () {
        this.head = new Node('head')
    }
    find (item) {
        let currNode = this.head
        while (currNode.elem != item) {
            currNode = currNode.next
        }
        return currNode
    }
    findPrevious (item) {
        let currNode = this.head
        while (!(currNode.next == null) && (currNode.next.elem != item)) {
            currNode = currNode.next
        }
        return currNode
    }
    remove (item) {
        let prevNode = this.findPrevious(item)
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next
        }
    }
    insert (newElem, item) {
        let newNode = new Node(newElem)
        let current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }
    display () {
        let currNode = this.head
        while (!(currNode.next == null)) {
            console.log(currNode.next.elem)
            currNode = currNode.next
        }
    }
}

// let cities = new LinkedList()
// cities.insert('conway', 'head')
// cities.insert('russellvile', 'conway')
// cities.insert('alma', 'russellvile')
// cities.display()

// doubly linked list
class DoublyLinkedList {
    constructor () {
        this.head = new Node('head')
    }
    find (item) {
        let node = this.head
        while (node.elem != item) {
            node = node.next
        }
        return node
    }
    insert (newElem, item) {
        let newNode = new Node(newElem)
        let node = this.find(item)
        newNode.next = node.next
        newNode.previous = node
        node.next = newNode
    }
    findLast () {
        let node = this.head
        while (node.next) {
            node = node.next
        }
        return node
    }
    remove (item) {
        let node = this.find(item)
        if (node.next) {
            node.previous.next = node.next
            node.next.previous = node.previous
            node.next = null
            node.previous = null
        }
    }
    display () {
        let node = this.head
        while (node.next) {
            console.log(node.next.elem)
            node = node.next
        }
    }
    dispReverse () {
        let node = this.findLast()
        while (node.previous) {
            console.log(node.elem)
            node = node.previous
        }
    }
}

// let cities = new DoublyLinkedList()
// cities.insert('conway', 'head')
// cities.insert('russellvile', 'conway')
// cities.insert('alma', 'russellvile')
// cities.display()
// cities.dispReverse()

// circulary linked list
// to be continue ...
class CircularyLinkedList extends LinkedList {
    constructor () {
        super()
        this.head.next = this.head
    }
}