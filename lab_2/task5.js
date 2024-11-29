const rangeOdd = (start, end) => {
    let answer = []
    let firstOdd
    if (start % 2 === 1) {firstOdd = start}
    else {firstOdd = start + 1}
    for (let i = firstOdd; i <= end; i += 2) {
        answer.push(i)
    }
    console.dir(answer)
}
rangeOdd(15, 30)
