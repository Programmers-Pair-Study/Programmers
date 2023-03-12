function solution(want, number, discount) {
  let ans = 0;
  const list = {};
  
  // for(let i=0; i<want.length; i++) {
  //     list[want[i]] = number[i];
  // }
  
  for(let i=0; i<=discount.length-10; i++) {
      let success = true;
      for(let j=0; j<want.length; j++) {
          const target = discount.slice(i, i+10)
          if(target.filter(x => x === want[j]).length !== number[j]) {
              success = false;
              break;
          }
      }
      if(success) ans++;
  }
  return ans;
}