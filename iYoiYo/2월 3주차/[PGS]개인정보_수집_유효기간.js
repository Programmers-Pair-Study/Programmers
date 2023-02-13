// function solution(today, terms, privacies) {
//     const ans = [];
//     const expiration = {}

//     for(const a of terms) {
//         const [name, due] = a.split(' ');
//         expiration[name] = +due;
//     }

//     for(const privacy of privacies) {
//         const [regDay, name] = privacy.split(' ');
//         let [year, month, day] = regDay.split('.').map(x => +x);
        
//         if(day-1 === 0) {
//             day = 28;
//             month--;
//         }
//         else day--;
        
//         if(month+expiration[name] > 12) {
//             year += (month+expiration[name])%12 === 0 ? Math.floor((month+expiration[name])/12) - 1 : Math.floor((month+expiration[name])/12);
//             month = (month+expiration[name])%12 || 12;
//         }
//         else month += expiration[name];
        
//         ans.push(`${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`)
//     }
    
//     return ans.reduce((acc, cur, i) => {
//         if(cur < today) return [...acc, i+1];
//         return acc
//     }, [])
// }


// 멋쟁이 풀이
function calTotalDay(day) {
  const [dY, dM, dD] = day.split('.').map(Number);
  return dY*28*12 + dM*28 + dD;
}

function solution(today, terms, privacies) {
  const ans = [];
  const expiration = {};
  today = calTotalDay(today);

  terms.forEach(x => {
      const [type, month] = x.split(' ');
      expiration[type] = month*28;
  })

  privacies.forEach((privacy, i) => {
      const [day, type] = privacy.split(' ');
      const totalDay = calTotalDay(day) + expiration[type];
    
      if(totalDay <= today) ans.push(i+1);
  })
  
  return ans;
}