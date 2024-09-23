const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 크로아티아 알파벳 배열.
const croatiaWord = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < croatiaWord.length; i++) {
  input = input.split(croatiaWord[i]).join("*");
}

const result = input.length;

console.log(result);
