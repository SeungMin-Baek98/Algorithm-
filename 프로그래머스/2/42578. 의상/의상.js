function solution(clothes) {
  const clothe = {};

  for (let i = 0; i < clothes.length; i++) {
    const [name, kind] = clothes[i];

    clothe[kind] = (clothe[kind] || 0) + 1;
  }
  const clotheKindLength = Object.keys(clothe).length;

  if (clotheKindLength === 1) return +Object.values(clothe).join();

  const clotheTotal = Object.values(clothe).reduce(
    (acc, cur) => acc * (cur + 1),
    1,
  );

  return clotheTotal - 1;
}
