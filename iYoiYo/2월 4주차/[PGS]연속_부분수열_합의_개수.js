// function solution(elements) {
//     let ans = new Set();
    
//     for(let i=0; i<elements.length; i++) {
//         for(let j=0; j<elements.length; j++) {
//             let sum = 0
//             for(let k=j; k<=i+j; k++) {
//                 if(k >= elements.length) {
//                     sum+=elements[k-elements.length];
//                     continue;
//                 }
//                 sum += elements[k];
//             }
//             ans.add(sum);
//         }
//     }    
//     return ans.size;
// }

// 펼칠 생각을 해보자
function solution(elements) {
  const doubleElem = elements.concat(elements);
  const ans = new Set();
  
  for(let i=0; i<elements.length; i++) {
      let sum = 0;
      for(let j=0; j<elements.length; j++) {
          sum += doubleElem[i+j];
          ans.add(sum);
      }
  }
  
  return ans.size
}