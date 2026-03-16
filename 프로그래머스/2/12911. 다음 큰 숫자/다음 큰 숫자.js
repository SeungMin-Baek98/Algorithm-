function solution(n) {
  const targetCount = n
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;
  let nextNumber = n + 1;

  while (true) {
    const count = nextNumber
      .toString(2)
      .split("")
      .filter((item) => item === "1").length;

    if (count === targetCount) {
      return nextNumber;
    }

    nextNumber++;
  }
}
