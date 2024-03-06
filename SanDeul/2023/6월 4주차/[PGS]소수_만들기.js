function solution(nums) {
  let value = 0;
  let isPrime = false;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      for (let k = 0; k < nums.length; k++) {
        if (j === k) continue;
        if (i === k) continue; // 좀더 중복되지 않게 하면...

        value = nums[i] + nums[j] + nums[k];

        for (let l = value - 1; l > 0; l--) {
          if (value % l === 0 && l !== 1) {
            isPrime = false;
            break;
          }
          if (l === 1) isPrime = true;
        }

        if (isPrime) {
          // 그리고 굳이 이렇게 할 필요 없이 ++cnt 를 하는 게 더 나았을지도
          value = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join("|");
          if (!result.includes(value)) result.push(value);
        }
      }
    }
  }

  return result.length;
}
