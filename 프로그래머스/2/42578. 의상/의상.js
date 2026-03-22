function solution(clothes) {
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];
    obj[type] = (obj[type] || 0) + 1;
  }

  let answer = 1;

  for (const count of Object.values(obj)) {
    answer *= count + 1;
  }

  return answer - 1;
}
