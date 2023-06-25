function solution(n) {
  const ans = [];
  const funcObj = {
      move2(c, t, l) {
          ans.push([c, l], [c, t], [l, t])
      }
  };
  
  for(let i=3; i<=n; i++) {
      funcObj['move' + i] = (c, t, l) => {
          funcObj['move' + (i-1)](c, l, t);
          ans.push([c, t]);
          funcObj['move' + (i-1)](l, t, c);
      }
  }
  
  funcObj['move' + n](1, 3, 2);
  
  return ans;
}