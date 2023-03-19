// 내 풀이
function solution(num) {
  let count = 0;

  if (num === 1) {
    return 0;
  }

  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++; // count가 500 이상인데도 끝까지 증가한 다음 평가 - 비효율적인 것 같다.
  }

  if (count >= 500) {
    return -1;
  }

  return count;
} // if 문을 더 줄일 수 있지 않았을까?

// 좋은 풀이
function goodSolution1(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
} // 내 풀이랑 비슷한데 헐씬 깔끔한 것 같다.

function goodSolution2(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : goodSolution2(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
} // 재귀함수 풀이 - 퍼포먼스가 좋진 않다.
