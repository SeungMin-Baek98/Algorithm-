function solution(record) {
  const answer = [];
  const userInfos = record.map((item) => item.split(" "));
  const map = new Map();

  for (let i = 0; i < userInfos.length; i++) {
    let [command, userId, userName] = userInfos[i];
    if (command === "Enter" || command === "Change") {
      map.set(userId, userName);
    }
  }

  for (let i = 0; i < userInfos.length; i++) {
    let [command, userId, userName] = userInfos[i];

    if (command === "Enter") {
      answer.push(`${map.get(userId)}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      answer.push(`${map.get(userId)}님이 나갔습니다.`);
    } else {
      continue;
    }
  }

  return answer;
}