const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");

const nArray = new Set();
const mArray = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < n) {
    nArray.add(input[i]);
  } else {
    mArray.add(input[i]);
  }
}

let result = [];
mArray.forEach((value) => {
  if (nArray.has(value)) {
    result.push(value);
  }
});
result.sort();
console.log(result.length + "\n" + result.join("\n"));
