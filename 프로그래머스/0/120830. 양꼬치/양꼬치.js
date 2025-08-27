function solution(n, k) {
  const freeDrinks = Math.floor(n / 10);
  return n * 12000 + (k - freeDrinks) * 2000;
}