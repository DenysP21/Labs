const array1 = [1, 2, 3, 4, 5, 6, 7];
const removeElement = (array, element) => {
    let index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
removeElement(array1, 6);
console.log(array1);