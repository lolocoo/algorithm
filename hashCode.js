function hashCode (str) {
    return str.split('').reduce((pre, cur) => {
        let hash = ((pre << 5) - pre) + cur.charCodeAt(0)
        return hash & hash
    }, 0)
}
