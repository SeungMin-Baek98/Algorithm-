const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const nums = Number(input[0]);
const coins = [25, 10, 5, 1];

for (let i = 1; i <= nums; i++) {
  let nums = Number(input[i]);
  let result = [];

  for (let j = 0; j < coins.length; j++) {
    const mogs = Math.floor(nums / coins[j]);
    result.push(mogs);
    nums -= mogs * coins[j];
  }
  console.log(result.join(" "));
}
