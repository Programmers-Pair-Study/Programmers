function solution(s) {
  return (
    (s
      .split("")
      .map((e) => e.charCodeAt(0))
      .find((e) => e > 57)
      ? false
      : true) &&
    (s.length === 4 || s.length === 6)
  );
} // s가 숫자인지 / 아닌지만 파악하면 됐다... 아스키코드 너무 나감
// 또한 length 조건을 먼저 체크하는 게 더 효율이 좋지 않았을까

function goodSolution1(s) {
  // 정규식 활용
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

function goodSolution2(s) {
  // isNaN 활용 - NaN 이면 true
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
