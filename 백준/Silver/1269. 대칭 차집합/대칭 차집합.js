const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arrayA = input[1].split(" ").map(Number);
const arrayB = input[2].split(" ").map(Number);

const compareSetA = new Set(arrayA);
const compareSetB = new Set(arrayB);

const resultA = arrayA.filter((numbers) => !compareSetB.has(numbers));
const resultB = arrayB.filter((numbers) => !compareSetA.has(numbers));

console.log(resultA.length + resultB.length);
