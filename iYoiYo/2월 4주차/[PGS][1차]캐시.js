function solution(cacheSize, cities) {
  let ans = 0;
  const cache = [];
  cities = cities.map(city => city.toLowerCase())

  //     cacheSize가 0이면 항상 cacheMiss
  if(cacheSize === 0) return cities.length*5
  
  for(let i=0; i<cities.length; i++) {
      const index = cache.indexOf(cities[i])
      
//         if(index > -1) {
//             cache.splice(index, 1);
//             ans++;
//         }
//         else {
//             if(cache.length >= cacheSize) {
//                 cache.shift();
//             }
//             ans += 5;            
//         }
//         cache.push(cities[i])
// 처음에 푼 개똥풀이
      if(cache.length < cacheSize) {
          if(index+1) {
              cache.push(...cache.splice(index, 1))
              ans++;
              continue;
          }
          cache.push(cities[i])
          ans += 5;
          continue;
      }

      if(index + 1) {
          cache.push(...cache.splice(index, 1));
          ans++;
          continue;
      }

      cache.shift();
      cache.push(cities[i]);
      ans += 5;
  }
  return ans;
}