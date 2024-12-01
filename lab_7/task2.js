const array1 = [1, 2, 3, 4, 5, 6, 7];
const towns = ['Kyiv', 'Kherson', 'Lviv', 'Rivne'];

const removeElements = (array, ...remove) => {
    return array.filter(item => !remove.includes(item));
}

console.dir(removeElements(towns, 'Lviv', 'Lutsk'));
console.dir(removeElements(array1, 3, 5, 0));