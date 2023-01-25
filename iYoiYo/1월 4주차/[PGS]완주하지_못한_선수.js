function solution(participant, completion) {
  let answer = '';
  const list = {};
  
  participant.forEach(x => {
      if(!list[x]) {
          list[x] = 1;
          return;
      }
      list[x] += 1;
  })
  
  completion.forEach(x => {
      list[x] -= 1;
  })
  
  for(i in list) {
      if(list[i] === 1) {
          return i
      }
  }
//     participant.sort();
//     completion.sort();
  
//     for(let i=0; i<participant.length; i++) {
//         if(participant[i] !== completion[i]) return participant[i]
//     }
}