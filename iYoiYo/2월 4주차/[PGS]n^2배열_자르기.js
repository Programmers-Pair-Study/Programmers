// 이게 이렇게 가능하네..
function solution(n, left, right) {
  const ans = [];

  for(let i=left; i<=right; i++) {
      ans.push(Math.max(Math.floor(i/n), i%n) + 1)
  }

  return ans;
}