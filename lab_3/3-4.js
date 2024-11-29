const func = (ip) => {
    let answer = 0
    const numbers = ip.split('.')
    for (let i = 0; i < numbers.length; i++) {
        answer = answer << 8
        answer += Number(numbers[i])
    }
    return answer
}
console.log(func('127.0.0.1'))

const task = (object) => {
    let answer = []
    for (let key in object) {
        let el = object[key]
        if (typeof el === 'function') {answer.push([key, el.length])}
    }
    return answer
}
const data = {
    idThing: func,
    number: 21,
    uselessAddition: true,
    what: (a, b) => null
}
console.log(task(data))
