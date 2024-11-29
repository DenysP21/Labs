const inc1 = (x) => (x+=1)
/* Test
const a = 5
const b = inc1(a)
console.dir({a,b})   // {a:5, b:6}
*/

const inc2 = (num) => (num.n+=1)
/*Test
const obj = {n: 5}
inc2(obj);
console.dir(obj) // {n: 6}
*/