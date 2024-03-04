function solution(d, budget) {
  // 성능이 좋긴 한데 더러운듯? 근데 자꾸 문제 조건 이탈해서 짜증났었음(풀기 싫었음 ㅎㅎ;;)
  let addCost = 0;
  const sortD = d.sort((a, b) => a - b); // 무분별한 선언 자제좀

  for (let i = 0; i < sortD.length; i++) {
    if (addCost < budget) {
      addCost += sortD[i];
      if (i === sortD.length - 1 && addCost <= budget) {
        return sortD.length;
      }
    }
    if (addCost > budget) {
      return i;
    }
    if (addCost == budget) {
      return i + 1;
    }
    if (sortD.length === 1 && addCost <= budget) {
      return 1;
    }
  }
}

// 효율은 별로지만 이쁜 것 같음
function goodSolution1(d, budget) {
  d.sort((a, b) => a - b); // d를 sort한 것을 굳이 선언할 필요가 없군여..
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
}

// 아주 굿...
function goodSolution2(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0); // (budget -= price) >= 0 으로, 계산 결과인 boolean을 더해 줌으로써 다시 number로 변환
    }, 0);
}

function goodSolution3(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach((val) => {
    money += val;
    if (money <= budget) {
      answer++;
    }
  });
  // 깔끔하긴 하나 한바퀴를 완주해야만 하므로 성능은 for-break가 우수함
  return answer;
}

// 반복문 종료 방법에 대해 정리
// 1. break - 반복문을 실행하다가 break 문을 만나면 반복문은 그 즉시 실행을 멈추고 종료된다.
// 2. continue - 특정 조건이 주어졌을 때, 그 조건이 만족하는 값을 만나면 명령을 건너뛰고 다음으로 넘어갈 때 사용한다.
// 3. return - 반복문을 종료시키기도 하지만 함수 자체를 종료시킨다.
// 출처 : https://jindev-t.tistory.com/105
