function solution(a, d, included) {
  const arr = [a];
  for (let i = 1; i < included.length; i++) {
    arr.push((a += d));
  }

  return arr.filter((el, idx) => included[idx]).reduce((acc, cur) => acc + cur);
}