function solution(board, moves) {
  let answer = 0;
  const items = {} // 각 칸의 시작 index
  const arr = [] // 바구니
  const finish = {} // 바닥 긁는 칸
  
  moves.forEach(x => {
      if(finish[x]) return;
      
      let curItem = false; // 인형 건졌는지
      
      for(let i=items[x] ?? 0; i<board.length; i++) {
          if(board[i][x-1] === 0) continue;
          
          arr.push(board[i][x-1]);
          if(arr[arr.length-1] === arr[arr.length-2]) {
              arr.splice(-2);
              answer += 2;
          }
          items[x] = i+1;
          curItem = true;
          
          if(i === board.length-1) finish[x] = true
          
          break;
      }
      
      if(!finish[x] && !curItem) finish[x] = true;
  })
  
  return answer;
}