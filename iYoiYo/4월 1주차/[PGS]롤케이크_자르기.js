// slice는 O(n)이라 10만개를 이중 for문 돌리기엔 너무 컸다..
// 근데 내 코드 왜 사라짐??
// 어떤 사람은 생각보다 간단하게 풀더라... n이 클 땐 객체에 담아두는 습관 필요
function solution(topping) {
  const a = new Set();
  const b = {};
  
  let ans = 0;
  let check = 0;
  
  for(const t of topping) {
      if(b[t]) b[t]++;
      else {
          b[t] = 1;
          check++;
      }
  }
  
  for(const t of topping) {
      a.add(t);
      b[t]--;
      
      if(!b[t]) check--;
      if(a.size === check) ans++;
  }
  
  return ans;
}