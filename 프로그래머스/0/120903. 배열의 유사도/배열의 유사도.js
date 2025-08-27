function solution(s1, s2) {
  const str = s1.filter((v) => s2.includes(v));

  return str.length;
}