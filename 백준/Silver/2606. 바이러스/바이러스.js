const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const edges = input.slice(2).map((v) => v.split(" ").map(Number));

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let isVisited = Array(n + 1).fill(false);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(node) {
    isVisited[node] = true;

    for (let i = 1; i <= n; i++) {
      if (graph[node][i] === 1 && !isVisited[i]) {
        answer++;
        DFS(i);
      }
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(n, edges));
