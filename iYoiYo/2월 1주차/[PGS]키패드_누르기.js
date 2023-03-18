function solution(numbers, hand) {
  let answer = '';
  const pad = {
      1: [1, 1],
      2: [1, 2],
      3: [1, 3],
      4: [2, 1],
      5: [2, 2],
      6: [2, 3],
      7: [3, 1],
      8: [3, 2],
      9: [3, 3],
      '*': [4, 1],
      0: [4, 2],
      '#': [4, 3],
  }
  let right = pad['#'];
  let left = pad['*'];
  
  numbers.forEach(x => {
      if([1, 4, 7, '*'].includes(x)) {
          left = pad[x];
          answer += 'L';
      }
      else if([3, 6, 9, '#'].includes(x)) {
          right = pad[x];
          answer += 'R';
      }
      else {
          let Rresult = 0;
          let Lresult = 0;
          
          for(let i=0; i<2; i++) {
              Rresult += Math.abs(pad[x][i] - right[i])
              Lresult += Math.abs(pad[x][i] - left[i])
          }
          
          if(Rresult > Lresult) {
              left = pad[x];
              answer += 'L';
          }
          else if(Rresult < Lresult) {
              right = pad[x];
              answer += 'R';
          }
          else {
              if(hand === 'right') {
                  right = pad[x];
                  answer += 'R';
              }
              else {
                  left = pad[x];
                  answer += 'L';
              }
          }
      }
  })
  return answer;
}