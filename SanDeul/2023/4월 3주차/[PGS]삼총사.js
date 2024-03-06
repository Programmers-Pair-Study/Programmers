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
  // 그리고 이 문제의 경우 전부 더한 값(0)의 경우의 수가 몇 개 나올 수 있는가 보는 것이므로
  // 원소가 서로 같고 순서만 다른 경우의 수를 모은 후 그 length 만큼 나눠준다

  return count / 6; // 더 좋은 코드를 만들기 위해선 6으로 나누기보단 숫자를 만드는 로직을 추가하는 게 좋겠다..
}
