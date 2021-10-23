const fatorial = n => {
  n = parseInt(n);
  
  if (isNaN(n)) {
    return 'Número inválido!';
  } else if (n === 1) {
    return 1;
  } else if (n <= 0) {
    return `${n}: Nulo ou negativo!`;
  } 
  
  let arr = [];
  while (n > 1) {
    arr.push(n);
    n--;
  }
  
  const fatorial = arr.reduce((prev, current) => prev * current);
  
  return fatorial;
};

module.exports = fatorial;