function solution(places) {
  const ans = [];
  for(let i=0; i<5; i++) {
      ans.push(isKeepingDistance(places[i]));
  }
  
  return ans;
}

function isKeepingDistance(place) {
  const room = place.map(rooms => rooms.split(''));
  
  const queue = [];
  
  for(let i=0; i<5; i++) {
      for(let j=0; j<5; j++) {
          if(room[i][j] === 'P') queue.push([i, j])
      }
  }
  
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  
  while(queue.length) {
      const [x, y] = queue.shift();
      
      for(let i=0; i<4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          
          if(nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
          if(room[nx][ny] === 'X') continue;
          if(room[nx][ny] === 'P') return 0;
          
          for(let j=0; j<4; j++) {
              const aroundNX = nx + dx[j];
              const aroundNY = ny + dy[j];
              
              if(aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
              if(aroundNX === x && aroundNY === y) continue;
              if(room[aroundNX][aroundNY] === 'P') return 0;
          }
      }
  }
  return 1;
}

// 내가 생각한 방법이지만 코드를 생각 못 한 풀이
function solution(places) {
  let answer = [];

  for (let i = 0; i < places.length; i++) {
      answer.push(keep_dist(places[i]));
  }

  return answer;
}

// 거리두기 확인
function keep_dist(place) {
  place = place.map(v => v.split(''));

  for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {

          if (place[row][col] === 'P') {
              // 가로 한칸 체크
              if (col < 4 && place[row][col + 1] === 'P') {
                  return 0;                    
              }
              // 가로 두칸 체크
              if (col < 3 && place[row][col + 2] === 'P' && place[row][col + 1] === 'O') {
                  return 0;
              }

              // 세로 한칸 체크
              if (row < 4 && place[row + 1][col] === 'P') {
                  return 0;                  
              }
              // 세로 두칸 체크
              if (row < 3 && place[row + 2][col] === 'P' && place[row + 1][col] === 'O') {
                  return 0;
              }

              // 아래 왼쪽 대각
              if (row < 4 && place[row + 1][col - 1] === 'P') {
                  if (place[row + 1][col] === 'O' || place[row][col - 1] === 'O') {
                      return 0;
                  }
              }
              //아래 오른쪽 대각
              if (row < 4 && col < 4 && place[row + 1][col + 1] === 'P') {
                  if (place[row + 1][col] === 'O' || place[row][col + 1] === 'O') {
                      return 0;
                  }
              }
          } 
      }
  }

  return 1;
}