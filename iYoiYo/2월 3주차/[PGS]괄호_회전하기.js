function solution(s) {
  let ans = 0;
  
  for(let j=0; j<s.length; j++) {
      if(j!==0) s = s.slice(1) + s[0];
      const paren = {
          ']': '[',
          '}': '{',
          ')': '(',
      }
      const close = [];
      let right = true;
      
      for(let i=0; i<s.length; i++) {
          if(s[i] === '[' || s[i] === '(' || s[i] === '{') {
              close.push(s[i]);
              continue;
          }
          else {
              if(close.pop() !== paren[s[i]]) {
                  right = false;
                  break;
              }
              continue;
          }
          if(!right) break;
      }
      if(close.length || !right) continue;
      ans++;
  }
  return ans;
}
// 테스트 14 ({)}도 검증해야함