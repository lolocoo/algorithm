// hash table
class HashTable {
    constructor() {
        this.table = []
    }
    hash(data) {
        let total = 0
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i)
        }
        return total
    }
    put(data) {
        let pos = this.hash(data)
        this.table[pos] = data
    }
    get(key) {
        return this.table[this.hash(key)]
    }
    showDistro() {
        let n = 0
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(`${i} : ${this.table[i]}`)
            }
        }
    }
}

let someNames = [
    'David',
    'Jennifer',
    'Donnie',
    'Raymond',
    'Cynthia',
    'Mike',
    'Clayton',
    'Danny',
    'Jonathan',
]
let hTable = new HashTable()
for (let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i])
}
hTable.showDistro()