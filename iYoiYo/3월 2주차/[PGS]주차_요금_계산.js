function solution(fees, records) {
  const ans = [];
  const [stdTime, stdFee, unitTime, unitFee] = fees;
  const cars = {};

  for(let i=0; i<records.length; i++) {
      const [time, num, inOut] = records[i].split(' ');

      if(cars[num]) cars[num].push(time);
      else cars[num] = [time]
  }

  const sortByKey = Object.keys(cars).sort();

  for(let i=0; i<sortByKey.length; i++) {
      let total = 0;

      for(let j=0; j<cars[sortByKey[i]].length; j+=2) {
          let inTime = cars[sortByKey[i]][j].split(':');
          inTime = inTime[0]*60 + (+inTime[1]);
          let outTime = cars[sortByKey[i]][j+1]?.split(':') || [23, 59];
          outTime = outTime[0]*60 + (+outTime[1]);
          total += (outTime-inTime);
      }

      total-stdTime > 0 ? ans.push((Math.ceil((total-stdTime) / unitTime) * unitFee) + stdFee) : ans.push(stdFee);
  }

  return ans;
}