function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, "")
    .split("")
    .sort((a, b) => a - b)
    .map((v) => Number(v));
}
