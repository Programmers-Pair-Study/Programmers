function solution(brown, yellow) {
  const sum = brown+yellow;
  
  for(let i=3; i<=yellow+2; i++) {
      const width = sum/i;
      
      if((width-2)*(i-2) === yellow) {
          return [width, i]
      }
  }
}
// 시작조차 어려웠던 문제