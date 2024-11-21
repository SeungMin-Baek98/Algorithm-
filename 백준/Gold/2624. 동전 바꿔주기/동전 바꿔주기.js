const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
const k = Number(input[1]);

const coins = input.slice(2).map((line) => line.split(" ").map(Number));

function solution(m, coins) {
  const dy = Array.from({ length: m + 1 }, () => 0);
  dy[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    const [cost, count] = coins[i];

    for (let j = m; j >= 0; j--) {
      for (let k = 1; k <= count && j - k * cost >= 0; k++) {
        dy[j] += dy[j - k * cost];
      }
    }
  }

  return dy[m];
}

console.log(solution(t, coins));
