const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);

//그래프
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

//양방향 그래프(인접 행렬)

for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

// 방문 여부 및 결과 저장
let DFS_visited = Array(n + 1).fill(false);
let DFS_answer = [];

let BFS_visited = Array(n + 1).fill(false);
let BFS_answer = [];

function DFS(v) {
  DFS_visited[v] = true;
  DFS_answer.push(v);

  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && !DFS_visited[i]) {
      DFS(i);
    }
  }
}

function BFS(v) {
  const queue = [];
  BFS_visited[v] = true;
  BFS_answer.push(v);
  queue.push(v);

  while (queue.length) {
    let x = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[x][i] === 1 && !BFS_visited[i]) {
        BFS_visited[i] = true;
        BFS_answer.push(i);
        queue.push(i);
      }
    }
  }
}
DFS(v);
BFS(v);

console.log(DFS_answer.join(" "));
console.log(BFS_answer.join(" "));
