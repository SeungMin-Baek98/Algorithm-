function solution(dirs) {
  const U = [0, 1]; // 위쪽
  const D = [0, -1]; // 아래쪽
  const R = [1, 0]; // 오른쪽
  const L = [-1, 0]; //왼쪽

  // 중복된 경로를 제거하기 위한 Set 생성자 생성
  const visited = new Set();

  // 시작점 (0,0)
  let nowRoute = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    let end;

    switch (dirs[i]) {
      case "U":
        end = [nowRoute[0] + U[0], nowRoute[1] + U[1]];
        break;
      case "D":
        end = [nowRoute[0] + D[0], nowRoute[1] + D[1]];
        break;
      case "R":
        end = [nowRoute[0] + R[0], nowRoute[1] + R[1]];
        break;
      case "L":
        end = [nowRoute[0] + L[0], nowRoute[1] + L[1]];
        break;
    }

    // 범위를 벗어나면 이동하지 않음
    if (end[0] < -5 || end[0] > 5 || end[1] < -5 || end[1] > 5) continue;

    // 중복된 경로를 제거하기 위해 Set에 경로 추가
    visited.add(`${nowRoute[0]}${nowRoute[1]}${end[0]}${end[1]}`);
    visited.add(`${end[0]}${end[1]}${nowRoute[0]}${nowRoute[1]}`);

    // nowRoute를 end로 업데이트하여 위치 이동
    nowRoute = end;
  }

  return visited.size / 2;
}