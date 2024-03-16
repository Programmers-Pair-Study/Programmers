const line = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [testCase, ...datas] = line;

const assignRoom = (line) => {
    let answer = [];

    for(let i = 0; i < testCase; i++) {
        const [H, W, N] = datas[i].split(' ');
        let floor = N%H == 0 ? H : N%H;
        let roomNumber = Math.ceil(N/H) < 10 ? '0' + Math.ceil(N/H) : '' + Math.ceil(N/H);
        
        answer.push(floor + roomNumber);
    }
    return answer.join('\n');
}
console.log(assignRoom(line));