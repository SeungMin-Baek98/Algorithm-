function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join(""),
    )
    .join(" ");
}
