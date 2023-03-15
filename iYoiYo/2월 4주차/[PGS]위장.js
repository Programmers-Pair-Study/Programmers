function solution(clothes) {
  const ans = {};
  
  for(let i=0; i<clothes.length; i++) {
      // if(!ans[clothes[i][1]]) {
      //     ans[clothes[i][1]] = 1;
      // }
      // else {
      //     ans[clothes[i][1]]++
      // }
      
      // 더 간단한 방법을 익혀두자
      ans[clothes[i][1]] = (ans[clothes[i][1]] || 0) + 1
  }
  
  return Object.values(ans).reduce((acc, cur) => acc*(cur+1), 1) - 1
}