function solution(participant, completion) {
  const people = {};

  for (let i = 0; i < participant.length; i++) {
    people[participant[i]] = (people[participant[i]] || 0) + 1;
  }

  for (let i = 0; i < completion.length; i++) {
    people[completion[i]] = people[completion[i]] - 1;
  }
  return Object.entries(people)
    .filter(([name, count]) => count > 0)
    .map(([name, count]) => {
      return name;
    })
    .join("");
}