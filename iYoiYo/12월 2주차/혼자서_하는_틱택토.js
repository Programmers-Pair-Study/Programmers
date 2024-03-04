function solution(board) {
  let ans = -1;
  const winPlace = findWinPlace()
  const boardState = {
      'O': [],
      'X': []
  }
  
  for(let i=0; i<board.length; i++) {
      const cur = board[i]
      for(let j=0; j<cur.length; j++) {
          if(cur[j] !== '.') boardState[cur[j]].push(i * board.length + j) 
      }
  }
  
  return validation() ? 1 : 0;
  
  // 검증 함수
  function validation() {
      const o = boardState['O'];
      const oLeng = o.length;
      const x = boardState['X'];
      const xLeng = x.length
      // X가 O보다 많음 or O가 X보다 2개 이상 많음
      if(oLeng > xLeng+1 || oLeng < xLeng) return false;
      
      // 한 줄에 OOO가 있는데 X랑 개수 맞거나 X가 많음
      if(isEndGame(o) && oLeng <= xLeng) return false;
      
      // 한 줄에 XXX가 있는데 O의 개수가 많음
      if(isEndGame(x) && oLeng > xLeng) return false;
      
      return true;
  }
  
  // 게임이 끝났는지 확인하는 함수
  function isEndGame(p) {        
      for(const place of winPlace) {
          if(place.every(value => p.includes(value))) return true;
      }
      
      return false;
  }
  
  // 이기는 위치 배열 함수
  function findWinPlace() {
      const row = [], col = []
      
      for(let i=0; i<3; i++) {
          const curRow = [], curCol = []
          for(let j=0; j<3; j++) {
              curRow.push(i*3 + j)
              curCol.push(j*3 + i)
          }
          row.push(curRow)
          col.push(curCol)
      }
      
      return [...row, ...col, [0, 4, 8], [2, 4, 6]]
  }
}