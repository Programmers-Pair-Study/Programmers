// 결국 테스트 케이스 실패한 풀이
// function solution(numbers) {    
//     numbers = numbers.map(String).sort((a, b) => {
//         if(a[0] === b[0]) {
//             const first = a[0];
//             const len = Math.max(a.length, b.length) - 1

//             for(let i=1; i <= len; i++) {
//                 const curA = a[i] || first;
//                 const curB = b[i] || first;
                
//                 if(curA === curB && i !== len) {
//                     i++;
//                     continue;
//                 }
                
//                 if(curA > curB) return -1;
//                 else if(curA < curB) return 1;
//                 else {
//                     const regex = new RegExp(`[^${Number(first)}]`)
//                     if((curA+curB).match(regex)[0] > first) {
//                         return a > b ? -1 : 1;
//                     }
//                     else {
//                         return a < b ? -1 : 1;
//                     }
//                 }
//             }
//         }

//         return a > b ? -1 : 1;
//     }).join('');

//     return numbers;
// }

// 이런 거는 누가 생각하는 거지...???
function solution(numbers) {
  const answer = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('');
  
  return answer[0] === '0' ? '0' : answer
}