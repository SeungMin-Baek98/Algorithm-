const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = input[0]; // 단어
let b = input[1]; // 몇번쨰 인덱스에 무슨 알파벳이있는지,,

console.log(a[b - 1]);
