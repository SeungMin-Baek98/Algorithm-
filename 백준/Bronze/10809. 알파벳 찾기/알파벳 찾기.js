const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const alphabet = Array(26).fill(-1);
for (let i = 0; i < input.length; i++) {
  const idx = input[i].charCodeAt() - 97;
  if (alphabet[idx] === -1) {
    alphabet[idx] = i;
  }
}

console.log(alphabet.join(" "));
