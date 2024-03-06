function solution(a, b) {
  let answer = 0;
  if (a - b > 0) {
    for (let i = b; i <= a; i++) {
      answer = answer + i;
    }
  } else if (a - b === 0) {
    answer = a;
  } else {
    for (let i = a; i <= b; i++) {
      answer = answer + i;
    }
  }
  return answer;
} // 그냥 편안하게 풀었던 것 같다...

// 좋았던 풀이 1
function goodSolution1(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
  // Math.abs는 주어진 숫자의 절대값을 반환함.
  // 양 끝의 합 + 양 끝의 합 / 2 로 solve 하심.
} // 가우스의 재림...

// 좋았던 풀이 2
function gooeSolution2(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    s += i; // for문의 표현식에 Math를 활용할수 있군여
  }
  return s;
}
// Math 공부하로 가자!!!!
