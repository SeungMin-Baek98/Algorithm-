function isValidMove(nx, ny, row, column) {
  if (nx >= 0 && nx < row && ny >= 0 && ny < column) return true;

  return false;
}

function solution(maps) {
  const row = maps.length;
  const column = maps[0].length;

  const queue = [];
  const dist = Array.from({ length: row }, () => Array(column).fill(0)); // 거리를 저장할 방문 배열

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  queue.push([0, 0]);
  dist[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === row - 1 && y === column - 1) {
      return dist[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        isValidMove(nx, ny, row, column) &&
        maps[nx][ny] === 1 &&
        dist[nx][ny] === 0
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
