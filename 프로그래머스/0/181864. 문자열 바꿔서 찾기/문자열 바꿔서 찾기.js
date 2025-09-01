function solution(myString, pat) {
  const splitStr = myString.split("");

  let modString = "";
  for (let str of splitStr) {
    if (str === "A") {
      modString += "B";
    } else if (str === "B") {
      modString += "A";
    }
  }
  return modString.includes(pat) ? 1 : 0;
}