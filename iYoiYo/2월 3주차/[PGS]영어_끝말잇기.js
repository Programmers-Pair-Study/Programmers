function solution(n, words) {
  const ans = [];
  let person, count
  
  for(let i=0; i<words.length; i++) {
      if(i===0) {
          ans.push(words[i]);
          continue;
      }

      if(ans[i-1].slice(-1) !== words[i][0] || (ans.indexOf(words[i])+1)) {
          count = Math.ceil((i+1)/n);
          person = (i+1)%n === 0 ? n : (i+1)%n;
          
          return [person, count];
      }
      else ans.push(words[i]);
  }
  
  return [0, 0];
}

// indexOf가 includes보다 훨씬 빠르다!!!!!!

// function solution(n, words) {
//     let answer = 0;
//     words.reduce((prev, now, idx) => {
//         answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
//         return now[now.length-1];
//     }, "")

//     return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
// }