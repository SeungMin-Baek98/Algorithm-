const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

function solution(input) {
  let charMap = new Map();

  //각 알파벳 빈도수 측정.
  //홀수인 알파벳은 중앙에 위치하도록 해야됨.

  for (const char of input) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  let oddCount = 0;
  let oddChar = "";
  let halfStr = "";

  for (const [char, count] of [...charMap].sort()) {
    if (count % 2 === 1) {
      oddCount++;
      oddChar = char;
    }
    halfStr += char.repeat(Math.floor(count / 2));
  }

  // 홀 수 알파벳이 여러개면은 펠린드롬 안됨
  if (oddCount > 1) return "I'm Sorry Hansoo";

  const palin = halfStr + oddChar + [...halfStr].reverse().join("");

  return palin;
}
console.log(solution(input));
