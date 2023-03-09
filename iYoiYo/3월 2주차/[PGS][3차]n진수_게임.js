// function solution(n, t, m, p) {
//     let ans = '';
//     let result = '';
//     let count = 0;
    
//     while(ans.length < t*m) {
//         ans += count.toString(n);
//         count++;        
//     }
    
//     count = 0;
//     while(result.length < t) {
//         result += ans[(count*m) + p - 1];
//         count++;
//     }
    
//     return result.toUpperCase();
// }

function solution(n, t, m, p) {
  let res = ''
  let num = 0
  let seq = ''
  while (res.length < t) {
      if (seq.length >= m) {
          res += seq[p - 1]
          seq = seq.slice(m)
      }
      else {
          seq += num.toString(n).toUpperCase()
          num++
      }
  }
  return res
}