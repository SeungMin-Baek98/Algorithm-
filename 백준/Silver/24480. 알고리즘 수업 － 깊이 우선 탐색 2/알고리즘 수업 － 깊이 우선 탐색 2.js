const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: n + 1 }, () => []);

//무방향 그래프(인접 리스트)

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((v) => v.sort((a, b) => b - a));

let DFS_visited = Array(n + 1).fill(0);
let order = 1;

function DFS(startNode) {
  if (!DFS_visited[startNode]) {
    DFS_visited[startNode] = order;
    order++;
    for (const nextNode of graph[startNode]) {
      DFS(nextNode);
    }
  }
}

DFS(r);
console.log(DFS_visited.slice(1).join("\n"));
