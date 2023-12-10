function solution(r1, r2) {
  let ans = 0;
  
  for(let i=1; i<=r2; i++) {
      const max = Math.floor(Math.sqrt(r2**2 - i**2));
      const min = i > r1 ? 0 : Math.floor(Math.sqrt(r1**2 - i**2))
      
      ans += max - min;
  }
  
  return ans*4;
}