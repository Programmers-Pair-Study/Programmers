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
  var list = priorities.map((t,i)=>({
      my : i === location,
      val : t
  }));
  var count = 0;        
  while(true){
      var cur = list.splice(0,1)[0];        
      if(list.some(t=> t.val > cur.val )){
          list.push(cur);                        
      }
      else{            
          count++;
          if(cur.my) return count;
      }
  }
}