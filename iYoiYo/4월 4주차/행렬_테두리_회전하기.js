function solution(rows, columns, queries) {
  const ans = [];
  
  const arr = []
  
  for(let i=0; i<rows; i++) {
      const rowArr = [];
      for(let j=0; j<columns; j++) {
          rowArr.push(rows*i+j+1)
      }
      arr.push(rowArr);
  }
  console.log(arr);
  
  for(let curArr of queries) {
      const maxCol = curArr[3] - 1,
            maxRow = curArr[2] - 1,
            minRow = curArr[0] - 1,
            minCol = curArr[1] - 1,
            len = ((maxRow-minRow) + (maxCol-minCol))*2;
      let curCol = minCol, curRow = minRow, next = arr[curRow][curCol], dir = 'R'
      const roopNum = [next];
      for(let i=0; i<len; i++) {
          const target = next
          switch(dir) {
              case 'R':
                  next = arr[curRow][++curCol];
                  arr[curRow][curCol] = target;
                  if(curCol === maxCol) dir = 'D'
                  break;
              case 'D':
                  next = arr[++curRow][curCol];
                  arr[curRow][curCol] = target;
                  if(curRow === maxRow) dir = 'L'
                  break;
              case 'L':
                  next = arr[curRow][--curCol];
                  arr[curRow][curCol] = target;
                  if(curCol === minCol) dir = 'U'
                  break;
              case 'U':
                  next = arr[--curRow][curCol];
                  arr[curRow][curCol] = target;
                  if(curRow === minRow) dir = 'R'
                  break;
          }
          roopNum.push(next);
      }
      ans.push(Math.min(...roopNum))
  }
  
  return ans;
}

// function solution(rows, columns, queries) {
//     const a = [...Array(rows)].map((_, r)=>[...Array(columns)].map((_, c)=>r*columns+c+1));
//     const mins = [];

//     queries.map(query => {
//         const [x1, y1, x2, y2] = query.map(_=>_-1);
//         let min = a[x1][y1], tmp = a[x1][y1];

//         for(let i=x1;i<x2;i++) {
//             a[i][y1] = a[i+1][y1];
//             min = Math.min(min, a[i][y1]);
//         }
//         for(let i=y1;i<y2;i++) {
//             a[x2][i] = a[x2][i+1];
//             min = Math.min(min, a[x2][i]);
//         }
//         for(let i=x2;i>x1;i--) {
//             a[i][y2] = a[i-1][y2];
//             min = Math.min(min, a[i][y2]);
//         }
//         for(let i=y2;i>y1;i--) {
//             a[x1][i] = a[x1][i-1];
//             min = Math.min(min, a[x1][i]);
//         }
//         a[x1][y1+1] = tmp;

//         mins.push(min);
//     })

//     return mins;
// }