// ㅋㅋㅋㅋ
function solution(strings, n) {
  return strings
    .map((e) => e.charAt(n) + e)
    .sort()
    .map((e) => e.slice(1));
}

// 다른 사람의 풀이
function goodSolution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
