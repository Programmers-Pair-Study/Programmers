// 엘리스 코테에 나왔던 문제랑 비슷해서 살았다^_^
// function solution(n) {
//     const ans = [];
//     let max = 0, c = 1, dir = 'd', x = 0, y =0;
    
//     for(let i=1; i<=n; i++) {
//         const line = Array(i).fill(0);
//         ans.push(line);
//         max += i;
//     }
    
//     while(c <= max) {
//         ans[x][y] = c
        
//         switch(dir) {
//             case 'd':
//                 if(x+1<n && ans[x+1][y] === 0) x++
//                 else {
//                     dir = 'r';
//                     y++;
//                 }
//                 break;
//             case 'r':
//                 if(ans[x][y+1] === 0) y++
//                 else {
//                     dir = 'u';
//                     x--;
//                     y--;
//                 }
//                 break;
//             case 'u':
//                 if(ans[x-1][y-1] === 0) {
//                     x--;
//                     y--;
//                 }
//                 else {
//                     dir = 'd';
//                     x++;
//                 }
//                 break;
//         }
//         c++
//     }
    
//     const result = [];
    
//     ans.forEach(arr => result.push(...arr));
    
//     return result;
// }

// 이런 방법도 있지만 시간 비슷하니까 내 풀이가 암튼 정석임
// array.flat()이 시간 오래걸림
function solution(n) {
  let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
  
  let row = -1
  let col = 0
  let fill = 0
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
  }
    
  return a.flat()
}