const pipe = (...fns) => {
    fns.forEach(fn => {
      if (typeof fn !== 'function') {
        throw new Error('All arguments must be functions');
      }
    });

    return (x) => fns.reduce((acc, fn) => fn(acc), x);
  }
  
  const inc = x => ++x;
  const twice = x => x * 2;
  const cube = x => x ** 3;

  const f = pipe(inc, twice, cube);
  const g = pipe(inc, inc);

  const result = f(3);
  const result2 = g(7);

  console.log(result); 
  console.log(result2);