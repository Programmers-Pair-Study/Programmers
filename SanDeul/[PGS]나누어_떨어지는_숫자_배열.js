function solution(arr, divisor) {
  const resultArr = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return resultArr.length > 0 ? resultArr : resultArr.concat(-1);
}

// 좋은 풀이 (좀 더 최적화 된 풀이)
const goodSolution = (arr, divisor) => {
  const result = arr.filter((e) => e % divisor === 0);
  // sort를 나중에 해준다. 어차피 배열 내에 결과값이 없으면 sort 할 필요가 없으니까..!
  return result.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  // 오류를 앞에서 처리해준다.
};
