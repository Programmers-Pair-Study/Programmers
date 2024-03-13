let line = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(line[0].charAt(line[1] - 1));

// 백준 여러줄 입력할 때 toString() 해주기 (다 까먹었쥬,,,)
