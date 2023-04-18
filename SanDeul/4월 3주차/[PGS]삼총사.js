function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (i == j) continue;
      for (let k = 0; k < number.length; k++) {
        if (i == k) continue;
        if (j == k) continue;

        if (number[i] + number[j] + number[k] === 0) count++;
      }
    }
  }

  // 일단 모든 경우의 수를 구한다,
  // 그리고 전부 더한 값(0)의 경우의 수가 몇개 나올 수 있는가 보는 것이므로
  // 원소가 서로 같고 순서만 다른 경우의 수는 삭제해준다
  // (다각형 꼭짓점 접근 경우의 수 같은 느낌으로(length = 꼭짓점의 갯수) 그만큼 나누기)

  return count / 6;
}
