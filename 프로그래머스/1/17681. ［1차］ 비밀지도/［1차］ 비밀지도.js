function solution(n, arr1, arr2) {
  const answer = [];

  // 1. 각각의 배열을 2진수로 만든다음 자리수만큼 0으로 채움
  const binaryArr1 = arr1.map((item) => item.toString(2).padStart(n, "0"));
  const binaryArr2 = arr2.map((item) => item.toString(2).padStart(n, "0"));

  // 2. 2차원 배열을 생성하여 n길이 만큼 돌면서, 둘 중 하나라도 "1" 이라면 answer배열에 "#" 아니면 " "
  for (let i = 0; i < n; i++) {
    answer.push([]);
    const splitArr1 = binaryArr1[i].split("");
    const splitArr2 = binaryArr2[i].split("");
    for (let j = 0; j < n; j++) {
      if (splitArr1[j] === "1" || splitArr2[j] === "1") {
        answer[i][j] = "#";
      } else {
        answer[i][j] = " ";
      }
    }
  }

  return answer.map((item) => item.join(""));
}