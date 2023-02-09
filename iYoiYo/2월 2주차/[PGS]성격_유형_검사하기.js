function solution(survey, choices) {
  let ans = ''
  const answer = {
      'R': 0,
      'T': 0,
      'C': 0,
      'F': 0,
      'J': 0,
      'M': 0,
      'A': 0,
      'N': 0
  }
  
  survey.forEach((type, i) => {
      if(choices[i] === 4) return;
      
      if(choices[i] > 4) {
          answer[type[1]] += choices[i] - 4;
          return;
      }
      
      if(choices[i] < 4) {
          answer[type[0]] += 4 - choices[i]
      }
  })
  
  ans += answer['R'] >= answer['T'] ? 'R' : 'T';
  ans += answer['C'] >= answer['F'] ? 'C' : 'F';
  ans += answer['J'] >= answer['M'] ? 'J' : 'M';
  ans += answer['A'] >= answer['N'] ? 'A' : 'N';
  
  return ans;
}