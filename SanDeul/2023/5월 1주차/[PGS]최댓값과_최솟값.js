function solution(s) {
  s = s.split(" ").sort((a, b) => a - b);
  return [s[0], s[s.length - 1]].join(" ");
} // 선언 안하려고 노력한거 good~~

function goodSolution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
} // Math.min, Math.max는 문자열도 취급한다.
