function solution(N, stages) {
  const result = [];
  
  // 내가 푼 풀이
  const arr = [];
  const accStage = [];
  const totalMember = stages.length;
  stages.sort((a,b) => a-b)
  
  for(let i=0; i<N; i++) {
      const stageMember = stages.filter(x => x === i+1).length;
      arr.push(stageMember);
      if(i === 0) {
          accStage.push(stageMember);
          result.push({ [i+1]: arr[i] / totalMember})
      }
      else {
          accStage.push(accStage[i-1] + stageMember);
          result.push({ [i+1]: arr[i] / (totalMember - accStage[i-1])});
      }
  }
  return result.sort((a, b) => Object.values(b) - Object.values(a)).map(x => parseInt(Object.keys(x)));
  
  // 다른 사람 풀이 참고해서 다시 푼 풀이
  // for(let i=0; i<N; i++) {
  //     const cur = stages.filter(x => x === i+1).length;
  //     const reachNum = stages.filter(x => x >= i+1).length;
  //     result.push([i+1, cur/reachNum]);
  // }
  // return result.sort((a, b) => b[1] - a[1]).map(x => x[0]);
}