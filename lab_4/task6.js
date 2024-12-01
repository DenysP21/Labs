const maxElement = (matrix) => {
    let array = matrix.flat(Infinity);
    let answer = array[0];
    for (const i of array) {
        if (answer < i) answer = i;
    }
    return answer;
}
const matrix = [[2,7,0],[-5,8,7],[-3,12, 12.1]];
console.log(maxElement(matrix));