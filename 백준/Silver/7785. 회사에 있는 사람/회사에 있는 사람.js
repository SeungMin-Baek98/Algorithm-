const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);

let set = new Set();

for (let i = 1; i <= tryCount; i++) {
  const [name, status] = input[i].split(" ");
  if (status === "enter") {
    set.add(name);
  }
  if (status === "leave") {
    set.delete(name);
  }
}

const result = [...set].sort();
result.reverse();
console.log(result.join("\n"));
