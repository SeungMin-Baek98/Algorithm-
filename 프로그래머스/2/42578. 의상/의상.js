function solution(clothes) {
  // 옷 종류 이름 보관할 객체 생성
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    const [name, kind] = clothes[i];
    // 같은 종류가 있으면은 누적합을 한다.
    obj[kind] = (obj[kind] || 0) + 1;
  }

  const clothesKind = Object.keys(obj).length;

  // 만일 옷 종류가 1개라면은 value값 return
  if (clothesKind === 1) return +Object.values(obj).join("");

  // 아니라면 각 (각 종류별 + 1 <- 안입는경우) 누적합 -1 (아에 안입는경우)

  return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
