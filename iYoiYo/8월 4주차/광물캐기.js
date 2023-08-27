function solution(picks, minerals) {
    const ans = [];
    let order = []
    const obj = {
        d: {
            diamond: 1,
            iron: 1,
            stone: 1,
        },
        i: {
            diamond: 5,
            iron: 1,
            stone: 1,
        },
        s: {
            diamond: 25,
            iron: 5,
            stone: 1,
        },
    }
    
    for(let i=0; i<3; i++) {
        for(let j=0; j<picks[i]; j++) {
            if(i === 0) order.push('d')
            else if(i === 1) order.push('i')
            else order.push('s')
        }
    }


    order = order.filter(v => v !== '');
    order = getPermutations(order, order.length);
    
    const oLeng = order[0].length;
    const mLeng = minerals.length
    for(let o of order) {
        let total = 0;
        for(let i=0; i<Math.min(oLeng, mLeng); i++) {
            total += obj[o[i]][minerals[i]]
        }
        ans.push(total)
    }
    
    return Math.min(...ans)
}

function getPermutations(arr, selectedNum) {
    if(selectedNum === 1) return arr.map(v => v.repeat(5));

    const result = [];
    arr.forEach((a, i) => {
        const rest = [...arr.slice(0, i), ...arr.slice(i+1)]
        const combi = getPermutations(rest, selectedNum-1);
        const fixedCombi = combi.map(v => [arr[i].repeat(5), v])
        result.push(...fixedCombi);
    })

    return result.map(v => v.join(''));
}


// 다른 풀이
const count = (ary,word) => ary.filter(el => el === word).length

function solution(picks, minerals) {
    let ret = 0
    const m = [];
    
    minerals = minerals.slice(0,picks.reduce((a,c) => a+5*c,0))
    const fatigue = [{'diamond' : 1 , 'iron' : 1 , 'stone' : 1},
                     {'diamond' : 5 , 'iron' : 1 , 'stone' : 1},
                     {'diamond' : 25 , 'iron' : 5 , 'stone' : 1}]
    
    for (let i=0 ; i< minerals.length ; i+=5) m.push(minerals.slice(i,i+5))
    m.sort((a,b) => {
        const aDiaCnt = count(a,'diamond')
        const bDiaCnt = count(b,'diamond')
        if (aDiaCnt === bDiaCnt) {
            const aIronCnt = count(a,'iron')
            const bIronCnt = count(b,'iron')
            return bIronCnt - aIronCnt
        }
        return bDiaCnt-aDiaCnt
    })
    
    let i = picks[0] ? 0 : picks[1] ? 1 : 2
    
    for (const mine of m){
        ret += mine.reduce((a,c) => a+fatigue[i][c],0)
        if (--picks[i]<=0) i++
        if (picks.every(el => !el)) return ret
        
    }
    return ret;
}

function wordCount(arr, word) {
  return arr.filter(v => v === word).length
}

function solution(picks, minerals) {
  let ans = 0;
  
  const obj = {
      i: {
          diamond: 5,
          iron: 1,
          stone: 1,
      },
      s: {
          diamond: 25,
          iron: 5,
          stone: 1,
      },
  }
  const divArr = [];
  const tools = picks.reduce((acc, cur) => acc+cur*5, 0);
  minerals = minerals.slice(0, tools)
  const div = Math.ceil(minerals.length / 5);
  
  for(let i=0; i<div; i++) {
      divArr.push(minerals.slice(i*5, (i+1)*5))
  }
  
  divArr.sort((a, b) => {
      const aDia = wordCount(a, 'diamond');
      const bDia = wordCount(b, 'diamond');
      
      if(aDia === bDia) {
          const aIron = wordCount(a, 'iron');
          const bIron = wordCount(b, 'iron');
          
          if(aIron === bIron) return (b.length-bDia-bIron) - (a.length-aDia-aIron)
          
          return bIron - aIron
      }
      
      return bDia - aDia;
  })
  
  let [dia, iron, stone] = picks;
  
  for(let d of divArr) {
      if(dia) {
          ans += d.length;
          dia--;
          continue;
      }
      
      const tool = iron ? 'i' : 's';
      for(let m of d) {
          ans += obj[tool][m];
      }
      if(tool === 'i') iron--;
      else stone--;
  }
  
  return ans;
}