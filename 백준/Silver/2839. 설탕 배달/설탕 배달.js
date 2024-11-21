const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const sugar = Number(input);

function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => Infinity);
  dy[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
    }
  }
  answer = dy[m] === Infinity ? -1 : dy[m];
  return answer;
}
const arr = [3, 5];
console.log(solution(sugar, arr));
