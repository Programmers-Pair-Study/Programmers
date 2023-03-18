// stack을 이용한 풀이에 익숙해지자
function solution(s) {
  const ans = [];
  
  for(let x of s) {
      if(ans.length === 0 || ans[ans.length-1] !== x) {
          ans.push(x);
          continue;
      }
      if(ans[ans.length-1] === x) ans.pop();
  }
  
  return ans.length === 0 ? 1 : 0;
}