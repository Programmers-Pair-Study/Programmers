function solution(cards) {
  
  function open(start, opened) {
      let box = start;
      let count = 0;
      
      while(!opened[box]) {
          opened[box] = true;
          box = cards[box] - 1;
          count++
      }
      return count;
  }
  
  let ans = 0;
  
  for(let i=0; i<cards.length; i++) {
      const opened = Array(cards.length).fill(false);
      const g1 = open(i, opened);
      
      for(let j=0; j<cards.length; j++) {
          if(opened[j]) {
              continue;
          }
          const g2 = open(j, opened);
          ans = Math.max(ans, g1*g2);
      }
      
  }
  
  return ans;
}