function solution(k, dungeons) {
  const length = dungeons.length;
  const visited = Array(length).fill(0);
  let ans = 0;
  
  function dfs(count, k) {
      for(let i=0; i<length; i++) {
          if(!visited[i] && k>=dungeons[i][0]) {
              visited[i] = 1;
              dfs(count+1, k-dungeons[i][1]);
              visited[i] = 0;
          }
      }
      ans = Math.max(ans, count);
  }
  
  dfs(0, k);
  
  return ans;
}