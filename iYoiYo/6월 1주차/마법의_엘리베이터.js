// dfs
function solution(storey) {
  const ans = [];
  
  const newStorey = storey.toString().split('').map(Number);
  
  function dfs(i, sum, arr) {
      if(arr[i] === 10) {
          const newArr = [...arr];
          // if(i === 0) {
          //     newArr.splice(i, 1, 1, 0);
          //     i++;
          // }
          if(i === 0) ans.push(sum+1)
          else {
              newArr[i-1] += 1;
              dfs(i-1, sum, newArr);
          }
          return;
      }
      
      if(i !== 0) {
          dfs(i-1, sum+arr[i], arr);
          const newArr = [...arr];
          newArr[i-1] += 1;
          dfs(i-1, sum+(10-arr[i]), newArr);
      }
      else {
          ans.push(sum+arr[0]);
          ans.push(sum+(11-arr[0]))
      }
  }
  
  dfs(newStorey.length-1, 0, newStorey)
  
  return Math.min(...ans)
}