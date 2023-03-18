function solution(s, skip, index) {
  let answer = '';
  // const regex = new RegExp(skip.split('').join('|'), 'g');
  // const spell = 'abcdefghijklmnopqrstuvwxyz'.replace(regex, '');

  // 더 나은 풀이 백틱을 쓰면 굳이 split 안 해줘도 된다
  const spell = 'abcdefghijklmnopqrstuvwxyz'.match(new RegExp(`[^${skip}]`, 'g'))
  
  for(const x of s) {
      if(spell.indexOf(x) + index > spell.length-1) {
          console.log((spell.indexOf(x) + index) % (spell.length))
          answer += spell[(spell.indexOf(x) + index) % spell.length];
          continue;
      }
      answer += spell[spell.indexOf(x) + index]
  }
  return answer;
}

// 이거 푸는데 몇 시간 걸린지 모르겠다....