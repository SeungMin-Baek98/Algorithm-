const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [team, quiz] = input[0].split(" ").map(Number);
let teamMap = new Map();
let groupMap = new Map();

// 팀 별  key 와 value 설정.
let teamIdx = 1;
for (let i = 0; i < team; i++) {
  const teamGroup = input[teamIdx++];
  const teamCount = Number(input[teamIdx++]);
  const members = input.slice(teamIdx, teamIdx + teamCount);
  teamMap.set(teamGroup, members.sort().join("\n"));

  //팀 맴벼별 각각에 group명을 지정해줘야한다!!! <- 빌어먹을
  for (const member of members) {
    groupMap.set(member, teamGroup);
  }

  teamIdx += teamCount;
}

let quizIdx = teamIdx;
let quizMap = new Map();
for (let i = 0; i < quiz; i++) {
  const quizQA = input[quizIdx++];
  const quizNumber = Number(input[quizIdx++]);
  quizMap.set(quizQA, quizNumber);
}

let result = [];

for (const [quizMember, quizType] of quizMap) {
  if (quizType === 1) {
    result.push(groupMap.get(quizMember));
  } else if (quizType === 0) {
    result.push(teamMap.get(quizMember));
  }
}

console.log(result.join("\n"));
