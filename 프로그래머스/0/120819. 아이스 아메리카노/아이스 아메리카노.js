function solution(money) {
  const result = [];
  const iceCount = Math.floor(money / 5500);
  let changes = 0;
  if (money % 5500 === 0) {
    changes = 0;
  } else {
    changes = money - 5500 * iceCount;
  }
  result.push(iceCount, changes);
  return result;
}