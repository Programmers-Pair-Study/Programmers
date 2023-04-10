// 박살난 시간초과 풀이
// function solution(x, y, n) {
//     const ans = [[y, 0]];
    
// //     function dfs(sum, count) {
// //         if(sum === y) {
// //             ans.push(count);
// //             return;
// //         }
        
// //         if(sum > y) return;
        
// //         if(sum+n <= y) dfs(sum+n, count+1);
// //         if(sum*2 <= y) dfs(sum*2, count+1);
// //         if(sum*3 <= y) dfs(sum*3, count+1);
// //     }
    
// //     dfs(x, 0);
    
//     while(ans.length) {
//         const [cur, count] = ans.shift();
        
//         if(cur === x) return count;
        
//         const minSum = cur - n;
//         const doubleSum = cur/2;
//         const tripleSum = cur/3;
        
//         if(minSum >= x) ans.push([minSum, count+1]);
//         if(!(cur%2) && doubleSum >= x) ans.push([doubleSum, count+1]);
//         if(!(cur%3) && tripleSum >= x) ans.push([tripleSum, count+1]);
//     }
    
//     return -1;
// }

// dp 자주 나온다 외우자!
function solution(x, y, n) {
  if (x === y) return 0;

  const dp = {};

  dp[x] = 0;

  let data = [x];

  while (data.length) {
      const newData = [];

      for (const d of data) {
          for (const e of [d + n, d * 2, d * 3]) {
              console.log(d, e, dp);
              if (e > y || dp[e]) continue;
              if (e === y) return dp[d] + 1;
              dp[e] = dp[d] + 1;
              newData.push(e);
          }
      }
      data = newData;
  }

  return -1;
}