function solution(quiz) {
  let answer = [];

  return quiz.map((formula) => {
    answer = formula.split(" ");
    let [num1, operator, num2, equal, result] = answer;

    if (operator === "+") {
      return num1 * 1 + num2 * 1 === result * 1 ? "O" : "X";
    } else {
      return num1 * 1 - num2 * 1 === result * 1 ? "O" : "X";
    }
  });
}
