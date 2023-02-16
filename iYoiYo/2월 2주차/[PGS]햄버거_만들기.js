// function solution(ing) {
//     let ans = 0;
//     const stack = [];

//     for(let i=0; i<ing.length; i++) {
//         stack.push(ing[i]);

//         if(stack.slice(-4).join('') === '1231') {
//             stack.splice(-4);
//             ans++;
//         }
//     }

//     return ans;
// }

// 더 빠른 풀이
function solution(ingredient) {
  let ans = 0;
  const stack = [];

  for(let i=0; i<ingredient.length; i++) {
      stack.push(ingredient[i]);

      if(stack[stack.length-1] === 1 &&
          stack[stack.length-2] === 3 &&
          stack[stack.length-3] === 2 &&
          stack[stack.length-4] === 1) {
          stack.splice(-4);
          ans++;
      }
  }
  return ans;
}