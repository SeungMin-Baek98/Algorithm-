const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const times = input.slice(1).map((values) => values.split(" ").map(Number));

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let et = 0;
  for (let [startTime, endTime] of meeting) {
    if (startTime >= et) {
      answer++;
      et = endTime;
    }
  }
  return answer;
}

console.log(solution(times));
