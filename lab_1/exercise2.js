// First method
const array = [false, 217, Infinity, 'Hello', true, 'Denys', 100, false, -Infinity, null, "project"];
let hash= {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0   
};
for(const el of array) {
    const type = typeof el;
    if(type in hash) {
        hash[type] +=1;
    } else {
        hash[type] =1;
    }
}
console.dir(hash)

// Seconde method
const array = [false, 217, Infinity, 'Hello', true, 'Denys', 100, false, -Infinity, null, "project"];
const hash = {};
for(const el of array) {
    const type = typeof el;
    if(type in hash) {
        hash[type] +=1;
    } else {
        hash[type] =1;
    }
}
console.dir(hash)

