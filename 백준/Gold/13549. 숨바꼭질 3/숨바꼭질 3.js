const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [N, K] = input;

const MAX = 100001;
const visited = Array(MAX).fill(-1);

const deque = [];
deque.push(N);
visited[N] = 0;

while (deque.length) {
  const cur = deque.shift();

  if (cur === K) {
    console.log(visited[cur]);
    break;
  }

  // 순간이동 (0초) 먼저 처리
  if (cur * 2 < MAX && visited[cur * 2] === -1) {
    deque.unshift(cur * 2);
    visited[cur * 2] = visited[cur];
  }

  // 걷기 이동 (1초)
  for (const next of [cur - 1, cur + 1]) {
    if (next >= 0 && next < MAX && visited[next] === -1) {
      deque.push(next);
      visited[next] = visited[cur] + 1;
    }
  }
}
