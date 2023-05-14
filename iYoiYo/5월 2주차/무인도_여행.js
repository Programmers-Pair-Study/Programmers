function solution(maps) {
  const ans = [];
  const newMap = maps.map(x => x.split(''));
  const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
  
  function dfs(x, y, count) {
      let sum = +count;
      newMap[x][y] = 'X';
      
      for(let i=0; i<4; i++) {
          const newX = x+dx[i], newY = y+dy[i]
          if(newX < maps.length && newX >= 0 && newY < maps[0].length && newY >= 0 && newMap[newX][newY] !== 'X') sum += dfs(newX, newY, newMap[newX][newY])
      }
      return sum;
  }
  
  for(let i=0; i<newMap.length; i++) {
      for(let j=0; j<newMap[0].length; j++) {
          if(newMap[i][j] !== 'X') ans.push(dfs(i, j, newMap[i][j]))
      }
  }
  
  return ans.length ? ans.sort((a, b) => a-b) : [-1]
}