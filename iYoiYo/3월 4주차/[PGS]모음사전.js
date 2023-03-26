function solution(word) {
  let ans = 0;
  
  const count = [781, 156, 31, 6, 1];
  const alp = {
      A: 0,
      E: 1,
      I: 2,
      O: 3,
      U: 4
  }
  
  return word.split('').reduce((acc, cur, i) => acc + alp[cur] * count[i] + 1, 0)
}