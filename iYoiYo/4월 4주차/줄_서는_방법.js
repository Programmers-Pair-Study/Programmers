// 시간초과 내 풀이..
// function solution(n, k) {
//     const ans = [];
//     let escape = 0;
    
//     function getPermutation(permu, arr) {
//         if(escape) return;
//         if(arr.length === 0) {
//             ans.push(permu);
//             if(ans.length === k) escape = 1;
//             return;
//         }
        
//         arr.forEach((v, i) => {
//             const rest = [...arr];
//             rest.splice(i, 1);
//             getPermutation([...permu, v], rest);
//         })
//     }
    
//     const arr =[]
    
//     for(let i=1; i<=n; i++) {
//         arr.push(i);
//     }
    
//     getPermutation([], arr)
    
//     return ans.pop();
// }

// 문제의 이해 (순열)
// 첫번째 방법. 간단하게 생각하자면 재귀를 통해 length = n인 순열을 k개 구해서 return 하면 되지만 시간초과...
// 재귀로 시간을 줄이려고 많이 해봤는데 효율성은 통과하지 못했습니다.
// 1: [1, 2, 3], 2: [1, 3, 2], 3: [2, 1, 3], 4: [2, 3, 1], 5: [3, 1, 2]

// 두번째 방법. k번째를 이용해서 n!에서 k번째에 해당하는 숫자를 하나씩 찾아서 만들어준다. 
// 1. arr = [1, 2, 3], n = 3, k = 5 
// n = 3일 경우 3! = 6가지 경우의 수가 나오는데 (n - 1)! = 2개씩 앞자리 숫자가 변한다. 
// k = 1, 2는 [1, x, y], k = 3, 4는 [2, x, y], k = 5, 6은 [3, x, y]
// k = 5 이므로 3을 고정하고 k = 5, 6중에 첫번째 이므로 k = 1로 갱신.
// k = 1, result = [3]

// 2. arr = [1, 2], n = 2, k = 1
// 3을 제외하고 2! = 2가지 경우의 수에서 1!개씩 앞자리가 변한다
// k = 1은 [3, 1, x], k = 2는 [3, 2, x]
// k = 1 이므로 1을 고정하고 k = 1중에 첫번째 이므로 k = 1로 갱신.
// (원소가 1개 남은 상황이라 루프 종료하고 그냥 뒤에 붙여도 됩니다)
// k = 1, result = [3, 1]

// 3. arr = [2], n = 1, k = 1 => result = [3, 1, 2] 
// 위와 같이 반복

const solution = (n, k) => {
  const result = []; // 결과값
  const arr = new Array(n).fill(1).map((_, i) => _ + i); // n = 3, arr = [1, 2, 3]

  function getNum(arr) { // k에 해당하는 순열의 원소를 하나씩 구하기 위한 함수.
    let fac = 1;
    for (let i = 1; i < arr.length; i++) {
      fac *= i;
    }
    // fac => (n - 1)!, fac개씩 앞자리 숫자가 변함.

    const idx = Math.ceil(k / fac) - 1;
    // k = 1, 2 => idx = 0, k = 3, 4 => idx = 1, k = 5, 6 => idx = 2
    // ex) n = 3, k = 5, idx = Math.ceil(5 / 2) - 1 = 3 - 1 = 2

    k = k - idx * fac;
    // idx를 구한 뒤 다음 루프 연산을 위해 k값을 갱신.
    // ex) k = 5, idx = 2, k = 5 - (2 * 2!) = 1  

    return arr[idx];
    // 배열 idx에 해당하는 원소를 return.
  }

  for (let i = 1; i <= n; i++) { // loop문 한번에 하나씩 원소를 넣으므로 총 n번 반복.
    const num = getNum(arr); // n개의 숫자 배열에서 연산을 통해 원소 하나씩 구함.
    arr.splice(arr.indexOf(num), 1); // 꺼낸 숫자를 원래 배열에서 제거.
    result.push(num); // 결과값 배열에 꺼낸 숫자를 push.
  }
  return result;
};