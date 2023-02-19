// function solution(n) {
//     let ans = 1;

//     for(let i=1; i<Math.floor(n/2); i++) {
//         let total = 0;
//         let next = 0;
//         while(total < n) {
//             total += i + next;
//             next++;
            
//             if(total === n) {
//                 ans++;
//             }
//         }
//     }
//     return ans;
// }
// 시간 초과....

function solution(n) {
  const ans = new Set();
  
  for(let i=1; i<=Math.sqrt(n); i++) {
      if(n%i === 0) {
          if(i%2 === 1) ans.add(i);
          if(n/i%2 === 1) ans.add(n/i);
      }
  }
  
  return ans.size;
}
// 주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다.