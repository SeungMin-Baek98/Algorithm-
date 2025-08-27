function solution(n, t) {
  let virus = n;
  let count = 0;
  while (1) {
    virus *= 2;
    count++;
    if (count === t) break;
  }
  return virus;
}