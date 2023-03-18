function isPrime(n) {
  if(n === 0 || n === 1) return false;
  
  for(let i=2; i<=Math.sqrt(n); i++) {
      if(n%i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let ans = 0;
  const numArr = n.toString(k).split('0');
  
  for(let i=0; i<numArr.length; i++) {
      if(isPrime(+numArr[i])) ans++;
  }
  
  return ans;
}