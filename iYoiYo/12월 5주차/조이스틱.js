// 내 풀이
function solution(name) {
  const ans = [];
  let init = 0;
  const idx = []
  const total = [];
  const reverseTotal = [];
  name = name.split('');
  const leng = name.length;
  
  const alphabet = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 12, P: 11, Q: 10, R: 9, S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
  }
  
  // 첫 단어 알파벳 변경
  init += alphabet[name[0]]
  
  // A 아닌 알파벳 index 추출
  for(let i=1; i<name.length; i++) {
      if(name[i] !== 'A') idx.push(i)
  }

  if(!idx.length) return init;
  
  // idx의 총합 계산
  calTotal(idx, total, calculate)
  
  // idx 총합 역방향 계산
  const reverseIdx = [...idx].reverse();
  calTotal(reverseIdx, reverseTotal, calculateReverse)
  
  // 총합 계산 함수
  function calTotal(idxArr, totalArr, calFunc) {
      idxArr.reduce((acc, cur, i) => {
          const result = acc + calFunc((i === 0 ? 0 : idxArr[i-1]), cur)
          totalArr.push(result);

          return result;
      }, init)
  }
  
  // 한 번씩 커서 방향 바꿀 때 계산
  const idxLeng = idx.length
  const lastIdx = idx[idxLeng-1];
  for(let i=0; i<idxLeng-1; i++) {
      const result = total[i] + turn(idx[i], 'reverse') + reverseTotal[idxLeng-i-2]
      const reverseResult = reverseTotal[i] + turn(reverseIdx[i]) + total[idxLeng-i-2]
      
      ans.push(result, reverseResult);
  }
  return Math.min(total.pop(), reverseTotal.pop(), ...ans);
  
  // 정방향 계산
  function calculate(cur, next) {
      return (next - cur) + alphabet[name[next]];
  }
  
  // 역방향 계산
  function calculateReverse(cur, next) {
      return (cur === 0 ? leng - next : cur - next) + alphabet[name[next]];
  }
  
  // 정방향 & 역방으로 턴
  function turn(cur, direction = 'forward') {
      return (direction === 'reverse' ? cur : (leng - cur)) - init;
  }
}

// 빠른 풀이
function solution(name) {
  let ans = 0;
  const leng = name.length
  
  const alphabet = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 12, P: 11, Q: 10, R: 9, S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
  }
  
  // 정방향으로 쭉 가는게 제일 빠른 방법
  let min = leng - 1
  
  // 'name'을 모두 돌며 최소값 체크
  for(let i=0; i < leng;) {
      // 알파벳에 따라 카운트 추가
      ans += alphabet[name[i]];
      
      let nextIdx = i + 1;
      // nextIdx가 A일 때 다음으로 넘어감
      while(nextIdx < leng && name[nextIdx] === 'A') nextIdx++;
      
      min = Math.min(min,
                     // 정방향으로 가다가 nextIdx까지 역으로 돌아가기
                     // 처음 위치에서 i까지 왔다가 다시 돌아가기 때문에 *2
                     // 역으로 가기 때문에 leng-nextIdx
                     // 마지막일 때는 nextIdx === leng 이라 0이 됨
                     i*2+(leng-nextIdx),
                     // 역방으로 nextIdx까지 가다가 정방향으로 돌아가기
                     // nextIdx까지 갔다가 처음으로 돌아오기 때문에 *2
                     // i 만큼 가기
                     (leng-nextIdx)*2+i)
      
      // 'A' 모두 지나치고부터 시작할 수 있도록 i 할당
      i = nextIdx;
  }
  
  ans += min;
  return ans;
}