function solution(number, limit, power) {
  return [...Array(number)].map((x, i) => {
      if(i+1 === 1) return 1;
      const divide = new Set();
      
      // 첨에 'j < i+1'로 해서 시간 초과 뜸..
      for(let j=1; j<=Math.sqrt(i+1); j++) {
          if((i+1) % j === 0) {
              divide.add(j);
              divide.add((i+1)/j);
              if(divide.size > limit) return power;
          }
      }
      return divide.size;
  }).reduce((arr, cur) => arr+cur, 0);
}