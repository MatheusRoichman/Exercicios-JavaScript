const fatorial = n => {
  n = parseInt(n);
  
  if (n === 0 || n === 1) return 1;
  if (n < 0 || isNaN(n)) return `Valor inválido!`;
  
  let arr = [];
  while (n > 1) {
    arr.push(n);
    n--;
  }
  
  const fatorial = arr.reduce((prev, current) => prev * current);
  
  return fatorial;
};

module.exports = fatorial;