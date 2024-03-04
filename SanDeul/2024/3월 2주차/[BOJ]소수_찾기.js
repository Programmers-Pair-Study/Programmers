const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("\n");

const numCount = input[0];
const numbers = input[1].split(" ");

const checkDecimal = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const countDecimal = (numbers) => {
  return numbers.reduce((acc, cur) => (checkDecimal(cur) ? acc + 1 : acc), 0);
};

console.log(countDecimal(numbers));
