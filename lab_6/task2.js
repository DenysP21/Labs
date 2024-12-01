const createComposedFunction = (...fns) => {
  let errorHandler = null;

  const compose = (x) => {
    try {
      return fns.reduceRight((acc, fn) => {
        return fn(acc);
      }, x);
    } catch (e) {
      if (errorHandler) {
        errorHandler(e);
      }
      return undefined;
    }
  };

  compose.on = (event, handler) => {
    if (event === 'error') {
      errorHandler = handler;
    }
  };

  return compose;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = createComposedFunction(cube, twice, inc);

const result = f(3); 
console.log(result); 

f.on('error', e => {
  console.log('Произошла ошибка:', e);
});

const g = createComposedFunction(x => { throw new Error('Oops!'); }, twice, inc);
const resultWithError = g(5);
console.log(resultWithError);
