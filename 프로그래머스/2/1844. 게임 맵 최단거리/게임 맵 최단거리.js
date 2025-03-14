function solution(maps) {
  const row = maps.length; // 맵의 가로 길이
  const column = maps[0].length; // 맵의 세로 길이

  // 상 하 좌 우 이동
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // 시작점 (0,0) 설정 큐에 삽입 해야된다.
  const queue = [[0, 0]];

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵의 범위 안에 있고, 1이여야 이동가능.
      if (nx >= 0 && nx < row && ny >= 0 && ny < column && maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1; // +1 이동
        if (nx === row - 1 && ny === column - 1) {
          return maps[nx][ny];
        }
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}