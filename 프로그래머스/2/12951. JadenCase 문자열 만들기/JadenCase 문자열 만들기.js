function solution(s) {
  const str = [s]
    .toString()
    .split(" ")
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
  return str.join(" ");
}
