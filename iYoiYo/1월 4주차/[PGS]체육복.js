function solution(n, lost, reserve) {
  const filteredLost = lost.filter(x => !reserve.includes(x)).sort((a, b) => a-b);
  const filterdReserve = reserve.filter(x => !lost.includes(x)).sort((a, b) => a-b);
  
  let answer = n - filteredLost.length;
      
  filteredLost.forEach(x => {
      filterdReserve.forEach((y, i) => {
          if(x === y-1 || x === y+1) {
              answer++;
              filterdReserve.splice(i, 1);
              return;
          }
      })
  })
  
  return answer;
}