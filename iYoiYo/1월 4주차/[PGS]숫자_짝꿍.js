function solution(X, Y) {
  const x = X.split('');
  const y = Y.split('');
  const result = {};
  const answer = [];
  
  x.forEach(num => {
      if(result[num] === undefined) result[num] = 1;
      else result[num] += 1;
  })
  
  y.forEach(num => {
      if(result[num] && result[num] > 0) {
          result[num] -= 1;
          answer.push(num);
      }
  })
  
//     const result = {};
//     const answer = [];
  
//     for(x of X) {
//         if(result[x] === undefined) result[x] = 1;
//         else result[x] += 1;
//     }
  
//     for(y of Y) {
//         if(result[y] && result[y] > 0) {
//             result[y] -= 1;
//             answer.push(y);
//         }
//     }
  
  if(answer.length === 0) return '-1';
  if(+answer.join('') === 0) return '0';
  return answer.sort((a, b) => b-a).join('');
}