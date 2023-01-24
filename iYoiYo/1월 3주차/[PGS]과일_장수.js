function solution(k, m, score) {
  let answer = 0;
  
  score.sort((a, b) => b-a);
  
  for(let i=0; i<score.length-m+1; i+=m) {
      const box = score.slice(i, i+m);
      answer += Math.min(...box)*m;
  }
  
  return answer;
}