function solution(s){
  let count = 0;
  // if(s[s.lenght-1] === '(') return false;
  // if(s.length % 2) return false;
  for(let paren of s) {
      paren === '(' ? count++ : count--;
      if(count < 0) return false;
  }
  return count === 0 ? true : false;
}