// function solution(files) {
//     let ans = [];
    
//     files.sort((a, b) => {
//         const newA = a.slice(0, a.indexOf(a.match(/\d/))).toLowerCase();
//         const newB = b.slice(0, b.indexOf(b.match(/\d/))).toLowerCase();
                
//         if(newA < newB) return -1
//         else if(newA > newB) return 1
//         else {
//             const numberA = Number(a.match(/\d{1,}/)[0]);
//             const numberB = Number(b.match(/\d{1,}/)[0]);
//             return numberA-numberB;
//         }
//     })
    
//     return files;
// }

function solution(files) {
  // 정규식에서 괄호로 나눠두면 전체 적으로 포함되는 것과 각 괄호에 해당하는 것들도 각각 나옴
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/
  let dict = []
  files.forEach((entry, idx) => {
      let [fn, head, num] = entry.match(re)
      dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
  })

  return dict.sort((a, b) => {
      if (a.head > b.head) return  1
      if (a.head < b.head) return -1
      if (a.num > b.num) return  1
      if (a.num < b.num) return -1
      return a.idx - b.idx
  }).map(e => e.fn)
}