function solution(data, col, row_begin, row_end) {
  const arr = Array(row_end - row_begin + 1).fill(0);
  
  data.sort((a, b) => {
      // if(a[col-1] === b[col-1]) return b[0] - a[0];
      // return a[col-1] - b[col-1];
      
      // 더 짧은 방법
      return a[col-1] - b[col-1] || b[0] - a[0]
  })
  
  for(let i=row_begin; i<=row_end; i++) {
      for(let j=0; j<data[0].length; j++) {
          arr[i-row_begin] += data[i-1][j]%i
      }
  }
  
  return arr.reduce((acc, cur) => acc^cur, 0);
}