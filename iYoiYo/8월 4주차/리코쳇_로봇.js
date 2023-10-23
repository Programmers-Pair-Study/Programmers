function solution(board) {
  let ans = 0;

  board = board.map(b => b.split(''));
  
  let start = [];
  const directions = ['U', 'D', 'L', 'R'];
  
  for(let i=0; i<board.length; i++) {
      const idx = board[i].indexOf('R');
      if(idx+1) start = [i, idx]
  }
  
  const queue = [[...start, 0]];
  
  while(queue.length) {
      const [x, y, count] = queue.shift();
      if(board[x][y] === 'X') continue;
      if(board[x][y] === 'G') return count;
      board[x][y] = 'X'
      
      for(let d of directions) {
          slide(x, y, d, count+1)
      }
  }
  
  return -1;
  
  function slide(x, y, dir, count) {
      switch(dir) {
          case 'U':
              if(x-1 >= 0) {
                  if(board[x-1][y] !== 'D') slide(x-1, y, dir, count);
                  else return destinationCheck(x, y, count)
              }
              else return destinationCheck(x, y, count)
              break;
          case 'D':
              if(x+1 <= board.length-1) {
                  if(board[x+1][y] !== 'D') slide(x+1, y, dir, count);
                  else return destinationCheck(x, y, count)
              }
              else return destinationCheck(x, y, count)
              break;
          case 'L':
              if(y-1 >= 0) {
                  if(board[x][y-1] !== 'D') slide(x, y-1, dir, count);
                  else return destinationCheck(x, y, count)
              }
              else return destinationCheck(x, y, count)
              break;
          case 'R':
              if(y+1 <= board[0].length-1) {
                  if(board[x][y+1] !== 'D') slide(x, y+1, dir, count);
                  else return destinationCheck(x, y, count)
              }
              else return destinationCheck(x, y, count)
              break;
      }
  }
  
  function destinationCheck(x, y, count) {
      if(board[x][y] === 'X') return;
      queue.push([x, y, count])
  }   
}