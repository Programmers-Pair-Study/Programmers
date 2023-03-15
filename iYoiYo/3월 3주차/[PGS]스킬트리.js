// function solution(skill, skill_trees) {
//     let ans = 0;
//     const tree = skill.split('');

//     for(let i=0; i<skill_trees.length; i++) {
//         let prevIdx = -2;
//         let success = true;

//         for(let j=0; j<tree.length; j++) {
//             const curIdx = skill_trees[i].indexOf(tree[j]);
                        
//             if(prevIdx === -1) {
//                 if(curIdx === -1) continue;
//                 else {
//                     success = false;
//                     break;
//                 }
//             }
            
//             else {
//                 if(curIdx === -1) {
//                     prevIdx = -1;
//                     continue;
//                 }

//                 if(prevIdx > curIdx) {
//                     success = false;
//                     break;
//                 }
//                 else prevIdx = curIdx;
//             }
//         }

//         if(success) ans++;
//     }

//     return ans;
// }

function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, 'g');
  
  return skill_trees
          .map(x => x.replace(regex,''))
          .filter(x => skill.indexOf(x) === 0 || x === '')
          .length
}