// 백준 1991
// 바이러스

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const graphSize = Number(input.shift()); // 7
const graph = Array.from({ length: graphSize + 1 }, () =>
  Array(graphSize + 1).fill(0)
);
const edges = Number(input.shift()); // 6
const nodes = input.map((value) => value.split(" ").map(Number)); // 간선 정보
const isVisited = Array(graphSize + 1).fill(false);

for (let [start, end] of nodes) {
  graph[start][end] = 1;
  graph[end][start] = 1;
}

let count = 0;

function dfs(node) {
  isVisited[node] = true;
  count++;

  for (let i = 1; i <= graphSize; i++) {
    if (graph[node][i] === 1 && !isVisited[i]) {
      dfs(i);
    }
  }
}

dfs(1);
console.log(count - 1);
