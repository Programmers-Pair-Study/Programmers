// slice 메서드, lastIndexOf 메서드(23/08/08 update) 공부
function solution(arr) {
  let findIndexs = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      findIndexs.push(i);
    }
  }

  if (findIndexs.length === 0) return [-1];
  else if (findIndexs.length === 1) return [2];
  else if (findIndexs.length >= 2)
    return arr.slice(findIndexs[0], findIndexs[findIndexs.length - 1] + 1);
}

// 다른 사람의 풀이
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}
