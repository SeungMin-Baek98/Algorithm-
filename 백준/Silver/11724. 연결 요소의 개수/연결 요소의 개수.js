const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// n : 정점 개수
// m : 간선 개수

const [n, m] = input.shift().split(" ").map(Number);
const edges = input.map((v) => v.split(" ").map(Number));

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let visited = Array(n + 1).fill(false);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(node) {
    //방문했으면 그 node true 반환
    visited[node] = true;
    for (let i = 1; i <= n; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      DFS(i); // 방문하지 하지 않은 정점에서 DFS시작.
      answer++;
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(n, edges));
