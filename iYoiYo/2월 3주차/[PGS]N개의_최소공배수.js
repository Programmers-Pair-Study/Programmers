function solution(arr) {
  let ans = arr[0];
  for(let i=1; i<arr.length; i++) {
      let a = ans, b = arr[i];
      
      while(a%b !== 0) {
          let temp = a;
          a = b;
          b = temp%b;
      }
      
      ans = ans*arr[i]/b
  }
  return ans;
}