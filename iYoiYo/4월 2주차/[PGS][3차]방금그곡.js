function solution(m, musicinfos) {
  // let ans = [0, ''];
  
  // const changeMSet = new Set(m.match(/[A-Z]#/g));
  // changeMSet.forEach(word => {
  //     const regex = new RegExp(`${word}`, 'g');
  //     m = m.replace(regex, word[0].toLowerCase());
  // })
  
  m = m.replace(/[A-Z]#/g, w => w[0].toLowerCase());
  
  musicinfos.sort((a, b) => {
      const [aStart, aEnd] = a.split(','), [bStart, bEnd] = b.split(',');
      const aTime = (new Date(`2023 ${aEnd}`) - new Date(`2023 ${aStart}`)) / 60000;
      const bTime = (new Date(`2023 ${bEnd}`) - new Date(`2023 ${bStart}`)) / 60000;
      return bTime - aTime;
  })
          
  for(let info of musicinfos) {
      let [start, end, title, melody] = info.split(',');
      const playTime = (new Date(`2023 ${end}`) - new Date(`2023 ${start}`)) / 60000;
      
      // const changeSet = new Set(melody.match(/[A-Z]#/g))
      // changeSet.forEach(word => {
      //     const regex = new RegExp(`${word}`, 'g');
      //     melody = melody.replace(regex, word[0].toLowerCase());
      // })
      melody = melody.replace(/[A-Z]#/g, w => w[0].toLowerCase());
      
      const len = melody.length;

      if(playTime < melody.length) melody = melody.slice(0, playTime);
      else if(playTime > melody.length) melody = melody.repeat(Math.floor(playTime/len)) + melody.slice(0, playTime%len);
      
      if(melody.indexOf(m)+1) return title;
      // if(melody.indexOf(m)+1 && ans[0] < playTime) ans = [playTime, title]
  }
  
  // return ans[0] ? ans[1] : '(None)';
}

// const solution = (m, musicInfos) => {
//     let answer = '';

//     musicInfos = musicInfos.map(e => {
//         let eArr = e.split(',');
//         let timeDiff = (new Date(`1970-01-01 ${eArr[1]}:00`) - new Date(`1970-01-01 ${eArr[0]}:00`)) / 60000;
//         let melody = eArr[3].replace(/[A-Z]#/g,m => m[0].toLowerCase());
//         melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
//         return `${timeDiff},${eArr[2]},${melody}`;
//     });

//     musicInfos.sort((a,b) => b.split(',')[0] - a.split(',')[0]);

//     answer = musicInfos.filter(e => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g,m => m[0].toLowerCase())) != -1);

//     return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
// }