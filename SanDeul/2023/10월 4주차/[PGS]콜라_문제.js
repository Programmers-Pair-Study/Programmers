// 직관적으로 나름 잘 풀은듯..
function solution(a, b, n) {
  let result = 0;
  let remain = 0;

  while (n >= a) {
    remain = n % a;
    n = n - remain;
    result = result + (n / a) * b;
    n = remain + (n / a) * b;
  }

  return result;
}
// 테스트 1 〉	통과 (0.04ms, 33.2MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.2MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.04ms, 33.4MB)
// 테스트 12 〉	통과 (0.26ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.3MB)

// 내 풀이에서 remain 변수를 빼고 푼 풀이
// -> 나머지를 가공하는 대신 parseInt로 대체
function goodSolution(a, b, n) {
  let result = 0;
  while (n >= a) {
    result += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }
  return result;
}
