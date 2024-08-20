const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";

const date = new Date();
const result = date.toISOString().split("T");
console.log(result[0]);
