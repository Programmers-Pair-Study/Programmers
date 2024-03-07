// 기존 풀이
// const line = parseInt(require("fs").readFileSync("/dev/stdin") + "");
// const findShortCut = (line) => {
//   let count = 0;
//   let acc = 1;

//   if (line === 1) return 1;

//   while (acc < line) {
//     acc = acc + count * 6;
//     count++;
//   }
//   return count;
// };
// console.log(findShortCut(line));

// 다른 사람의 풀이 (1등)
const line2 = parseInt(require("fs").readFileSync("/dev/stdin") + "");
let x = 1;
let c = 1;
while (x < line) {
  x += 6 * c;
  ++c;
}
console.log(c);

// refactor
const line = parseInt(require("fs").readFileSync("/dev/stdin") + "");
const findShortCut = (line) => {
  let acc = 1;
  let count = 1;
  while (acc < line) {
    acc += 6 * count;
    ++count; // 전위, 후위 연산자 관습적으로 사용하지 않도록 하기 (동작 방식에 대한 이해 필요)
  }
  return count;
};
console.log(findShortCut(line));
