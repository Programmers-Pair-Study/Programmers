// 처음에 삼진수로 변환 후 뒤부터 하나씩 풀어나갔는데 오버플로 뜸
// 이렇게 간단한 풀이 보면 현타온다구~
function solution(n) {
  let ans = '';
  const arr = [4, 1, 2];
  
  while(n) {
      ans = arr[n%3] + ans
      n = (n%3) ? Math.floor(n/3) : n/3-1;
  }
  
  return ans;
}