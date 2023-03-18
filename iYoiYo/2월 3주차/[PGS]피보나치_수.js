function solution(n) {
  let prev = 0;
  let ans = 1;

  for(let i=2; i <= n; i++) {
      let temp = prev;
      prev = ans;
      ans = (ans + temp) % 1234567;
  }

  return ans;
}
// 피보나치 값이 커져 32비트 자리를 넘어가는 순간 오버플로우가 남
// 이를 해결하기 위해 매 연산마다 %1234567을 해준다.