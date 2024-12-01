function store (x) {
    return function() {
        return x;
    }
}
let read = store('This is lab number 8.');
let value = read();
console.log(value);
