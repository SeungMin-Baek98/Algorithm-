const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const graph = input.map((row) => row.split(" ").map(Number));

const result = Array.from({ length: N }, () => Array(N).fill(0));

function dfs(start, node, visited) {
  for (let next = 0; next < N; next++) {
    if (graph[node][next] && !visited[next]) {
      visited[next] = true;
      result[start][next] = 1; // 이동 가능 표시
      dfs(start, next, visited);
    }
  }
}

// 모든 정점에서 DFS 탐색 수행
for (let i = 0; i < N; i++) {
  const visited = Array(N).fill(false);
  dfs(i, i, visited);
}

result.forEach((row) => console.log(row.join(" ")));
