const seq = (f) => {
    return func = (g) => {
        if (typeof g === 'number') {
            return f(g)
        }
        if (typeof g === 'function') {
            return seq(y => f(g(y)))}
    }
}
const x = seq(y => y + 3)(y => y * 2)(y => ++y)(21)
console.log(x)