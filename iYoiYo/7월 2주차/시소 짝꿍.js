// 방향은 맞았으나 정답을 맞추지 못한 풀이
function solution(weights) {
  let ans = 0;
  
  const ratio = [1, 2/3, 1/2, 3/4, 3/2, 2, 4/3];
  
  const obj = {}
  
  for(let w of weights) {
      for(let r of ratio) {
          const cur = w*r
          
          if(obj[cur]) ans += obj[cur]
      }
      obj[w] = (obj[w] || 0) + 1
  }
  
  return ans;
}

// 더 빠른 방법
function solution(weights) {
  let result = 0
  const table = Array(4001).fill(0)
  const isInt = (n) => n % 1 === 0 ? n : 0 // 실수 판별
  weights.forEach(w => {
      result += table[w] + table[w * 2] // case 1, case 2
      if (isInt(w / 2)) result += table[w / 2] // case 3
      if (isInt(w * 2 / 3)) result += table[w * 2 / 3] // case4
      if (isInt(w * 3 / 2)) result += table[w * 3 / 2] // case5
      if (isInt(w * 3 / 4)) result += table[w * 3 / 4] // case6
      if (isInt(w * 4 / 3)) result += table[w * 4 / 3] // case7
      table[w] += 1
  })
  return result
}