function solution(participant, completion) {
  const obj = {};

  for (let i = 0; i < participant.length; i++) {
    obj[participant[i]] = (obj[participant[i]] || 0) + 1;
  }

  for (let i = 0; i < completion.length; i++) {
    obj[completion[i]] = obj[completion[i]] - 1;
  }

  return Object.entries(obj)
    .filter(([name, complete]) => complete > 0)
    .map(([name]) => name)
    .join("");
}
