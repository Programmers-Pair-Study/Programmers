function solution(n) {
  let ans = 0;
  
  for(let i=0; i<n; i++) {
      const arr = new Array(n).fill(0);
      arr[0] = i;
      
      dfs(arr, 0);
  }
  
  function dfs(arr, idx) {
      if(idx === n-1) {
          ans++;
          return;
      }
      for(let i=0; i<n; i++) {
          arr[idx+1] = i;
          if(validation(arr, idx+1)) dfs(arr, idx+1);
      }
  }
  
  function validation(arr, idx) {
      const cur = arr[idx];
      for(let i=idx-1; i>=0; i--) {
          if(arr[i] === cur || Math.abs(idx-i) === Math.abs(cur - arr[i])) return false;
      }
      
      return true
  }
  
  return ans
}