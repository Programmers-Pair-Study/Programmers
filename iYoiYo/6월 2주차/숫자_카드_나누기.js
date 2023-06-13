// 멍청하게 잘못 생각한 풀이(시간초과는 안 뜨지만 실패 있음)
function gcd(a, b) {
  const mod = a%b;
  if(mod === 0) return b;
  return gcd(b, mod)
}

function findDivde(n, arr) {
  if(n !== 1) arr.push(n);
  for(let i=2; i<=Math.sqrt(n); i++) {
      if(n%i ===0) arr.push(i, n/i);
  }
}

function compareArr(originArr, gcdArr) {
  if(gcdArr.length === 0) return 0;
  
  const result = [];
  
  for(let i=0; i<gcdArr.length; i++) {
      for(let j=0; j<originArr.length; j++) {
          if(originArr[j]%gcdArr[i] === 0) break;
          if(j === originArr.length-1) result.push(gcdArr[i]);
      }
  }
  
  return Math.max(...result);
}

function solution(arrayA, arrayB) {
  const ans = [];
  let aGcd = 1, bGcd = 1;
  const aDiv = [], bDiv = [];
  for(let i=0; i<arrayA.length-1; i++) {
      const a = gcd(arrayA[i], arrayA[i+1]), b = gcd(arrayB[i], arrayB[i+1])
      if(aGcd < a) aGcd = a;
      if(bGcd < b) bGcd = b;
  }
  
  findDivde(aGcd, aDiv);
  findDivde(bGcd, bDiv);
      
  ans.push(compareArr(arrayA, bDiv));
  ans.push(compareArr(arrayB, aDiv));

  return Math.max(...ans);
}

// some을 이용한 풀이
function solution(arrayA, arrayB) {
  // 1) 철수만 모든 숫자를 나눌수 있는 경우 
  let a = getDvsr(arrayA, arrayB);

  // 2) 영희만 모든 숫자를 나눌수 있는 경우 
  let b = getDvsr(arrayB, arrayA);
      
  return Math.max(a,b);
}
function getDvsr(arrayA, arrayB){
  let answer = 0;

  // 3) 최대 공약수를 구하는 재귀 함수
  const gcd =  (a, b) => a % b === 0 ? b : gcd(b, a % b);
  
  // 4) arrayA 배열에 담긴 값의 초대 공약수 구한다.
  arrayA.forEach(val => answer = gcd(answer, val));

  // 5) arrayB 배열의 값이 하나라도 arrayA의 최대 공약수로 나누어 진다면 0을 return 한다.
  if(arrayB.some(val => val%answer === 0)) return 0;
  
  // 6) 나누어지지 않으면 최대 공약수 return
  return answer;
}