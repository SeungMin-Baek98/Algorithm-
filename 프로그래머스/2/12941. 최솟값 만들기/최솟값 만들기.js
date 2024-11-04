function solution(A, B) {
  const Aarray = [...A].sort((a, b) => a - b);
  const Barray = [...B].sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < Aarray.length; i++) {
    sum += Aarray[i] * Barray[i];
  }
  return sum;
}
