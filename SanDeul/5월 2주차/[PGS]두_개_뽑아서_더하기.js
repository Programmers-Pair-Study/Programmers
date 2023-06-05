function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) continue;
      if (result.includes(numbers[i] + numbers[j])) continue;
      result.push(numbers[i] + numbers[j]);
    }
  }

  return result.sort((a, b) => a - b);
}
