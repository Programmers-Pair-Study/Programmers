// 내 시간초과 dfs 풀이
function solution(N, road, K) {
  const ans = new Set();
  const tree = {};
  
  for(let route of road) {
      const [v1, v2, time] = route;
      
      if(tree[v1]) tree[v1].push([v2, time]);
      else tree[v1] = [[v2, time]];
      
      if(tree[v2]) tree[v2].push([v1, time]);
      else tree[v2] = [[v1, time]];
  }
  console.log(tree);
  function dfs(cur, count, visited) {
      console.log(cur, count, visited)
      tree[cur].forEach(arr => {
          console.log(arr)
          const [road, time] = arr;
          if(count + time > K || visited[road]) return;
          ans.add(road);
          dfs(road, count+time, {...visited, [road]: 1});
      })
  }
  
  dfs(1, 0, {1: 1});
  
  return ans.size + 1
}

// 가장 빠른 다익스트라 알고리즘
function solution(N, road, K) {
const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
const lines = Array.from(Array(N + 1), () => []);

road.forEach((value) => {
  // 연결되어 있는 경로를 모두 lines배열에 저장한다.
  let [a, b, c] = value;
  lines[a].push({ to: b, cost: c });
  lines[b].push({ to: a, cost: c });
});

let queue = [{ to: 1, cost: 0 }];
arr[1] = 0;

while (queue.length) {
  let { to } = queue.pop();

  lines[to].forEach((next) => {
    // 모든 경로를 탐색
    if (arr[next.to] > arr[to] + next.cost) {
      // 기존에 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장함
      arr[next.to] = arr[to] + next.cost;
      queue.push(next);
    }
  });
}

return arr.filter((item) => item <= K).length; // 경로의 제한인 K보다 cost가 작은 경로의 수를 반환을 함
}


// 배열로 변형해 본 다익스트라. 물론 위가 더 빠름
function solution(N, road, K) {
  const ans = Array(N).fill(Number.MAX_SAFE_INTEGER);
  const routes = {};
  
  for(let route of road) {
      const [v1, v2, time] = route;
      if(routes[v1]) routes[v1].push([v2, time]);
      else routes[v1] = [[v2, time]]
      if(routes[v2]) routes[v2].push([v1, time]);
      else routes[v2] = [[v1, time]];
  }
  
  const queue = [[1, 0]];
  ans[0] = 0;
  while(queue.length) {
      const cur = queue.pop()[0];
              
      routes[cur].forEach(route => {
          const [next, time] = route;
          
          if(ans[cur-1] + time < ans[next-1]) {
              ans[next-1] = ans[cur-1] + time;
              queue.push([next, ans[next-1]]);
          }
      })
  }
  
  return ans.filter(x => x <= K).length;
}