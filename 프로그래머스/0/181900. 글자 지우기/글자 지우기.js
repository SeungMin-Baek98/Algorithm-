function solution(my_string, indices) {
  return my_string
    .split("")
    .filter((str, strIdx) => !indices.includes(strIdx))
    .join("");
}
