// Bubble Sort
const gen = require('./generator')

function swap (s, fIndex, sIndex) {
    let temp = s[fIndex]
    s[fIndex] = s[sIndex]
    s[sIndex] = temp
}

function bubbleSort(store) {
    let nums = store.length
    for (let outer = nums; outer >= 2; --outer ) {
        for (let inner = 0; inner < outer; ++inner) {
            if (store[inner] > store[inner+1]) {
                swap(store, inner, inner + 1)
            }
        }
    }
    return store
}

function selectionSort(store) {
    let min, len = store.length
    for (let outer = 0; outer <= len - 2; ++outer) {
        min = outer
        for (let inner = outer + 1; inner <= len - 1; ++inner) {
            if (store[inner] < store[min]) {
                min = inner
            }
        }
        swap(store, outer, min)
    }
    return store
}

function insertionSort(store) {
    let temp, inner, len = store.length
    for (let outer = 1; outer <= len - 1; ++outer) {
        temp = store[outer]
        inner = outer
        while (inner > 0 && (store[inner - 1] >= temp)) {
            store[inner] = store[inner - 1]
            --inner
        }
        store[inner] = temp
    }
    return store
}

let randomArr = gen.getRandomNumbers({amount: 100000, min: 1, max: 1000000})
// console.log(bubbleSort(randomArr))
// console.log(selectionSort(randomArr))
console.log(insertionSort(randomArr))