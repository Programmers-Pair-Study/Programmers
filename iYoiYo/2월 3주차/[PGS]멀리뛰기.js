function solution(n) {
  let ans = 0;
  let a = 0, b = 1, i = 0;
  
  while(1) {
      let temp = a;
      a = b;
      b = (b+temp)%1234567;
      i++;
      if(i===n) return b
  }
  
}