function solution(myString) {
  return myString
    .split("x")
    .filter((el) => el !== "")
    .sort((a, b) => a.localeCompare(b));
}
