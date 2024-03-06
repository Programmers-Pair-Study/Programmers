const line = parseInt(require('fs').readFileSync('/dev/stdin') + '');
const getDisassemble = (line) => {
  for (let i = 1; i <= line; i++) {
    let sumDigit = (i + '')
      .split('')
      .reduce((acc, cur) => acc * 1 + cur * 1, 0);
    if (i + sumDigit === line) {
      return i;
    }
  }
  return 0;
};
console.log(getDisassemble(line));
