// 정규식으로 풀려다 안 풀린 내 풀이
// function solution(expression) {
//   const arr = ['+-*', '+*-', '-+*', '-*+', '*+-', '*-+'];
//   let ans = 0;
  
//   for(let x of arr) {
//       let result = expression
//       for(let a of x) {
//           if(a === '+') {
//               while(result.indexOf(a) + 1) {
//                   result = result.replace(/\d{1,}\+(\d{1,})/, (t) => {
//                       const [n1, n2] = t.split(a);
//                       return `${+n1 + +n2}`;
//                   })
//               }
//           }
//           else if(a === '-') {
//               while(result.indexOf(a) + 1) {
//                   result = result.replace(/\d{1,}\-(\d{1,})/, (t) => {
//                       const [n1, n2] = t.split(a);
//                       return `${n1 - n2}`;
//                   })
//               }
//           }
//           else {
//               while(result.indexOf(a) + 1) {
//                   result = result.replace(/\d{1,}\*(\d{1,})/, (t) => {
//                       const [n1, n2] = t.split(a);
//                       return `${n1 * n2}`;
//                   })
//               }
//           }
//       }
//       if(Math.abs(result) > ans) ans = Math.abs(result);
//   }
//   return ans
// }


// split(/(\D)/)과 eval 이용한 풀이
function solution(expression) {
  const arr = ['+-*', '+*-', '-+*', '-*+', '*+-', '*-+'];
  const ans = [];
  
  for(let x of arr) {
      const temp = expression.split(/(\D)/);
      for(let a of x) {
          while(temp.includes(a)) {
              const i = temp.indexOf(a);
              temp.splice(i-1, 3, eval(`${temp[i-1]}${a}${temp[i+1]}`));
          }
      }
      ans.push(Math.abs(temp[0]));
  }
  return Math.max(...ans)
}