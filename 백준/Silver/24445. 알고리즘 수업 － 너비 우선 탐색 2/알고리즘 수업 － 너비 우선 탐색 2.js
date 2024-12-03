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

let BFS_visited = Array(n + 1).fill(0);
let order = 1;

function BFS(startNode) {
  const queue = [];
  queue.push(startNode);
  BFS_visited[startNode] = order++;

  while (queue.length) {
    let x = queue.shift();

    for (let next of graph[x]) {
      if (!BFS_visited[next]) {
        BFS_visited[next] = order++;
        queue.push(next);
      }
    }
  }
}

BFS(r);
console.log(BFS_visited.slice(1).join("\n"));
