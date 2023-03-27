function solution(n) {
  const fib = [1, 2];
  
  for(let i=2; i<n; i++) {
      fib.push((fib[i-1] + fib[i-2]) % 1000000007)
  }
  
  return fib.pop[n-1];
}