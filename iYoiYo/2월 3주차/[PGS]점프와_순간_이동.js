// function solution(n) {
//     let ans = 0;

//     while(n !== 1) {
//         if(n%2 === 1) {
//             n--;
//             ans++;
//         }
//         else {
//             n = n/2;
//         }
//     }

//     return ++ans;
// }

// 2로 나눈 모든 나머지는 2진수로 변환한 값의 1 갯수와 같다.
function solution(n)
{
    return n.toString(2).match(/1/g).length
}