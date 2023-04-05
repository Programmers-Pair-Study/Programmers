// 처음에 조합으로 풀었다가 시간 초과남...
// stack을 이용한 풀이
function solution(number, k) {
    const ans = [];
    
    for(let i=0; i<number.length; i++) {
        while(ans.length && k>0 && ans[ans.length-1] < number[i]) {
            k--;
            ans.pop();
        }
        ans.push(number[i])
    }
    ans.splice(number.length-k, k)
    return ans.join('');
}