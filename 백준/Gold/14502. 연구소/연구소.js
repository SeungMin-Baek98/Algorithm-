const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//세로 : n / 가로 : m
const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

function solution(n, m, board) {
  // 상, 우, 하, 좌
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let maxArea = 0; // 안전 영역의 최대 크기??

  function spreadVirus(tempBoard) {
    //좌표값이 2 일 경우에만 queue배열에 push 하면된다.
    //기존의 내가 작성한 코드는 모든 좌표값을 탐색한다.

    const queue = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tempBoard[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }

    while (queue.length) {
      //현재 이미 이코드가 실행되는거면 좌표값이 2 인경우.
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && tempBoard[nx][ny] === 0) {
          tempBoard[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    let area = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tempBoard[i][j] === 0) area++;
      }
    }
    return area;
  }

  //벽 세우기 로직(재귀함수)
  function DFS(count) {
    if (count === 3) {
      const tempBoard = board.map((row) => [...row]);
      maxArea = Math.max(maxArea, spreadVirus(tempBoard));
      return;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 0) {
          board[i][j] = 1;
          DFS(count + 1);
          board[i][j] = 0;
        }
      }
    }
  }

  DFS(0);
  return maxArea;
}

console.log(solution(n, m, board));
