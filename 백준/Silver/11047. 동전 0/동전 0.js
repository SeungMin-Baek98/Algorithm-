const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [count, money] = input[0].split(" ").map(Number);
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

for (const coin of coins) {
  if (money === 0) break;

  if (coin <= money) {
    const coinNum = Math.floor(money / coin);
    money -= coinNum * coin;
    result += coinNum;
  }
}
console.log(result);
