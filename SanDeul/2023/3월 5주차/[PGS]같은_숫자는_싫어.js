function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function goodSolution1(arr) {
  return arr.filter((val, idx) => val != arr[idx + 1]);
}

// 초기 값을 넣어주고 시작할 수도 있다
function goodSolution2(arr) {
  const answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
