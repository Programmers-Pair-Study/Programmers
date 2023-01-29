function solution(n) {
  for (let i = 1; i <= n - 1; i++) {
    // i <= n-i은 가급적 i < n 으로 쓰도록하자...
    if (n % i === 1) {
      return i;
      break;
    }
  }
}

// 다른 분 풀이
function goodSolution(n, x = 1) {
  while (x++) {
    // while문 판별식에서 증감연산자 사용 가능
    if (n % x === 1) {
      return x; // 새로운 변수 선언하지 않고 인자를 활용함
    }
  }
}
