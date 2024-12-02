const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((list) => list.sort((a, b) => a - b));

let DFS_visited = Array(n + 1).fill(0);
let order = 1;

function DFS(node) {
  if (!DFS_visited[node]) {
    DFS_visited[node] = order;
    order++;
    for (const next of graph[node]) {
      DFS(next);
    }
  }
}

DFS(r);
console.log(DFS_visited.slice(1).join("\n"));
