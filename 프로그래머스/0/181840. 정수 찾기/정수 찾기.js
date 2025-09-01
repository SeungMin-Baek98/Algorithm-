function solution(num_list, n) {
  let result = 0;
  for (let s of num_list) {
    if (s === n) {
      result = 1;
    }
  }

  return result;
}