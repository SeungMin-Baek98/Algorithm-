const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const edges = input.map((v) => v.split(""));

function solution(R, C, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;

  function DFS(x, y, visited, distance) {
    answer = Math.max(answer, distance);
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
        const char = board[nx][ny];
        if (!visited.has(char)) {
          visited.add(char);
          DFS(nx, ny, visited, distance + 1);
          visited.delete(char);
        }
      }
    }
  }

  const visited = new Set();
  visited.add(board[0][0]);
  DFS(0, 0, visited, 1);
  return answer;
}

console.log(solution(R, C, edges));
