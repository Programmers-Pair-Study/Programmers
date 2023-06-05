// 시간은 하나의 단위로 변환해서 계산하자
function solution(book_time) {
  const ans = [];
  book_time.sort();
  
  const books = book_time.map(([start, end]) => {
      const sTime = start.split(':'), eTime= end.split(':');
      
      return [sTime[0]*60 + +sTime[1], eTime[0]*60 + +eTime[1]];
  })

  ans.push(books[0][1]);
  
  for(let i=1; i<books.length; i++) {
      ans.sort((a, b) => a-b);
      
      if(ans[0]+10 <= books[i][0]) ans[0] = books[i][1];
      else ans.push(books[i][1]);
  }

  return ans.length;
}