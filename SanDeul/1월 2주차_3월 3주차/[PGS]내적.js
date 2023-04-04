function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// reduce 활용 풀이
function solution2(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
} // 사용하지 않는 인자 이름을 _로 설정하기도 한다고 함
