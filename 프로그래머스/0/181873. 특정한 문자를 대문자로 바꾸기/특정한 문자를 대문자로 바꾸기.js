function solution(my_string, alp) {
  my_string.split("");
  const result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string[i]);
    if (my_string[i] === alp) {
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join("");
}
