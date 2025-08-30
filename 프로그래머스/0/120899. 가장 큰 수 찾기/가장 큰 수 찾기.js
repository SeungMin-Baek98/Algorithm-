function solution(array) {
  const result = [];
  const maxNum = Math.max(...array);
  const idxMaxNum = array.indexOf(maxNum);

  result.push(maxNum, idxMaxNum);
  return result;
}
