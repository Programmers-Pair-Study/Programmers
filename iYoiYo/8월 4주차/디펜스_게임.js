// 내가 푼 시간초과 풀이
function solution(n, k, enemy) {
    const totalRound = enemy.length;
    if(totalRound <= k) return totalRound;
    
    for(let i=0; i<totalRound; i++) 
    
    for(let i=0; i<totalRound; i++) {
        const cur = enemy[i]
        if(n-cur <= 0) {
            if(k) {
                const max = Math.max(...enemy.slice(0, i+1))
                enemy[enemy.indexOf(max)] = 0;
                n += max;
                k--;
            }
            else return i;
        }
        n -= cur
    }
    
    return totalRound;
}

function solution(n, k, enemy) {
    let ans = 0;
    let start = 0, end = enemy.length;
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const arr = enemy.slice(0, mid).sort((a, b) => b-a);
        
        let pass = true;
        let total = 0;
        
        for(let i=k; i<arr.length; i++) {
            total += arr[i];
            if(total > n) pass = false;
        }
        
        if(pass) {
            ans = mid;
            start = mid+1;
        }
        else end = mid-1;
    }
    
    return ans
}

// 이분 탐색
function solution(n, k, enemy) {
  let lt = 0, rt = enemy.length;

  while(lt <= rt) {
      let mid = Math.floor((lt+rt) / 2);
      if(check(n, k, mid, enemy)) lt = mid+1;
      else rt = mid - 1;
  }

  return lt - 1;
}

const check = (n, k, mid, enemy) => {
  if (mid <= k) return true;

  let t = enemy.slice(0, mid).sort((a, b) => b - a);
  let sum = 0;

  for (let i = k; i < t.length; i++) {
      sum += t[i];
      if (sum > n) return false;
  }
  return true;
}