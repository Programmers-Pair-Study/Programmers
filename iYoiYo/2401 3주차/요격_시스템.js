// 다른 사람의 풀이
// 오름차순
function solution(targets) {
    // 최소 1개 이상
    let ans = 1;
    
    // 시작 기준(x좌표) 오름차순 정렬
    targets.sort((a, b) => a[0] - b[0])
    
    // 처음과 끝을 최소 최대값으로 지정
    let [s, e] = [-1, 100000001];
    
    for(const [t_s, t_e] of targets) {
        if(t_s >= s && t_e <= e) {
            [s, e] = [t_s, t_e];
        }
        else if(t_s < e && t_e >= e) {
            s = t_s;
        }
        else {
            [s, e] = [t_s, t_e];
            ans++;
        }
    }
    
    return ans;
}

// 내림차순
function solution(targets) {
  let ans = 0;
  
  // 시작 기준(x좌표) 내림차순 정렬
  targets.sort((a, b) => b[0] - a[0]);

  let prev = 1000000001;
  
  for(const [s, e] of targets) {
      if(e <= prev) {
          prev = s;
          ans++;
      }
  }

  return ans;
}