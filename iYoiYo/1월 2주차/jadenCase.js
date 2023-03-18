function solution(s) {
  return s.split(' ').map(x => x.substr(0, 1).toUpperCase() + x.substr(1).toLowerCase()).join(' ');
}