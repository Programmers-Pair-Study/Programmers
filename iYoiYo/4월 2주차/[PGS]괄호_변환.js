function solution(p) {
  if(p === '') return '';
  
  let check = 0;
  let u = [], v = [];
  
  for(let i=0; i<p.length; i++) {
      p[i] === '(' ? check++ : check--;
      
      if(check === 0) {
          u = p.slice(0, i+1);
          v = p.slice(i+1)
          break;
      }
  }
  
  if(u[0] === ')') {
      u = u.split('').slice(1, -1);
      for(let i=0; i<u.length; i++) {
          u[i] = u[i] === ')' ? '(' : ')';
      }
      return `(${solution(v)})${u.join('')}`
  }
  else {
      return u+solution(v);
  }    
}