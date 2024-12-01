const sumFor = (...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

const sumForOf = (...arg) => {
    let sum = 0;
    for (const i of arg) {
        sum += i
    }
    return sum;
}

const sumWhile = (...arg) => {
    let sum = 0;
    let i = 0;
    while (i < arg.length) {
        sum += arg[i];
        ++i;
    }
    return sum;
}

const sumDoWhile = (...arg) => {
    let sum = 0;
    let i = 0
    if (arg.length === 0) {
        console.log(0)
        return
    }
    do {
        sum += arg[i]
        ++i
    } while (i < arg.length);
    return sum;
}

const sumArray = (...arg) => {
    let sum = 0;
    if (arg.length === 0) {
        console.log(0);
        return;
    }
    sum = arg.reduce((x, element) => x+element);
    return sum;
}

console.log(sumFor(1, 2, 3));
console.log(sumForOf(3, 5, -2));
console.log(sumWhile(0));
console.log(sumDoWhile(-5, -2, 0));
console.log(sumArray(9, -2, -7));
