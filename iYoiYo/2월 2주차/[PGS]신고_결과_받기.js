// function solution(id_list, report, k) {
//     const decCount = {};
//     const userDec = {};
//     let banUser = [];
    
//     report = new Set(report);
    
//     report.forEach(data => {
//         const [user, decUser] = data.split(' ');
        
//         if(!userDec[user]) {
//             userDec[user] = [decUser]
//         }
//         else {
//             userDec[user].push(decUser);
//         }
        
//         decCount[decUser] = decCount[decUser] ? decCount[decUser] + 1 : 1;
//     })
    
//     banUser = Object.keys(decCount).filter(id => decCount[id] >= k);
    
//     if(banUser.length === 0) return new Array(id_list.length).fill(0)
    
//     return id_list.map(id => {
//         if(!userDec[id]) return 0;
        
//         let count = 0;
        
//         for(let i=0; i<banUser.length; i++) {
//             userDec[id].includes(banUser[i]) && count++;
//         }
//         return count;
//     })
// }

// Map을 이용한 풀이 따라해보기
function solution(id_list, report, k) {
  const reports = [...new Set(report)].map(x => x.split(' '));
  
  const counts = new Map();
  for(const dec of reports) {
      counts.set(dec[1], counts.get(dec[1])+1 || 1)
  }
  
  const good = new Map();
  for(const dec of reports) {
      if(counts.get(dec[1]) >= k) {
          good.set(dec[0], good.get(dec[0]) + 1 || 1)        
      }
  }
  return id_list.map(x => good.get(x) || 0)
}