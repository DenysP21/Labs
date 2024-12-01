const unique = (array) => {
    return Array.from(new Set(array));
}

const result1 = unique([2, 1, 1, 3, 2]);
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result1); 
console.log(result2);