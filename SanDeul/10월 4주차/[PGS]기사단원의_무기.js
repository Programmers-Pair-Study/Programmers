// 첫트 (FAIL) - 근데 솔직히 안될거 같았음...
function solution(number, limit, power) {
  let result = 0;
  let measureCount = 0;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) measureCount += 1;
    }

    count = measureCount > limit ? power : measureCount;
    result += count;

    count = 0;
    measureCount = 0;
  }

  return result;
}

// 테스트 1 〉	통과 (198.85ms, 36.3MB)
// 테스트 2 〉	통과 (14.44ms, 36.3MB)
// 테스트 3 〉	통과 (5.45ms, 36.4MB)
// 테스트 4 〉	통과 (20.13ms, 36.3MB)
// 테스트 5 〉	통과 (3.72ms, 36.4MB)
// 테스트 6 〉	통과 (186.43ms, 36.3MB)
// 테스트 7 〉	통과 (14.60ms, 36.3MB)
// 테스트 8 〉	통과 (8.72ms, 36.3MB)
// 테스트 9 〉	통과 (194.76ms, 36.1MB)
// 테스트 10 〉	통과 (8.83ms, 36.4MB)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	실패 (시간 초과)
// 테스트 15 〉	실패 (시간 초과)
// 테스트 16 〉	실패 (시간 초과)
// 테스트 17 〉	통과 (0.04ms, 33.4MB)
// 테스트 18 〉	실패 (시간 초과)
// 테스트 19 〉	통과 (14.12ms, 36.3MB)
// 테스트 20 〉	통과 (13.32ms, 36.4MB)
// 테스트 21 〉	통과 (0.06ms, 33.5MB)
// 테스트 22 〉	통과 (0.04ms, 33.4MB)
// 테스트 23 〉	통과 (0.16ms, 33.4MB)
// 테스트 24 〉	실패 (시간 초과)
// 테스트 25 〉	실패 (시간 초과)
// 테스트 26 〉	통과 (5.55ms, 36.4MB)
// 테스트 27 〉	통과 (4.78ms, 36.3MB)

// 2트 - 제곱근 활용
// https://mine-it-record.tistory.com/522
function solution(number, limit, power) {
  let measureCount = [];
  let count = 0;
  let result = 0;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        measureCount.push(j);
        if (i / j != j) measureCount.push(i / j);
      }
    }
    count = measureCount.length > limit ? power : measureCount.length;
    result += count;
    measureCount = [];
  }

  return result;
}
// 테스트 1 〉	통과 (7.22ms, 38MB)
// 테스트 2 〉	통과 (537.00ms, 37.4MB)
// 테스트 3 〉	통과 (3.29ms, 37.4MB)
// 테스트 4 〉	통과 (4.04ms, 37.4MB)
// 테스트 5 〉	통과 (3.21ms, 37.1MB)
// 테스트 6 〉	통과 (246.14ms, 37.9MB)
// 테스트 7 〉	통과 (3.89ms, 37.5MB)
// 테스트 8 〉	통과 (3.43ms, 37.3MB)
// 테스트 9 〉	통과 (6.72ms, 38MB)
// 테스트 10 〉	통과 (156.99ms, 37.2MB)
// 테스트 11 〉	통과 (81.81ms, 38.1MB)
// 테스트 12 〉	통과 (82.04ms, 38MB)
// 테스트 13 〉	통과 (81.87ms, 38MB)
// 테스트 14 〉	통과 (81.53ms, 38MB)
// 테스트 15 〉	통과 (85.14ms, 38.1MB)
// 테스트 16 〉	통과 (88.26ms, 38.1MB)
// 테스트 17 〉	통과 (0.05ms, 33.5MB)
// 테스트 18 〉	통과 (86.80ms, 38MB)
// 테스트 19 〉	통과 (3.80ms, 37.4MB)
// 테스트 20 〉	통과 (3.65ms, 37.5MB)
// 테스트 21 〉	통과 (0.09ms, 33.5MB)
// 테스트 22 〉	통과 (0.05ms, 33.4MB)
// 테스트 23 〉	통과 (0.15ms, 33.6MB)
// 테스트 24 〉	통과 (93.05ms, 38MB)
// 테스트 25 〉	통과 (93.94ms, 37.9MB)
// 테스트 26 〉	통과 (3.19ms, 37MB)
// 테스트 27 〉	통과 (3.18ms, 37.1MB)
