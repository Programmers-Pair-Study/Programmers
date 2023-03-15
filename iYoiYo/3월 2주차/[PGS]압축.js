function solution(msg) {
  const ans = [];
  const dic = {};
  let nextWord = '';
  let i = 27;

  for(let j=65; j<91 ; j++) {
      dic[String.fromCharCode(j)] = j-64;
  }
  
  const s = msg.split('').reduce((acc, cur) => {
      nextWord = acc + cur;
      if(dic[nextWord]) return nextWord;
      else {
          dic[nextWord] = i++;
          ans.push(dic[acc]);
          return cur;
      }
  })
  
  ans.push(dic[s])
  
  return ans
}