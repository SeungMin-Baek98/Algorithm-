const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [n, m] = input.map(Number);

function solution(n, m) {
  let answer = [];
  let tmp = [];

  function DFS(L, start) {
    if (L === m) {
      answer.push(tmp.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      tmp.push(i);
      DFS(L + 1, i + 1);
      tmp.pop();
    }
  }

  DFS(0, 1);
  return answer.join("\n");
}

console.log(solution(n, m));
