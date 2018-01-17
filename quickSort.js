function quickSort (arr) {
    let [ len, left, mid, right ] = [arr.length, [], arr[0], []]
    if (len <= 1) return arr
    for (let i = 1; i < len; i++) {
        (arr[i] < mid ? left : right).push(arr[i])
    }
    return [ ...quickSort(left), mid,  ...quickSort(right)]
}

let arr = [5, 3, 7, 4, 1, 9, 8, 6, 2]
console.log(quickSort(arr))
