function solution(s, n) {
  let code = 0;
  const codeArr = s.split("").map((str) => {
    code = str.charCodeAt(0);
    if (code === 32) {
      return 32;
    } else {
      if (code <= 90) {
        code += n;
        if (code > 90) code -= 26;
        return code;
      }
      if (code >= 97) {
        code += n;
        if (code > 122) code -= 26;
        return code;
      }
    }
  });
  const [...codes] = codeArr;
  return String.fromCharCode(...codes);
}
// 테스트 1 〉	통과 (0.16ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 32.7MB)
// 테스트 3 〉	통과 (0.17ms, 33.5MB)
// 테스트 4 〉	통과 (0.12ms, 32.9MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.5MB)
// 테스트 7 〉	통과 (0.17ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.5MB)
// 테스트 9 〉	통과 (0.17ms, 33.6MB)
// 테스트 10 〉	통과 (0.08ms, 33.4MB)
// 테스트 11 〉	통과 (0.19ms, 33.6MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (1.89ms, 36.3MB)

const goodSolution1 = (s, n) => {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }

    let textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;

    answer += textArr[index];
  }
  return answer;
};

const goodSolution2 = (s, n) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    else
      (result += String),
        fromCharCode(
          s.charCodeAt(i) > 90
            ? ((s.charCodeAt(i) + n - 97) % 26) + 97
            : ((s.charCodeAt(i) + n - 65) % 26) + 65
        );
  }

  return result;
};

function goodSolution3(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
    return String.fromCharCode(
      ((c.charCodeAt(0) - startCode + n) % 26) + startCode
    );
  });
}
