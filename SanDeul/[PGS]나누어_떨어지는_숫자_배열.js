function solution(arr, divisor) {
  const resultArr = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return resultArr.length > 0 ? resultArr : resultArr.concat(-1);
}
