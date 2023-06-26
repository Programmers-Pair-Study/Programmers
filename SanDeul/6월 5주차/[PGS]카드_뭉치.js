// 솔직하게 풀기 싫었던 문제였슴다 죄삼다 ㅎ..
function solution(cards1, cards2, goal) {
  let cards1Index = "";
  let cards2Index = "";

  for (let i = 0; i < goal.length; i++) {
    if (cards1.find((e) => e === goal[i])) {
      cards1Index += cards1.findIndex((e) => e === goal[i]);
    } else if (cards2.find((e) => e === goal[i])) {
      cards2Index += cards2.findIndex((e) => e === goal[i]);
    } else {
      return "No";
    }
  }

  const sortVerify1 =
    cards1Index === "012345678910".slice(0, cards1Index.length);
  const sortVerify2 =
    cards2Index === "012345678910".slice(0, cards2Index.length);

  return sortVerify1 && sortVerify2 ? "Yes" : "No";
}

// 다른 사람의 풀이
function solution(cards1, cards2, goal) {
  // 제일 깔끔...
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
