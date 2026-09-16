function solution(clothes) {
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    const [color, kind] = clothes[i];
    obj[kind] = (obj[kind] || 0) + 1;
  }
  const clothesKind = Object.values(obj).length;
  //  옷 종류가 한가지이면은 해당 obj의 value 반환
  if (clothesKind === 1) return +Object.values(obj).join("");

  // 종류별로 해당 종류를 입지 않는 경우를 포함하기 위해 개수에 1을 더한다.
  // 모든 종류에서 아무것도 입지 않은 경우는 허용되지 않으므로 마지막에 1을 뺀다.
  return Object.values(obj).reduce((acc, cur) => acc * (+cur + 1), 1) - 1;
}
