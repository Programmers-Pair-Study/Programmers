function solution(s) {
  const ans = [0, 0]
  
  while(s.length > 1) {
      s = s.replace(/0/g, () => {
          ans[1]++;
          return ''
      }).length.toString(2);
      ans[0]++;
  }
  
  return ans;
}

// match로 풀기
// function solution(s) {
//     var answer = [0,0];
//     while(s.length > 1) {
//         answer[0]++;
//         answer[1] += (s.match(/0/g)||[]).length;
//         s = s.replace(/0/g, '').length.toString(2);
//     }
//     return answer;
// }