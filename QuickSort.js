const gen = require('./generator')

function quickSort (arr) {
    let [ len, left, mid, right ] = [arr.length, [], arr[0], []]
    if (len <= 1) return arr
    for (let i = 1; i < len - 1; i++) {
        (arr[i] < mid ? left : right).push(arr[i])
    }
    return [ ...quickSort(left), mid,  ...quickSort(right)]
}
let randomArr = gen.getRandomNumbers({amount: 10, min: 1, max: 100})
console.log(quickSort(randomArr))
