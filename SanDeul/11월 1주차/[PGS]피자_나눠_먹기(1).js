// 내 풀이
function solution(n) {
  return n % 7 === 0 ? n / 7 : (n - (n % 7)) / 7 + 1;
}

// 다른 사람의 풀이 (반성하자!!!)
function solution(n) {
  return Math.ceil(n / 7);
}
