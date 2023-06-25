function solution(k, d) {
  const ans = [];
  const half = Math.ceil(d/2);
  
  for(let i=0; i<=half; i++) {
      if(i*k > half) continue;
      for(let j=0; j<=d; j++) {
          if(j*k > d) break;
          ans.push([i*k, j*k])
      }
  }
  const filteredAns = ans.filter(([x, y]) => x**2 + y**2 <= d**2)
  const newAns = filteredAns.map(([x, y]) => ([y, x]));
  const stringResult = [...filteredAns, ...newAns].map(x => JSON.stringify(x));
  
  return new Set(stringResult).size;
}

function solution(k, d) {
  let ans = 0;
  
  for(let x=0; x<=d; x+=k) {
      const y = Math.sqrt(d**2 - x**2);
      
      ans += parseInt(y/k) + 1;
  }
  
  return ans;
}