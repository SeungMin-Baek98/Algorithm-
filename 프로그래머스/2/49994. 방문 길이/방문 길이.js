// LV.2 방문 길이
function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const visited = new Set();
  let start = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const [dx, dy] = move[dirs[i]];
    const nx = start[0] + dx;
    const ny = start[1] + dy;

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    visited.add(`${start[0]},${start[1]}-${nx},${ny}`);
    visited.add(`${nx},${ny}-${start[0]},${start[1]}`);
    start[0] = nx;
    start[1] = ny;
  }

  var answer = visited.size /2 ;
  return answer;
}
