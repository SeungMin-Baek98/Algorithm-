function solution(s) {
  let transformCount = 0; // 몇번 변환됐는지 카운트
  let removedZeroCOunt = 0; // 0 횟수 카운트

  // s가 "1"이 될때까지 while
  while (s !== "1") {
    const zeroCount = s.split("").filter((item) => item === "0").length;
    removedZeroCOunt += zeroCount;

    const filtered = s
      .split("")
      .filter((item) => item === "1")
      .join("");

    s = filtered.length.toString(2); // 2진법 변환을 위해 toString() 사용
    transformCount++;
  }

  return [transformCount, removedZeroCOunt];
}