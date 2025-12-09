function solution(brown, yellow) {
  var answer = [];
  const total = brown + yellow;

  for (let height = 3; height <= total; height++) {
    if (total % height === 0) {
      const width = total / height;
      const innerWidth = width - 2;
      const innerHeight = height - 2;

      if (innerWidth * innerHeight === yellow) {
        answer = [width, height];
        break;
      }
    }
  }

  return answer;
}