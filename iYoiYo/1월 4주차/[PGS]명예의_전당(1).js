function solution(k, score) {
  const answer = [];
  const board = [];
  
  score.forEach((x, i) => {
      if(i<k) {
          board.push(x);
          answer.push(Math.min(x, ...answer));
          return;
      }
      board.push(x)
      // board.sort((a, b) => b-a).splice(k, 1);
      board.sort((a, b) => b-a).pop();
      answer.push(Math.min(...board))
  })
  
  return answer;
}
// function solution(k, score) {
//     var temp = [];
//     let answer = [];

//     score.forEach(el => {
//         temp.push(el);
//         temp.sort((a, b) => b - a);
//         if(k < temp.length)
//             answer.push(temp[k - 1]);
//         else
//             answer.push(temp[temp.length - 1]);
//     })
//     return answer;
// }