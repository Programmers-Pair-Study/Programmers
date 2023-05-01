function solution(n, wires) {
    const dict = {}; // 담기
    const answer = []; // 답을 담을 배열

    // 연결 상태를 나타내는 그래프 만들기
    for(let wire of wires){
        if(!(wire[0] in dict))
            dict[wire[0]] = [wire[1]];
        else
            dict[wire[0]].push(wire[1]);
        if(!(wire[1] in dict))
            dict[wire[1]] = [wire[0]];
        else
            dict[wire[1]].push(wire[0]);
    }

    for(let wire of wires){
        const [start, end]  = wire;
        const stack = [...dict[start]]; // 복사할때 조심하자 - spread 사용하기
        const visited = {};
        let count = 1;

        // 끊어진 시작, 끝점은 방문한 것으로 한다.
        visited[start] = true; 
        visited[end] = true;

        while(stack.length !== 0){
            const temp = stack.pop();
            if(!visited[temp]){
                visited[temp] = true;
                stack.push(...dict[temp]);
                count+=1;
            }
        }
        answer.push(Math.abs(count*2-n));   
    }
    return Math.min(...answer);
}