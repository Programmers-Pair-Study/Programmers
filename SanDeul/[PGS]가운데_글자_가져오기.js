// 시도 - 멍청했음......
// function solution(s) {
//     let answer = ''
//     for(let i of s){
//         if(s.length%2 === 0){
//             if(s.indexOf(i) === s.length/2 - 1 || s.indexOf(i) === s.length/2){
//                 answer += i
//             }
//         }else{
//             if(Math.round(s.indexOf(i)) === Math.round(s.length/2) - 1){
//                 answer += i
//             }
//         }
//     }
//     return answer
// }

// 최종 풀이
function solution(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2));
  }
}

// 좋은 풀이 (삼항 연산자는 이렇게 쓰는거다!)
function goodSolution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
// substr 메서드는 지금은 사용하지 않는다(없어짐)
// Math.ceil(올림) / floor(내림) / round(반올림) = 소수점 올림 / 내림 / 반올림
