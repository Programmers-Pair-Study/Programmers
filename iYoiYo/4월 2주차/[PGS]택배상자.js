function solution(order) {
  let ans = 0;
  const stack = [];
  let idx = 1;
  
  for(let x of order) {
      if(idx > x && stack[stack.length-1] !== x) return ans;
      if(idx <= x) {
          for(let i=idx; i<x; i++) {
              stack.push(i);
          }
          ans++;
          idx = x+1;
          continue;
      }
      if(stack[stack.length-1] === x) {
          stack.pop();
          ans++;
      }
  }
  
  return ans;
}

// 어차피 기존 박스에 있는 거나 stack에 있는거나 ans가 증가하는 건 마찬가지 풀이
// function solution(order) {
//   let idx = 0;
//   const stack = [];
//   for (let i = 1; i <= order.length; i++) {
//     stack.push(i);
//     while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
//       stack.pop();
//       idx++;
//     }
//   }
//   return idx;
// }