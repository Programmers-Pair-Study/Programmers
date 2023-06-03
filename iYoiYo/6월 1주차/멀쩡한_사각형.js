// 공식을 외우세요 그냥
function solution(w, h) {
  function gcd(a, b) {
      const remainder = a%b;
      if(remainder === 0) return b;
      return gcd(b, remainder);
  }

  return w*h - (w + h - gcd(w, h));
}