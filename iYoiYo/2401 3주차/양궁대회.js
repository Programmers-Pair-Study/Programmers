// 답지 몇 번 들여다보고 푼 내 풀이
function solution(n, info) {
  let ans = Array(11).fill(0);
  let max = 0;
  const leng = info.length - 1
  
  // count: 남은 화살 수
  // lion, apeach: 라이언, 어피치 점수
  // idx: 현재 과녁 점수의 인덱스
  // arr: 라이언의 점수 배열
  function dfs(count, lion, apeach, idx, arr) {
      // 10점부터 체크해서 0점까지 왔을 때
      if(idx > 10) {
          arr[leng] = count;
          
          const diff = lion - apeach
          
          if(max <= diff) {
              // 같으면 낮은 점수 많이 맞춘 값이 max가 됨
              if(max === diff) {
                  for(let i = 10; i >= 0; i--) {
                      if(ans[i] < arr[i]) break;
                      else if(ans[i] > arr[i]) return;
                  }
              }
              ans = arr;
              max = diff;
          }
          return;
      }
      
      // 남은 화살이 info[idx]보다 클 때
      if(count > info[idx]) {
          const newArr = [...arr];
          dfs(count, lion, apeach + (info[idx] ? (10-idx) : 0), idx + 1, arr);

          newArr[idx] = info[idx] + 1;
          dfs(count - (info[idx] + 1), lion + (10-idx), apeach, idx + 1, newArr)
      }
      // 남은 화살이 info[idx]보다 작거나 같을 때
      else {
          dfs(count, lion, apeach + (info[idx] ? (10-idx): 0), idx + 1, arr);            
      }
  }
  
  dfs(n, 0, 0, 0, ans)
  
  return max === 0 ? [-1] : ans;
}

// 더 간단한 풀이(도대체 maxCount 같을 때 검증은 왜 빠진 거지?)
function solution(n, info) {
let answer = Array(11).fill(0);
let maxCount = 0;

function findMaxPoint(apeachCount, ryanCount, usedShots, point, arr) {
  if (n < usedShots) return; // 사용한 화살의 수가 전체 화살수 보다 큰 경우

  if (point > 10) {
    // 10포인트까지 모든 경우를 탐색한 경우
    let diff = ryanCount - apeachCount;
    if (maxCount < diff) {
      // 포인트 차이가 maxCount보다 큰 경우
      arr[10] = n - usedShots;
      maxCount = diff; // 해당 포인트 차이를 maxCount에 저장
      answer = arr; // 해당 경우를 answer에 저장
    }
    return;
  }

  if (n > usedShots) {
    // 라이언이 이겨 포인트를 얻는 경우
    let current = [...arr];
    current[10 - point] = info[10 - point] + 1;
    findMaxPoint(
      apeachCount,
      ryanCount + point,
      usedShots + info[10 - point] + 1,
      point + 1,
      current
    );
  }

  if (info[10 - point] > 0) {
    // 어피치가 이겨 포인트를 얻는 경우
    findMaxPoint(apeachCount + point, ryanCount, usedShots, point + 1, arr);
  } else {
    // 둘다 점수를 얻지 못하는 경우
    findMaxPoint(apeachCount, ryanCount, usedShots, point + 1, arr);
  }
}

findMaxPoint(0, 0, 0, 0, answer); // 0포인트 부터 나올수 있는 모든 경우를 탐색한다

return maxCount <= 0 ? [-1] : answer;
}