// 조금 길어도 시간은 아주 조금 빠름
// function solution(str1, str2) {
//     let ans = 0;
//     const str1Arr = [], str2Arr = [];
//     const str1Dup = {}, str2Dup = {}
//     const inter = new Set();
//     let interCount = 0

//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();

//     function sliceStr(str, strArr) {
//         for(let i=0; i<str.length-1; i++) {
//             strArr.push(str.slice(i, i+2));
//         }
//     }

//     function dupCheck(str, strDup) {
//         for(let i=0; i<str.length; i++) {
//             if(str.indexOf(str[i], i+1)+1) {
//                 strDup[str[i]] = (strDup[str[i]] || 1) + 1;
//             }
//             if(str === str1) {
//                 if(str2.indexOf(str1[i])+1) inter.add(str1[i])
//             }
//         }
//     }

//     sliceStr(str1, str1Arr);
//     sliceStr(str2, str2Arr);

//     str1 = str1Arr.filter(x => x.match(/[a-z][a-z]/));
//     str2 = str2Arr.filter(x => x.match(/[a-z][a-z]/));
    
//     if(str1.length + str2.length === 0) return 65536;

//     dupCheck(str1, str1Dup);
//     dupCheck(str2, str2Dup);
    
//     const interArr = [...inter];
//     for(let i=0; i<interArr.length; i++) {
//         const iCount = Math.min(str1Dup[interArr[i]] || 1, str2Dup[interArr[i]] || 1);
//         interCount += iCount;
//     }
        
//     return Math.floor((interCount / (str1.length + str2.length - interCount)) * 65536)
// }

function solution (str1, str2) {

  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;
    const setArr = [...set];
    // for과 forEach 속도 비교
    for(let i=0; i<setArr.length; i++) {
        const has1 = arr1.filter(x => x === setArr[i]).length;
        const has2 = arr2.filter(x => x === setArr[i]).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    }

  // set.forEach(item => {
  //   const has1 = arr1.filter(x => x === item).length;
  //   const has2 = arr2.filter(x => x === item).length;
  //   union += Math.max(has1, has2);
  //   intersection += Math.min(has1, has2);
  // })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}