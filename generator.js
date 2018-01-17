const [ MAX, MIN, STRING, AMOUNT ] = [
    1E5,
    0,
    'ABCDEDFHIJKLMNOPQRSTUVWXYZabcdedfhijklmnopqrstuvwxyz0123456789_',
    20
]
const { floor, random } = Math

function getRandomNumber (min = MIN, max = MAX) {
    return floor(random() * (max - min)) + min
}

function getRandomNumbers ({ amount = AMOUNT, min = MIN, max = MAX } = {}) {
    let arr = []
    while (amount--) {
        arr.push(getRandomNumber(min, max))
    }
    return arr
}

function getDescRandomNumbers ({ amount = AMOUNT, min = MIN, max = MAX } = {}) {
    return getRandomNumbers(amount, min, max).sort((a, b) => a < b ? 1 : -1 )
}

function getEscRandomNumbers ({ amount = AMOUNT, min = MIN, max = MAX } = {}) {
    return getRandomNumbers(amount, min, max).sort((a, b) => a > b ? 1 : -1 )
}

function getRandomString (string = STRING) {
    return string.charAt(floor(random() * string.length))
}

function getRandomStrings ({ amount = AMOUNT, string = STRING } = {}) {
    let str = []
    while(amount--) {
        str.push(getRandomString(string))
    }
    return str.join('')
}
function noRepeat (...args) {
    let isString = typeof(args[0]) === 'string'
    return isString ? [...new Set(args[0])].join('') : [...new Set(args)]
}
module.exports = {
    getRandomNumber,
    getRandomNumbers,
    getRandomString,
    getRandomStrings,
    noRepeat
}
