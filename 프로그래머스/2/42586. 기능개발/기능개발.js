function solution(progresses, speeds) {
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx]),
  );
  let result = [];
  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    const day = days[i];

    if (maxDay >= day) {
      count++;
    } else {
      result.push(count);
      maxDay = day;
      count = 1;
    }
  }
  result.push(count);

  return result;
}
