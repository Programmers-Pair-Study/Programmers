// 결국 못 푼 내 풀이...
// function solution(m, n, board) {
//     let ans = 0;
//     const boardArr = board.map(v => v.split(''));
    
//     while(1) {
//         const popBox = new Set();
        
//         for(let i=m-1; i>0; i--) {
//             const a = board[i].match(/([A-Z])\1{1,}/g);
//             if(!a) continue;

//             a.forEach(x => {
//                 const idx = board[i].indexOf(x);

//                 for(let j=idx; j<idx+x.length-1; j++) {
//                     const target = x[0];
//                     if(board[i-1][j] === target && board[i-1][j+1] === target) {
//                         popBox.add(`${i}${j}`);
//                         popBox.add(`${i}${j+1}`);
//                         popBox.add(`${i-1}${j}`);
//                         popBox.add(`${i-1}${j+1}`);
//                     }
//                 }
//             })
//         }
        
//         if(popBox.size === 0) return ans;
//         ans += popBox.size;
        
//         popBox.forEach(i => {
//             boardArr[i[0]][i[1]] = 0;
//             board[i[0]] = boardArr[i[0]].join('');
//         })
        
//         for(let i=m-1; i>0; i--) {
//             if(board[i].indexOf(0) === -1) continue;
            
//             for(let j=0; j<=n-1; j++) {
//                 if(board[i][j] !== '0') continue;
//                 for(let k=i-1; k>=0; k--) {
//                     if(board[k][j] === 0) continue;
//                     boardArr[i][j] = boardArr[k][j];
//                     boardArr[k][j] = 0;
                    
//                     board[i] = boardArr[i].join('');
//                     board[k] = boardArr[k].join('');
//                 }
//             }
//         }
//     }
// }

const solution = (m, n, board) => {
  let answer = 0;
  //1. 먼저 배열의 문자열을 2차원 배열로 나눈다.
  board = board.map((v) => v.split(""));

  //2. 배열에서 지워질 블록의 인덱스를 구해 arr안에 넣는다.
  while (true) {
    const arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          arr.push([i, j]);
        }
      }
    }
    // 답을 구하는 로직 : 깨질 블록이 없다면 0인 개수를 세고 리턴한다.
    if (!arr.length) {
      return [].concat(...board).filter((v) => !v).length;
    }

    // 3. 배열에서 지워질 블록을 0으로 바꾼다.
    for (let i = 0; i < arr.length; i++) {
      const col = arr[i][0];
      const row = arr[i][1];
      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    // 4. 깨진 블록을 없애고 위에서 블록을 당겨온다.
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
};