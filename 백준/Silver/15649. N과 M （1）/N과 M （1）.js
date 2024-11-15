const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [a, b] = input.map(Number);

function solution(n, m) {
  let answer = [];
  let tmp = [];
  let isVisied = Array(n + 1).fill(false);

  function DFS(L) {
    //if는 무조건 DFS종료 조건
    if (L === m) {
      answer.push(tmp.join(" "));
    } else {
      for (let i = 1; i <= n; i++) {
        if (!isVisied[i]) {
          isVisied[i] = true;
          tmp.push(i);
          DFS(L + 1);
          tmp.pop();
          isVisied[i] = false;
        }
      }
    }
  }

  DFS(0);
  return answer.join("\n");
}
console.log(solution(a, b));
