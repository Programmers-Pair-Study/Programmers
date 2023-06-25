function solution(name, yearning, photo) {
  return photo.map((result) => {
    return result
      .map((eachName) => {
        return name.indexOf(eachName) >= 0
          ? yearning[name.indexOf(eachName)]
          : 0;
      })
      .reduce((acc, cur) => acc + cur);
  });
}

// 다른 사람의 풀이
function goodSolution1(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
// ?? = null 병합 연산자 : a ?? b 는 a가 null 또는 undefined가 아니면 a이고 그 외에는 b이다.
// 여러 변수 중 정해진 변수의 값을 출력하고 싶은데 모두 정해지지 않았을 경우에도
// 어떠한 값을 출력하고 싶을 때 유용하다.

// 객체를 활용한 풀이 (생각은 했었는데 ㅎ...)
function goodSolution2(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[(name[i] = yearning[i])];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((a, c) => a + c, 0)
  );
}
