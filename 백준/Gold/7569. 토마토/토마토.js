const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 높이 x 세로 x 가로 (H x N x M)
const [M, N, H] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array(M).fill(0))
);

// 6방향 이동 (위, 아래, 좌, 우, 앞, 뒤)
const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];
const queue = [];

let undeTomato = 0;

// 3차원 배열에 입력값 넣기
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    graph[i][j] = input.shift().split(" ").map(Number);
    for (let k = 0; k < M; k++) {
      if (graph[i][j][k] === 0) {
        undeTomato++;
      } else if (graph[i][j][k] === 1) {
        queue.push([i, j, k, 0]); // (z, x, y, days)
      }
    }
  }
}

// 모든 토마토가 이미 익어있으면 0 출력 후 종료
if (undeTomato === 0) {
  console.log(0);
  return;
}

function BFS() {
  let answer = 0;
  let left = 0;
  let right = queue.length;

  while (left < right) {
    let [z, x, y, days] = queue[left++];
    for (let i = 0; i < 6; i++) {
      let nz = z + dz[i];
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nz >= 0 &&
        nz < H &&
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        graph[nz][nx][ny] === 0
      ) {
        graph[nz][nx][ny] = days + 1;
        queue[right++] = [nz, nx, ny, days + 1];
        undeTomato--;
      }
    }
    answer = days;
  }
  return answer;
}

// BFS 실행
const result = BFS();

// 아직 익지 않은 토마토가 남아 있다면 -1 출력
if (undeTomato > 0) {
  console.log(-1);
} else {
  console.log(result);
}
