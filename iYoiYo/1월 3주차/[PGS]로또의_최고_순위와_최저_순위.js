function solution(lottos, win_nums) {
  const rank = [1, 2, 3, 4, 5, 6, 6];
  
  let count = 0;
  const zeroCount = lottos.filter(x => {
      if(x !== 0) {
          win_nums.includes(x) && count++
      }
      return x === 0
  }).length;
  
  const high = 6-(count+zeroCount);
  const low = 6-(count);
      
  return [rank[high], rank[low]];
}