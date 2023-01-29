function solution(arr1, arr2){    
  arr1.sort((a, b) => a-b);
  arr2.sort((a, b) => b-a);

  return arr1.reduce((acc, cur, i) => acc + cur * arr2[i], 0)
}