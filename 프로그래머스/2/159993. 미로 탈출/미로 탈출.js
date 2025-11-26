function bfs(startX, startY, maps, target) {
  const row = maps.length;
  const col = maps[0].length;

  // 방문 처리 배열
  const visited = Array.from({ length: row }, () => Array(col).fill(false));

  // 이동 거리 배열
  const dist = Array.from({ length: row }, () => Array(col).fill(0));

  // 방향 (상하좌우)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  queue.push([startX, startY]);
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    // 목표 문자를 찾으면 해당 거리 반환
    if (maps[x][y] === target) return dist[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < row &&
        ny >= 0 &&
        ny < col &&
        maps[nx][ny] !== "X" &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1; // target까지 도달할 수 없는 경우
}

function solution(maps) {
  const row = maps.length;
  const column = maps[0].length;

  let findLx, findLy, findEx, findEy;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (maps[i][j] === "S") {
        findLx = i;
        findLy = j;
      }
      if (maps[i][j] === "L") {
        findEx = i;
        findEy = j;
      }
    }
  }

  const dist1 = bfs(findLx, findLy, maps, "L");
  if (dist1 === -1) return -1;

  const dist2 = bfs(findEx, findEy, maps, "E");
  if (dist2 === -1) return -1;

  return dist1 + dist2;
}
