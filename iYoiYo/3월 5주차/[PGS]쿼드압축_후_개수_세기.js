function solution(arr) {
  const count = [0, 0]
  
  function divide(row, col, n) {        
      const target = arr[col][row];
      const half = Math.floor(n/2);
      
      for(let i=col; i<col+n; i++) {
          for(let j=row; j<row+n; j++) {
              if(arr[i][j] !== target) {
                  divide(row, col, half);
                  divide(row+n/2, col+n/2, half);
                  divide(row+n/2, col, half);
                  divide(row, col+n/2, half);
                  
                  return;
              }
          }
      }
      count[target]++
  }
  
  divide(0, 0, arr.length)
  
  return count;
}