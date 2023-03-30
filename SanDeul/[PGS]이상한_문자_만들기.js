function solution(s) {
  let idx = 0;
  let answer = "";

  for (let i of s) {
    if (i === " ") {
      idx = -1;
    }
    idx % 2 === 0
      ? (answer += i.toLocaleUpperCase("en-US"))
      : (answer += i.toLocaleLowerCase("en-US"));
    idx++;
  }

  return answer;
}

// 정규 표현식 활용 풀이 - 근데 속도랑 가독성은 내코드가 더 좋은?듯?ㅎㅎㅎ
function goodSolution(s) {
  return s.toLocaleUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toLocaleUpperCase() + a[1].toLocaleLowerCase();
  });
}
