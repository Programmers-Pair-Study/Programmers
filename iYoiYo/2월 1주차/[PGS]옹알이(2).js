// function solution(babbling) {
//     let answer = 0;
    
//     for(let i=0; i<babbling.length; i++) {
//         const word = babbling[i].replace(/(aya|ye|woo|ma)/g, (word) => {
//             switch(word) {
//                 case 'aya':
//                     return '1';
//                 case 'ye':
//                     return '2';
//                 case 'woo':
//                     return '3';
//                 case 'ma':
//                     return '4';
//             }
//         });
//         if((/\D/g).test(word) || (/([1-4]){1}\1/).test(word)) continue;
//         answer++;
//     }
    
//     return answer;
// }

// 미친 사람 풀이
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}