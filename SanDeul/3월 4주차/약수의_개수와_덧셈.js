// 나의 풀이
function solution(left, right) {
  let numbers = [];
  const result = [];

  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        numbers.push(j);
      }
    }
    if (numbers.length % 2 === 0) {
      result.push(i);
      numbers = [];
    } else {
      result.push(i * -1);
      numbers = [];
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0); // 어차피 다 더해줄거면 배열을 만들 필요가???
  // reduce 뇌절 그만
}

function goodSolution1(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 갯수가 홀수다...
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 이거지
function goodSolution2(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count % 2) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
