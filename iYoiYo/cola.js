function solution(a, b, n) {
  let answer = 0;
  while(n>=a) {
      const getBottle = Math.floor(n/a)*b;
      n = getBottle + n%a;        
      answer += getBottle;        
  }
  return answer;
}