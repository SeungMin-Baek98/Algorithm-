function solution(num_list) {
  const length = num_list.length;
  let result = 0;
  if (length >= 11) {
    result = num_list.reduce((acc, cur) => acc + cur);
  } else {
    result = num_list.reduce((acc, cur) => acc * cur);
  }
  return result;
}
