function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  } else {
    const minValue = arr.reduce((acc, cur) => {
      return Math.min(acc, cur);
    }, 10000);
    // const [minValue, ...result] = arr.sort((a,b) => a-b); sort로 풀고싶었음..
    return arr.filter((e) => e !== minValue);
  }
}

// spread 연산자, rest 연산자 쓰는게 아직 익숙하지 않은 듯?
function goodSolution(arr) {
  const min = Math.min(...arr); // Math 메서드에서 spread로써 정수를 전개할 수 있다. (배열 형태로 출력 X)
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
