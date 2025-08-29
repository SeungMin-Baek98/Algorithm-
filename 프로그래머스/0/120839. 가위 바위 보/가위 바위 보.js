function solution(rsp) {
  const str = rsp.split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "2") {
      result += "0";
    } else if (str[i] === "0") {
      result += "5";
    } else if (str[i] === "5") {
      result += "2";
    }
  }
  return result;
}