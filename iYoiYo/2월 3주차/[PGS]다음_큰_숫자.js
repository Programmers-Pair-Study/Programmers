function solution(n) {
  let i = n+1;
  while(1) {
      const leng = n.toString(2).match(/1/g).length;

      if(leng === i.toString(2).match(/1/g).length) return i;
      i++;
  }
}