// 42748
function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let eachSlice = array
      .slice(eachCommand[0] - 1, eachCommand[1])
      .sort((a, b) => a - b);
    result.push(eachSlice[eachCommand[2] - 1]);
  }

  return result;
}