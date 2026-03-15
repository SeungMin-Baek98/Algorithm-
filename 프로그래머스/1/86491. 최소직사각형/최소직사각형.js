function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (const [w, h] of sizes) {
    const big = Math.max(w, h);
    const small = Math.min(w, h);

    maxW = Math.max(big, maxW);
    maxH = Math.max(small, maxH);
  }
  return maxW * maxH;
}