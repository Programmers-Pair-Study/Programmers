function solution(sizes) {
  const result = sizes.map((e) => e.sort((a, b) => a - b));
  const answer = [0, 0];

  for (let i = 0; i < sizes.length; i++) {
    if (result[i][0] > answer[0]) answer[0] = result[i][0];
    if (result[i][1] > answer[1]) answer[1] = result[i][1];
  }

  return answer[0] * answer[1];
}

function goodSolution1(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [
    Math.max(h, Math.max(a, b)),
    Math.max(v, Math.min(a, b)),
    [0, 0],
  ]);
  return hor * ver;
}

function goodSolution2(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, y] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
