function solution(my_string) {
  const strs = my_string.split("").map((v) => v.charCodeAt());
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] >= 65 && strs[i] <= 90) {
      result.push(String.fromCharCode(strs[i] + 32));
    }

    if (strs[i] >= 97 && strs[i] <= 122) {
      result.push(String.fromCharCode(strs[i] - 32));
    }
  }
  return result.join("");
}