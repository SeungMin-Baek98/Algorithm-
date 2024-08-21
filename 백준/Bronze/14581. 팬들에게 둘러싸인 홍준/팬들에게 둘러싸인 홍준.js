const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const fan = ":fan:";

console.log(fan + fan + fan);
console.log(fan + `:${input}:` + fan);
console.log(fan + fan + fan);
