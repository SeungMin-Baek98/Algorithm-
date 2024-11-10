const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  const answer = [];
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(Math.floor(n / 2));
      answer.push(n % 2);
    }
  }
  DFS(n);
  return answer.join("");
}

console.log(solution(input));
