const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const str = input[0];

if (str === "N" || str === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
