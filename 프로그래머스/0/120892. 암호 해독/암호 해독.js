function solution(cipher, code) {
  const str = cipher.split("");
  const result = [];

  for (let i = 0; i < str.length; i += code) {
    result.push(str[i + code - 1]);
  }

  return result.join("");
}
