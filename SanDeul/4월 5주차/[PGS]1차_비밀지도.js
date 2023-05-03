function solution(n, arr1, arr2) {
  // 그냥 무지성으로 풀은 듯
  const answer = [];
  let password = "";
  let resultWord = "";

  arr1 = arr1.map((e) => e.toString(2) * 1);
  arr2 = arr2.map((e) => e.toString(2) * 1);

  for (let i = 0; i < arr1.length; i++) {
    password = arr1[i] + arr2[i] + "";

    if (password.length < n) {
      password = "0".repeat(n - password.length) + password;
    }

    for (let j of password) {
      j > 0 ? (resultWord += "#") : (resultWord += " ");
    }

    answer.push(resultWord);
    password = "";
    resultWord = "";
  }

  return answer;
}
// 테스트 1 〉	통과 (0.35ms, 33.5MB)
// 테스트 2 〉	통과 (0.25ms, 33.5MB)
// 테스트 3 〉	통과 (0.09ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.25ms, 33.4MB)
// 테스트 7 〉	통과 (0.20ms, 33.5MB)
// 테스트 8 〉	통과 (0.19ms, 33.5MB)

// padStart 내장함수 참고해서 다시 풀었음
function solution(n, arr1, arr2) {
  const answer = [];
  let password = "";

  arr1 = arr1.map((e, i) => e.toString(2) * 1 + arr2[i].toString(2) * 1 + "");

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length < n) {
      arr1[i] = arr1[i].padStart(n, "0");
    }

    for (let j of arr1[i]) {
      j > 0 ? (password += "#") : (password += " ");
    }

    answer.push(password);
    password = "";
  }

  return answer;
}
// 테스트 1 〉	통과 (0.21ms, 33.5MB)
// 테스트 2 〉	통과 (0.36ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.6MB)
// 테스트 4 〉	통과 (0.21ms, 33.5MB)
// 테스트 5 〉	통과 (0.32ms, 33.6MB)
// 테스트 6 〉	통과 (0.24ms, 33.5MB)
// 테스트 7 〉	통과 (0.24ms, 33.4MB)
// 테스트 8 〉	통과 (0.10ms, 33.6MB)

// 선언 안하고 한번에 푸는게 가능은 할거 같지만 더 뭘 하는건 너무 숏코딩빌런일까...

// 는 장난 쳐봄 - 근데 이게 제일 빠르다..! ㅋㅋ;;
function solution(n, arr1, arr2) {
  return arr1.map((e, i) => {
    e = e.toString(2) * 1 + arr2[i].toString(2) * 1 + "";
    e.length < n ? (e = e.padStart(n, "0")) : e;

    for (let j of e) {
      j > 0 ? (e += "#") : (e += " ");
    }

    return e.slice(n);
  });
}
// 테스트 1 〉	통과 (0.22ms, 33.5MB)
// 테스트 2 〉	통과 (0.25ms, 33.7MB)
// 테스트 3 〉	통과 (0.08ms, 33.2MB)
// 테스트 4 〉	통과 (0.19ms, 33.3MB)
// 테스트 5 〉	통과 (0.21ms, 33.6MB)
// 테스트 6 〉	통과 (0.21ms, 33.5MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.6MB)

// 더 줄여봤는데 확실히 분기처리하는게 빠른듯
function solution(n, arr1, arr2) {
  return arr1.map((e, i) => {
    e = (e.toString(2) * 1 + arr2[i].toString(2) * 1 + "").padStart(n, "0");

    for (let j of e) {
      j > 0 ? (e += "#") : (e += " ");
    }

    return e.slice(n);
  });
}
// 테스트 1 〉	통과 (0.28ms, 33.5MB)
// 테스트 2 〉	통과 (0.38ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.24ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.31ms, 33.6MB)
// 테스트 7 〉	통과 (0.18ms, 33.6MB)
// 테스트 8 〉	통과 (0.25ms, 33.5MB)

// 다른 사람의 풀이
function goodSolution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
// 테스트 1 〉	통과 (0.32ms, 33.6MB)
// 테스트 2 〉	통과 (0.41ms, 33.6MB)
// 테스트 3 〉	통과 (0.24ms, 33.5MB)
// 테스트 4 〉	통과 (0.28ms, 33.8MB)
// 테스트 5 〉	통과 (0.14ms, 33.7MB)
// 테스트 6 〉	통과 (0.33ms, 33.6MB)
// 테스트 7 〉	통과 (0.17ms, 33.7MB)
// 테스트 8 〉	통과 (0.23ms, 33.3MB)
