// n < m 이라고 가정했을 때,
function solution(n, m) {
  let divisor = 0;
  for (let i = n; i >= 1; i--) {
    if (m % i === 0 && n % i === 0) {
      divisor = i;
      break;
    }
  }
  return [divisor, (n * m) / divisor];
}

// 특이하고 개쩌는 풀이(유클리드 호제법)
function gcdlcm(a, b) {
  let r;
  for (let ab = a * b; (r = a % b); a = b, b = r) {
    return [b, ab / b];
  }
}
