function solution(t, p) {
  const ret = [];
  const len = p.length;
  for (let i = 0; i < t.length - len + 1; i++) {
    ret.push(t.slice(i, i + len));
  }

  return ret.filter((item) => item <= p).length;
}
