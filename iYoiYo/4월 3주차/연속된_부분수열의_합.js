// 내가 푼 풀이
// function solution(sequence, k) {
//     const ans = [];
//     let sI = 0, eI = 0, sum = sequence[sI];
//     while(eI < sequence.length) {
//         if(sI === eI && sequence[sI] > k) {
//             sI++;
//             eI++;
//             sum = sequence[sI];
//             continue;
//         }
//         if(sum > k) {
//             sum -= sequence[sI];
//             sI++;
//             continue;
//         }
//         else if(sum < k) {
//             eI++;
//             sum += sequence[eI];
//             continue;
//         }
//         else {
//             ans.push([sI, eI, eI-sI]);
//             sum -= sequence[sI];
//             sI++;
//         }
//     }
//     ans.sort((a, b) => a[2] - b[2]);
//     return [ans[0][0], ans[0][1]]
// }

// 더 간단한 풀이
function solution(sequence, k) {
  let answer = null;
  let sum = sequence[0];
  let i = 0, j = 0;
  while (i < sequence.length && j < sequence.length) {
      if (sum == k) {
          if (answer == null || j - i < answer[1] - answer[0]) {
              answer = [i, j];
          }
      }
      if (sum < k || i == j) {
          j += 1;
          sum += sequence[j];
      } else {
          sum -= sequence[i];
          i += 1;
      }
  }
  return answer;
}