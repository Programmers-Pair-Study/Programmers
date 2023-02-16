// function solution(citations) {
//     let cnt1 = 0, cnt2 = 0;
    
//     citations.sort((a, b) => a-b)
    
//     for(let i=0; i<citations.length; i++) {
//         if(citations.length-i >= citations[i]) {
//             cnt1 = citations[i]
//         }
//         else {
//             cnt2++;
//         }
//     }
//     return Math.max(cnt1, cnt2);
// }

// 더 간단한 풀이
function solution(citations) {
  let ans = 0;
  
  citations.sort((a, b) => b-a)
  
  for(let i=0; i<citations.length; i++) {
      if(citations[i] >= i+1) {
          ans++
          continue;
      }
      break;
  }
  
  return ans;
}