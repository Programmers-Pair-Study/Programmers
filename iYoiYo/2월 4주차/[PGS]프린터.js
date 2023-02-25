// function solution(priorities, location) {
//     let ans = 0;
    
//     while(1) {
//         const num = priorities.shift();
        
//         if(Math.max(num, ...priorities) === num) {
//             ans++;
//             if(location === 0) {
//                 return ans;
//             }
//         }
//         else {
//             priorities.push(num);
//         }
        
//         location--;
        
//         if(location === -1) {
//             location = priorities.length-1
//         }
//     }
// }

function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
      return {
          index: index, priority: priority
      };
  });

  var queue = [];

  while(arr.length > 0) {
      var firstEle = arr.shift();
      var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
      if (hasHighPriority) {
          arr.push(firstEle);
      } else {
          queue.push(firstEle);
      }
  }

  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}