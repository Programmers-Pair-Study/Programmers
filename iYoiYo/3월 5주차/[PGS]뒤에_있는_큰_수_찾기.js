// 시간 초과 풀이
// function solution(numbers) {
//     let ans = [];
    
//     for(let i=0; i<numbers.length; i++) {
//         if(numbers[i] >= Math.max(...numbers.slice(i+1))) {
//             ans.push(-1);
//             continue;
//         }
                
//         for(let j = i+1; j<numbers.length; j++) {
//             if(numbers[i] >= numbers[j]) continue;
//             else {
//                 ans.push(numbers[j])
//                 break;
//             }
//         }
//     }
    
//     return ans;
// }

// 스택을 이용한 풀이
function solution(numbers) {
  const ans = Array(numbers.length).fill(-1);
  const stack = [];
  
  for(let i=0; i<numbers.length; i++) {
      while(stack.length && numbers[stack[stack.length-1]] < numbers[i]) {
          ans[stack.pop()] = numbers[i];
      }
      stack.push(i);
  }
  
  return ans;
}