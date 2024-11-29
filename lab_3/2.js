const randomString = (n, lettersNumbers) => {
    char = [...lettersNumbers]
    let answer = ''
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * char.length)
        let symbol = char[rand]
        answer = answer.concat(symbol)
    }
    return answer
}
const ukrLetters = 'абвґгдєежзиіїйклмнопрстуфхцчшщьюя'

console.log(randomString(10, lettersNumbers))