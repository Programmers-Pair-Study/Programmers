function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result = result + absolutes[i];
    } else {
      result = result + absolutes[i] * -1;
    }
  }
  return result;
}

// reduce 3번째 인자는 index라는 점 기억하자
function goodSolution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
