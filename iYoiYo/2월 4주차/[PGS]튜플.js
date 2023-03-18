function solution(s) {
  const ans = [];
  
  s.slice(2, -2)
   .split('},{')
   .sort((a, b) => a.length - b.length)
   .map(x => x.split(','))
   .forEach((x, i) => {
      if(i===0) ans.push(x[0]);
      else {
          ans.push(x.filter(num => ans.indexOf(num) === -1)[0])
      }
  })
  
  return ans.map(Number);
}

// 더 간단한 풀이
// function solution(s) {
//     const ans = [];

//     return s.slice(2, -2)
//      .split('},{')
//      .sort((a, b) => a.length - b.length)
//      .map(x => x.split(',').map(y => +y))
//      .reduce((acc, cur) => [...acc, ...cur.filter(x => acc.indexOf(x) === -1)])
// }