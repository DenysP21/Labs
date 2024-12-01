const concat = (func, ...expectedTypes) => (...inputs) => {
    inputs.forEach((input, index) => {
      const expectedType = expectedTypes[index].name.toLowerCase();
      if (typeof input !== expectedType) {
        throw new TypeError(`Parameter at index ${index} must be of type ${expectedType}`);
      }
    });
  
    const output = func(...inputs);
    const resultType = expectedTypes[expectedTypes.length - 1].name.toLowerCase();
    if (typeof output !== resultType) {
      throw new TypeError(`Returned value must be of type ${resultType}`);
    }
  
    return output;
  };
  
  const sum = (x, y) => x + y;
  const enforceSum = concat(sum, Number, Number, Number);
  const result = enforceSum(2, 1);
  console.dir(result);
  module.exports = { concat };