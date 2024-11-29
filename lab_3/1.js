const randomNumber = (min, max) => {
    if (!max) {
        max = min
        min = 0
    }
    return min + Math.floor(Math.random() * (max - min + 1))
}

console.log(randomNumber(2, 8))
console.log(randomNumber(3))