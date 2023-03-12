function solution(record) {
  const ans = [];
  const user = {};
  
  for(let i=0; i<record.length; i++) {
      const [state, id, nick] = record[i].split(' ');
      
      if(state === 'Change') {
          user[id] = nick;
      }
      else if(state === 'Enter') {
          ans.push(`${id}님이 들어왔습니다.`)
          user[id] = nick;
      }
      else {
          ans.push(`${id}님이 나갔습니다.`);
      }
  }
  
  return ans.map(msg => {
      const changeId = msg.split('님이')[0]
      return msg.replace(changeId, user[changeId]);
  })
}

// function solution(record) {
//     const ans = []
//     const user = {};
//     const stateMsg = {
//         'Enter': '님이 들어왔습니다.',
//         'Leave': '님이 나갔습니다.'
//     }
  
//     for(let i=0; i<record.length; i++) {
//         const [state, id, nick] = record[i].split(' ');
      
//         if(!(state === 'Change')) ans.push([state, id])
//         if(nick) user[id] = nick;
//     }
  
//     return ans.map(([state, id]) => `${user[id]}${stateMsg[state]}`);
// }