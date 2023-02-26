function solution(numbers, target) {
  // dfs를 이용한 풀이
//     let ans = 0;
  
//     dfs(0, 0)
  
//     function dfs(index, sum) {
//         if(index === numbers.length) {
//             if(sum === target) {
//                 ans++;
//             }
//             return;
//         }
      
//         dfs(index+1, sum + numbers[index]);
//         dfs(index+1, sum - numbers[index]);
//     }
  
//     return ans;
  
  // 더 직관적인 코드
  
  let ans = 0;
  
  dfs(0, 0)
  
  function dfs(index, sum) {
      if(index < numbers.length) {
          dfs(index+1, sum+numbers[index]);
          dfs(index+1, sum-numbers[index]);
      }
      else {
          if(sum === target) ans++
      }
  }
  
  return ans;
}