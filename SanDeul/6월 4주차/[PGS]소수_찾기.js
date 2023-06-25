function solution(n) {
  let prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false;
  const sqrt = parseInt(Math.sqrt(n));

  for (let i = 2; i < sqrt; i++) {
    if (prime[i]) {
      for (let j = 2; i * j <= n; j++) {
        prime[i * j] = false;
      }
    }
  }
  return prime.filter((e) => e).length;
}
