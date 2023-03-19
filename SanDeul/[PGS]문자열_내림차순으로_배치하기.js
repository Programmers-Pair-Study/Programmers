function solution(s) {
  // 왠지 split을 최대한 안쓰고 풀어보고 싶었음...(뻘짓)
  const result = [];
  for (let i of s) {
    result.push(s.charCodeAt(s.indexOf(i)));
  }
  const answer = result
    .sort((a, b) => b - a)
    .reduce((acc, cur) => (acc += String.fromCharCode(cur)), "");
  return answer;
}

// 메서드에 대한 이해도가 높으신 분 같다.
function goodSolution(s) {
  return s.split("").sort().reverse().join("");
}
// 나처럼 굳이 charCodeAt로 변환하지 않아도
// 위 풀이처럼 sort 자체를 실행한다면
// 아스키코드 기준으로 문자열을 정렬해 준다고 한다.
