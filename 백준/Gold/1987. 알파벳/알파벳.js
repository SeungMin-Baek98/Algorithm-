// 백준 1987
// 알파벳

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const alphabets = input.map((line) => line.split(""));
const visited = new Array(26).fill(false);
let answer = 0;

function DFS(x, y, cnt) {
  answer = Math.max(answer, cnt);

  // 대문자 알파벳 아스키코드로 변환
  visited[alphabets[x][y].charCodeAt() - 65] = true;

  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const nextChar = alphabets[nx][ny].charCodeAt() - 65;
      if (!visited[nextChar]) {
        DFS(nx, ny, cnt + 1);
      }
    }
  }

  // 백트래킹 -> 방문 상태 복원
  visited[alphabets[x][y].charCodeAt() - 65] = false;
}

DFS(0, 0, 1);

console.log(answer);
