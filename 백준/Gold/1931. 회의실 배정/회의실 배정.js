const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const times = input.slice(1).map((value) => value.split(" ").map(Number));

times.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let count = 0;
let endTime = 0;

for (let i = 0; i < times.length; i++) {
  if (endTime <= times[i][0]) {
    endTime = times[i][1];
    count++;
  }
}

console.log(count);