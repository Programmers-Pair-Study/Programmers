function solution(n) {
  const str = "수박";
  return n % 2 === 0 ? str.repeat(n / 2) : str.repeat((n + 1) / 2).slice(0, n);
}
