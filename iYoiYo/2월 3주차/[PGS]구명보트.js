// function solution(people, limit) {
//     let ans = 0;
//     const rescue = [];
//     let s = 0, e = 0;
//     const length = people.length
    
//     people.sort((a, b) => a-b);
    
//     while(length > rescue.length) {
//         const lastP = people[length-1-e];
//         const firstP = people[0+s];
        
//         if(rescue.length + 1 === length) {
//             return ++ans;
//         }
        
//         if(firstP + lastP > limit) {
//             rescue.push(lastP);
//         }
//         else {
//             rescue.push(lastP, firstP);
//             s++;
//         }
//         e++;
//         ans++;
//     }
//     return ans;
// }

function solution(people, limit) {
  people.sort(function(a, b){return a-b});
  for(var i=0, j=people.length-1; i < j; j--) {
      if( people[i] + people[j] <= limit ) i++;
  }    
  return people.length-i;
}