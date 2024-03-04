// 최종 풀이
function solution(s) {
  const voca = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  voca.map((eachVoca, i) => {
    if (s.includes(eachVoca)) {
      s = s.replaceAll(eachVoca, i);
    }
  });
  return s * 1;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)

// 선언 안하고 풀기
function solution(s) {
  [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].map((eachVoca, i) => {
    if (s.includes(eachVoca)) {
      s = s.replaceAll(eachVoca, i);
    }
  });
  return s * 1;
}

// 테스트 1 〉  통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.3MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.3MB)

// 맨 처음 풀이
function solution(s) {
  if (s.includes("one")) {
    s = s.replaceAll("one", "1");
  }
  if (s.includes("two")) {
    s = s.replaceAll("two", "2");
  }
  if (s.includes("three")) {
    s = s.replaceAll("three", "3");
  }
  if (s.includes("four")) {
    s = s.replaceAll("four", "4");
  }
  if (s.includes("five")) {
    s = s.replaceAll("five", "5");
  }
  if (s.includes("six")) {
    s = s.replaceAll("six", "6");
  }
  if (s.includes("seven")) {
    s = s.replaceAll("seven", "7");
  }
  if (s.includes("eight")) {
    s = s.replaceAll("eight", "8");
  }
  if (s.includes("nine")) {
    s = s.replaceAll("nine", "9");
  }
  if (s.includes("zero")) {
    s = s.replaceAll("zero", "0");
  }

  return s * 1;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.3MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33MB)
// 테스트 6 〉	통과 (0.06ms, 32.9MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
