function solution(s) {
  let answer = 0;
  let cur = '';
  let count = 0;
  
  for(let i=0; i<s.length; i++) {
      if(count === 0) {
          answer++;
          cur = s[i];
          count = 1;
      }
      else {
          if(cur === s[i]) count++;
          else {
              count--;
          }
      }
  }    
  return answer;
}