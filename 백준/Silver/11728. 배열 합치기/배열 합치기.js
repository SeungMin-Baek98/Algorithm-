const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const Aarray = input[1].split(" ").map(Number);
const Barray = input[2].split(" ").map(Number);

const result = Aarray.concat(Barray);
console.log(result.sort((a, b) => a - b).join(" "));
