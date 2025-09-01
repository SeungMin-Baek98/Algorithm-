function solution(my_string, index_list) {
  my_string.split("");

  const result = [];
  for (let i = 0; i < index_list.length; i++) {
    result.push(my_string[index_list[i]]);
  }
  return result.join("");
}
