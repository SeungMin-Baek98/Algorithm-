function solution(my_string) {
  const strs = ["a", "e", "i", "o", "u"];

  for (let str of strs) {
    my_string = my_string.split(str).join("");
  }
  return my_string;
}
