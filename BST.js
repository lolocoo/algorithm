/* Binary Search Tree
* http://js-algorithms.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
* 3 traversal functions used BST: inOrder, preOrder, postOrder (中序，先序，后序)
*
*
*
*
*
*/
let gen = require('./generator.js')

class Node {
    constructor (data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
    show () {
        return this.data
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }
    insert(data) {
        let node = new Node(data)
        if (this.root == null) {
            this.root = node
        } else {
            let current = this.root, parent
            while (true) {
                parent = current
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = node
                        break
                    }
                } else {
                    current = current.right
                    if (current == null) {
                        parent.right = node
                        break
                    }
                }
            }
        }
    }
    inOrder (node = this.root, callback) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.show())
            callback(node.data)
            this.inOrder(node.right)
        }
    }
    preOrder (node = this.root) {
        if (node !== null) {
            console.log(node.show())
            callback(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    postOrder (node = this.root) {
        if (node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            callback(node.data)
            console.log(node.show())
        }
    }
    min () {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }
    max () {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }
    find (data) {
        let current = this.root
        while (current.data != data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            if (current == null) {
                return null
            }
        }
        return current
    }
    remove (data) {
        let getSmallest = function (node) {
            let smallest = node
            while (smallest.left !== null) {
                smallest = smallest.left
            }
            return smallest
        }
        let removeNode = function(node, data) {
            if (node == null) return null
            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null
                }
                // node has no left child
                if (node.left == null) {
                    return node.right
                }
                // node has no right child
                if (node.right == null) {
                    return node.left
                }
                let tempNode = getSmallest(node.right)
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            } else if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        return removeNode(this.root, data)
    }
}

let bst = new BinarySearchTree()

bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)

// console.log(bst.inOrder())
// console.log(bst.max())
console.log(bst.remove(99))