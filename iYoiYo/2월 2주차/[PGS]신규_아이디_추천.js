// function solution(new_id) {
//     // let answer = new_id.toLowerCase().replace(/\.{2,}/g, '.').replace(/[^\w\.\-\_]/g, '');
//     let answer = new_id.toLowerCase().replace(/[^\w\.\-\_]/g, '').replace(/[\.]+/g, '.');

//     function deleteDot() {
//         while(answer[0] === '.' || answer[answer.length-1] === '.') {
//             if(answer[0] === '.') answer = answer.slice(1);
//             if(answer[answer.length-1] === '.') answer = answer.slice(0, -1)
//         }
//     }
    
//     deleteDot();

//     if(answer.length < 3) {
//         if(answer.length !== 0) {
//             answer += answer[answer.length-1].repeat(3-answer.length);
//             return answer;
//         }
//         else {
//             answer = 'aaa';
//             return answer;
//         }
//     }

//     if(answer.length > 15) {
//         answer = answer.slice(0, 15);
//         deleteDot();
//     }    

//     return answer;
// }

// 미친 사람의 체이닝 풀이
function solution(new_id) {
  const answer = new_id
                  .toLowerCase()
                  .replace(/[^\w\.\-\_]/g, '')
                  .replace(/\.+/g, '.')
                  .replace(/^\.|\.$/g, '')
                  .replace(/^$/, 'a')
                  .slice(0, 15)
                  .replace(/\.$/, '')
  
  const leng = answer.length;
  return leng < 3 ? answer + answer.charAt(leng - 1).repeat(3-leng) : answer
        
  return answer;
}

console.log(solution('...a.d..d....'))