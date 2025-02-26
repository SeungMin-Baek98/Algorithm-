const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number);
const MAX = 100001;
const visited = Array(MAX).fill(0);
const queue = [N];

// BFS
const bfs = (N, K) => {
  while (queue.length) {
    const cur = queue.shift();
    if (cur === K) {
      return visited[cur];
    }
    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next < MAX && !visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
};

console.log(bfs(N, K));
