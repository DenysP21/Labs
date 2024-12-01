const object = { a: 0, b: 1, c: 2 };
const swap = (key, value, object) => {
    let answer = { ...object };
    delete answer[key];
    answer[value] = key;
    console.dir(answer);
}
const iterate = (obj, f) => {
    for (const key in obj) {
            f(key, obj[key], obj);
    }
}
iterate(object, swap);