const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [cards, stCount] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let result = 0;

for (let i = 0; i < cards - 2; i++) {
  for (let j = i + 1; j < cards - 1; j++) {
    for (let k = j + 1; k < cards; k++) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum <= stCount) {
        result = Math.max(result, sum);
      }
    }
  }
}

console.log(result);
