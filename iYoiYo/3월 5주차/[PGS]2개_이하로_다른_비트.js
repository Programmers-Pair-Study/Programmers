// 내가 푼 풀이(시간 오래 걸림)
// function solution(numbers) {
//     const ans = [];

//     for(let i=0; i<numbers.length; i++) {
//         const changeNum = numbers[i].toString(2);
//         const idx = changeNum.lastIndexOf('0');

//         if(idx+1) {
//             const numArr = changeNum.split('');
//             numArr[idx] = '1';

//             const oneIdx = changeNum.indexOf('1', idx);
//             if(oneIdx+1) {
//                 numArr[oneIdx] = '0';
//             }

//             ans.push(parseInt(numArr.join(''), 2))
//         }

//         else {
//             ans.push(parseInt(('10' + changeNum.slice(1)), 2))
//         }
//     }

//     return ans;
// }

// function solution(numbers) {
//     const ans = [];

//     numbers.forEach(x => {
//         if(x%2 === 0) {
//             ans.push(x+1);
//         }
//         else {
//             const changeNum = '10' + x.toString(2).slice(1);
//             ans.push(parseInt(changeNum, 2))
//         }
//     })

//     return ans;
// }

// 미친 사람 풀이...해석하는데도 오래걸림
function solution(numbers) {
  var answer = [];
  let c;
  numbers.forEach((v) => {
    if (v < 2 || v % 2 === 0) {
      answer.push(v + 1);
    } else {
      let c = 2;
      while (true) {
        if ((v + 1) % (c * 2) === 0) {
          c = c * 2;
        } else {
          break;
        }
      }
      answer.push(v + c / 2);
    }
  });
  return answer;
}
