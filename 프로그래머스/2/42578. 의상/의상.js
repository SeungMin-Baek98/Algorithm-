function solution(clothes) {
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    const kind = clothes[i][1];

    obj[kind] = (obj[kind] || 0) + 1;
  }
  // 각 의상 종류에서 '입지 않는 경우'도 선택지에 포함하기 위해 cur + 1을 한다.
  // 단, 최소 한 개의 의상은 입어야 하므로 '모든 의상을 입지 않는 경우' 1가지를 제외한다.
  return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}