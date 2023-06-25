function solution(answers) {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) result[0] += 1;
    if (answers[i] === supo2[i % supo2.length]) result[1] += 1;
    if (answers[i] === supo3[i % supo3.length]) result[2] += 1;
  }

  const [...scores] = result;
  let maxScore = Math.max(...scores);
  // 요소가 3개인데 굳이 스프레드 연산자를 써야 했을까? 불필요한 선언 같다.
  // 그냥 index로 찾아서 넣은 다음 max 하는게 나았을 듯
  const answer = [];

  result.forEach((e, i) => {
    if (e === maxScore) answer.push(i + 1);
  });

  return answer;
}

// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.12ms, 33.4MB)
// 테스트 3 〉	통과 (0.12ms, 33.2MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.26ms, 33.5MB)
// 테스트 6 〉	통과 (0.22ms, 33.5MB)
// 테스트 7 〉	통과 (0.72ms, 33.4MB)
// 테스트 8 〉	통과 (0.42ms, 33.3MB)
// 테스트 9 〉	통과 (3.70ms, 36.9MB)
// 테스트 10 〉	통과 (0.76ms, 33.5MB)
// 테스트 11 〉	통과 (3.60ms, 36.7MB)
// 테스트 12 〉	통과 (4.46ms, 36.9MB)
// 테스트 13 〉	통과 (0.25ms, 33.4MB)
// 테스트 14 〉	통과 (5.74ms, 36.8MB)

// 다른 사람의 풀이
function goodSolution(answers) {
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;

  let max = Math.max(a1c, a2c, a3c);

  // 반복문 대신 조건문 풀이 good...
  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// 테스트 1 〉	통과 (0.17ms, 33.6MB)
// 테스트 2 〉	통과 (0.08ms, 33.6MB)
// 테스트 3 〉	통과 (0.09ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.21ms, 33.5MB)
// 테스트 7 〉	통과 (0.88ms, 33.8MB)
// 테스트 8 〉	통과 (0.40ms, 33.6MB)
// 테스트 9 〉	통과 (1.55ms, 33.8MB)
// 테스트 10 〉	통과 (0.87ms, 33.6MB)
// 테스트 11 〉	통과 (1.77ms, 33.9MB)
// 테스트 12 〉	통과 (1.63ms, 33.9MB)
// 테스트 13 〉	통과 (0.24ms, 33.5MB)
// 테스트 14 〉	통과 (1.83ms, 34MB)
