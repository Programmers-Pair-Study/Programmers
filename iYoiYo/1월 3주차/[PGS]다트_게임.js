function solution(dartResult) {
  const score = [];
  
  for(let i=0; i<dartResult.length; i++) {
      const index = score.length-1;
      
      switch(dartResult[i]) {
          case 'S':
              break;
          case 'D':
              score[index] = score[index]**2;
              break;
          case 'T':
              score[index] = score[index]**3;
              break;
          case '*':
              if(index !== 0) {
                  score[index-1] = score[index-1]*2;
                  score[index] = score[index]*2;
              }
              else {
                  score[index] = score[index]*2;
              }
              break;
          case '#':
              score[index] = -score[index];
              break;
          default:
              if(dartResult[i+1] === '0') {
                  score.push(+(dartResult[i]+dartResult[i+1]))
                  i++;
                  break;
              }
              score.push(+dartResult[i]);
      }
  }
  
  return score.reduce((acc, cur) => acc+cur);
}