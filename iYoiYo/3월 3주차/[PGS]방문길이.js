function solution(dirs) {
  const ans = new Set();
  const dir = {
      'U': [0, 1],
      'D': [0, -1],
      'L': [-1, 0],
      'R': [1, 0]
  }
  const cur = [0, 0];
  
  for(let i=0; i<dirs.length; i++) {
      const nextX = cur[0] + dir[dirs[i]][0];
      const nextY = cur[1] + dir[dirs[i]][1];

      if(nextX > 5 || nextY > 5 || nextX < -5 || nextY < -5) continue;

      ans.add(`${cur[0]}${cur[1]}${nextX}${nextY}`)
      ans.add(`${nextX}${nextY}${cur[0]}${cur[1]}`)
      cur[0] = nextX;
      cur[1] = nextY;
      // switch(dirs[i]) {
      //     case 'U':
      //         if(cur[0] === 5) break;
      //         ans.add(`${cur[0]}${cur[1]}${cur[0]+1}${cur[1]+1}`);
      //         ans.add(`${cur[0]}${cur[1]+1}${cur[0]}${cur[1]}`);
      //         cur[0] += 1;
      //         break;
      //     case 'D':
      //         if(cur[0] === -5) break;
      //         ans.add(`${cur[0]}${cur[1]}${cur[0]}${cur[1]-1}`);
      //         ans.add(`${cur[0]}${cur[1]-1}${cur[0]}${cur[1]}`);
      //         cur[0] -= 1;
      //         break;
      //     case 'L':
      //         if(cur[1] === -5) break;
      //         ans.add(`${cur[0]}${cur[1]}${cur[0]-1}${cur[1]}`);
      //         ans.add(`${cur[0]-1}${cur[1]}${cur[0]}${cur[1]}`);
      //         cur[1] -= 1;
      //         break;
      //     case 'R':
      //         if(cur[0] === 5) break;
      //         ans.add(`${cur[0]}${cur[1]}${cur[0]+1}${cur[1]}`);
      //         ans.add(`${cur[0]+1}${cur[1]}${cur[0]}${cur[1]}`);
      //         cur[1] += 1;
      //         break;
      // }
  }
  return ans.size/2;
}