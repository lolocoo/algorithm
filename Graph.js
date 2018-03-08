/* Graph
 * 邻接矩阵
 *    A B C D E F G H I 
 *    -----------------
 *  A|0 1 1 1 0 0 0 0 0
 *  B|1 0 0 0 1 1 0 0 0
 *  C|1 0 0 1 0 0 1 0 0
 *  D|1 0 1 0 0 0 1 1 0
 *  E|0 1 0 0 0 0 0 0 1
 *  F|0 1 0 0 0 0 0 0 0
 *  G|0 0 1 1 0 0 0 0 0
 *  H|0 0 0 1 0 0 0 0 0
 *  I|0 0 0 0 1 0 0 0 0
 * 
 *
 * 邻接表 inefficient
 * A | B C D
 * B | A E F
 * C | A D G
 * D | A C G H
 * E | B I 
 * F | B
 * G | C D 
 * H | D
 * I | E
 * 
 * 
 * 
 * Search graph
 * 
 * Breadth-first Search
 * Depth-first Search
 * 
 * Breadth-first leads to shortest path
 * 
 */

const genArr = require('./generator')

function Vetex(label) {
    this.label = label
}

class Graph {
    constructor(v) {
        this.vertices = v
        this.edges = 0
        this.adjacency = []
        this.edgeTo = []
        this.marked = new Array(v).fill(false)
        for (let i = 0; i < this.vertices; i++) {
            this.adjacency[i] = []
        }
    }
    addEdge(v, w) {
        this.adjacency[v].push(w)
        this.adjacency[w].push(v)
        this.edges++
    }
    pathTo(v) {
        let source = 0
        if (!this.hasPathTo(v)) {
            return undefined
        }
        let path = []
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(v)
        }
        path.push(s)
        return path
    }
    hasPathTo(v) {
        return this.marked[v]
    }
    deepFirstSearch(v) {
        this.marked[v] = true
        if (this.adjacency[v] != undefined) {
            console.log('Visited vertex: ' + v)
        }
        for (let w of this.adjacency[v]) {
            if (!this.marked[w]) {
                this.deepFirstSearch(w)
            }
        }
    }
    breadthFirstSearch(s) {
        let queue = []
        this.marked[s] = true
        queue.push(s)
        while(queue.length > 0) {
            let v = queue.shift()
            if (v !== undefined) {
                console.log('Visited vertex: ' + v)
            }
            for (let w of this.adjacency[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v
                    this.marked[w] = true
                    queue.push(w)
                }
            }
        }
    }
    breadthFirstSearchForTheShortestPath () {
        let queue = []
        this.marked[s] = true
        queue.push(s)
        while(queue.length > 0) {
            let v = queue.shift()
            if (v == undefined) {
                console.log('Visited vertex: ' + v)
            }
            for (let w of this.adjacency[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v
                    this.marked[w] = true
                    queue.push(w)
                }
            }
        }
    }
    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            let str = i + ' -> ';
            for (let j = 0; j < this.vertices; j++) {
                let temp = this.adjacency[i][j]
                if (temp !== undefined) {
                    str += temp + ' '
                }
            }
            console.log(str)
        }
    }
}

let g = new Graph(5)

g.addEdge(3, 4)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph()
g.deepFirstSearch(0)