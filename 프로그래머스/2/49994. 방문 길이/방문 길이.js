/** 좌표평면을 벗어나는지 체크하는 함수 */
function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

/** 좌표평면을 이동하는 함수 */
function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let startPoint = [0, 0];

  const visited = new Set(); // 겹치는 좌표는 1개로 처리하기 위함
  for (const dir of dirs) {
    // 주어진 명령어로 움직이면서 좌표 저장
    const [nx, ny] = updateLocation(startPoint[0], startPoint[1], dir);

    if (!isValidMove(nx, ny)) {
      // 벗어난 좌표는 인정하지 않음
      continue;
    }

    // A 에서 B로 간 경우 B에서 A도 추가해야함 (총 경로의 개수는 방향성이 없다.)
    visited.add(`${startPoint[0]}${startPoint[1]}${nx}${ny}`);
    visited.add(`${nx}${ny}${startPoint[0]}${startPoint[1]}`);

    [startPoint[0], startPoint[1]] = [nx, ny];
  }

  return visited.size / 2;
}
