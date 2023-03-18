function solution(n,a,b) {
  let ans = 0;
  
  while(1) {
      a = Math.ceil(a/2);
      b = Math.ceil(b/2);
      ans++
      
      if(a === b) return ans
  }
}