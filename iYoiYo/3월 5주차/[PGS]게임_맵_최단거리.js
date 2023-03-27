function solution(maps) {
  const maxX = maps[0].length-1;
  const maxY = maps.length-1;
  const moveX = [1, -1, 0, 0];
  const moveY = [0, 0, 1, -1];
  
  const queue = [[0, 0, 1]];
  
  while(queue.length) {
      const [y, x, move] = queue.shift();
      if(x === maxX && y === maxY) return move;
      
      for(let i=0; i<4; i++) {
          const newX = x+moveX[i];
          const newY = y+moveY[i];
          
          if(newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY && (maps[newY][newX]===1)) {
              queue.push([newY, newX, move+1]);
              maps[newY][newX] = 0;
          }
      }
  }
  
  return -1;
}