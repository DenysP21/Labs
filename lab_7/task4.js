const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [5, -2, 'Kyiv', 0, Infinity, 9];

const removeElements = (array, ...remove) => {
    return array.filter(item => !remove.includes(item));
}

const difference = (array1, array2) => removeElements(array1, ...array2);
console.dir(difference(array1, array2));