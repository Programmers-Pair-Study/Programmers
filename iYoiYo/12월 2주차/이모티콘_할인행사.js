function solution(users, emoticons) {
  let ans = [0, 0];
  const sales = [10, 20, 30, 40]
  const salesLeng = sales.length
  const allCase = []
  const emoticonsLeng = emoticons.length;
  
  // 모든 할인 경우 재귀함수
  function makeCase(arr, depth) {
      if(depth === emoticonsLeng) {
          allCase.push(arr)
          return;
      }
      for(let j=0; j<salesLeng; j++) {
          const newArr = [...arr]
          newArr.push(sales[j]);
          
          makeCase(newArr, depth+1)
      }
  }
  // 모든 할인 경우 추출
  makeCase([], 0)
  
  // 모든 경우 계산
  for(const sale of allCase) {
      const result = [0, 0];
      for(const user of users) {
          const userResult = isMembership(sale, user[0], user[1]);
          if(userResult === -1) result[0]++;
          else result[1] += userResult;
      }
      
      if(result[0] > ans[0] || (result[0] === ans[0] && result[1] > ans[1])) {
          ans = result;
      }
  }
  
  return ans;
  
  // 유저 별 계산
  function isMembership(rate, userRate, price) {
      let total = 0;
      for(let i=0; i<rate.length; i++) {
          if(rate[i] < userRate) continue;
          
          total += emoticons[i] * (1 - (rate[i]/100));
          
          
          if(price <= total) return -1;
      }
      return total;
  }
}