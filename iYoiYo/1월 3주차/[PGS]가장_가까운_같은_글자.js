function solution(s) {
  //     let answer = [];
  //     const arr = s.split('');
      
  //     arr.forEach((x, i) => {
  //         let index = arr.indexOf(x);
  //         const xResult = [index];
  //         while(index < i) {
  //             index = arr.indexOf(x, index+1);
  //             xResult.push(index);
  //         }
          
  //         if(xResult.length === 1) answer.push(-1)
  //         else answer.push(xResult[xResult.length-1] - xResult[xResult.length-2]);
  //     })
      
  //     return answer;
      const indexObj = {};
      
      return [...s].map((x, i) => {
          const result = indexObj[x] === undefined ? -1 : i-indexObj[x];
          indexObj[x] = i;
          return result;
      })
  }