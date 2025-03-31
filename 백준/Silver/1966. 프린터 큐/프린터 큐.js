// 백준 1966
// 프린터 큐

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const TS = Number(input.shift());

function solution(lines) {
  const [docuCount, priority] = lines[0].split(" ").map(Number);
  const documents = lines[1].split(" ").map(Number);

  const queue = [];
  let count = 0;

  for (let i = 0; i < docuCount; i++) {
    queue.push([i, documents[i]]);
  }

  while (queue.length) {
    const [currentDocuIdx, currentDocuPriority] = queue.shift();
    let hasPriorityEl = false;

    for (let i = 0; i < queue.length; i++) {
      if (queue[i][1] > currentDocuPriority) {
        hasPriorityEl = true;
        break;
      }
    }

    if (hasPriorityEl) {
      queue.push([currentDocuIdx, currentDocuPriority]);
    } else {
      count++;
      if (currentDocuIdx === priority) {
        return count;
      }
    }
  }
}

for (let i = 0; i < TS; i++) {
  const result = input.splice(0, 2);
  console.log(solution(result));
}
