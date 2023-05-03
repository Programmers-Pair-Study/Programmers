// 1개 시간초과, 2개 실패한 내 코드...
// function solution(queue1, queue2) {
//     let ans = 0;
    
//     let qu1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
//     let qu2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
    
//     const qu1Origin = qu1Sum, qu2Origin = qu2Sum;
    
//     if(qu1Sum === qu2Sum) return ans;
    
//     let qu1Idx = 0, qu2Idx = 0
//     let qu1Leng = queue1.length, qu2Leng = queue2.length;
//     let qu1Stack = [], qu2Stack = [];
    
//     while(1) {
//         if(qu1Sum > qu2Sum) {
//             const target = queue1[qu1Idx]
//             qu2Stack.push(target);
//             qu1Sum -= target;
//             qu2Sum += target;
//             qu1Idx++;
            
//             if(qu1Idx === qu1Leng) {
//                 queue1 = [...qu1Stack];
//                 qu1Stack = [];
//                 qu1Idx = 0;
//                 qu1Leng = queue1.length;
//             }
//         }
//         else if(qu2Sum > qu1Sum) {
//             const target = queue2[qu2Idx]
//             qu1Stack.push(target);
//             qu2Sum -= target;
//             qu1Sum += target;
//             qu2Idx++;
            
//             if(qu2Idx === qu2Leng) {
//                 queue2 = [...qu2Stack];
//                 qu2Stack = [];
//                 qu2Idx = 0;
//                 qu2Leng = queue2.length;
//             }
//         }
//         else {
//             return ans;
//         }
//         // if(JSON.stringify(qu1Origin) === JSON.stringify(queue1) || JSON.stringify(qu2Origin) === JSON.stringify(queue2)) return -1;

//         if(qu1Origin === qu1Sum && qu2Origin === qu2Sum) return -1;
//         ans++;
//     }
// }

// 이렇게 간단하게 풀다니...
function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc+cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc+cur, 0);
  
  let target = (sum1 + sum2) / 2;
  let i1 = 0, i2 = queue1.length;
  const max = queue1.length*3;
  const newQueue = [...queue1, ...queue2];
  
  for(let i=0; i<max; i++) {
      if(sum1 === target) return i;
      
      sum1 = sum1 > target ? sum1-newQueue[i1++] : sum1+newQueue[i2++];
  }
  return -1
}