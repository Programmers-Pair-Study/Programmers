function solution(progresses, speeds) {
  const ans = [];
  let max = 0;
  let count = 0;
  const result = [];
  
  for(let i=0; i<speeds.length; i++) {
      const x = Math.ceil((100-progresses[i]) / speeds[i])
      ans.push(x)
  }
  
  max = ans[0];
  
  for(let i=0; i<ans.length; i++) {        
      if(max >= ans[i]) count++;
      else {
          result.push(count);
          max = ans[i];
          count = 1;
      }
  }
  
  if(count) result.push(count);
  
  return result
}