function solution(arr1, arr2) {
  let elementArr = [];
  const wrapArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      elementArr.push(arr1[i][j] + arr2[i][j]);
    }
    wrapArr.push(elementArr);
    elementArr = [];
  }

  return wrapArr;
}

function goodSolution(A, B) {
  // 코드에 진입하는 경로를 두 가지로 한게 인상적이다
  // map으로 depth를 좁혀가는 경로, index를 겹쳐 사용하는 경로를 동시에 사용하였다.
  // 의외로 가독성이 좋으니 써먹어볼만 한 듯

  return A.map((arr1, idx1) =>
    arr1.map((value, idx2) => value + B[idx1][idx2])
  );
}
