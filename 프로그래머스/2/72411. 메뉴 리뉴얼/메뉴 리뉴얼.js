function solution(orders, course) {
  var answer = [];
  const courseMap = {};

  for (const order of orders) {
    const strs = order.split("");
    for (const courseSize of course) {
      const combinations = getCombinations(strs, courseSize);
      for (const comb of combinations) {
        const menu = comb.sort().join("");
        courseMap[menu] = (courseMap[menu] || 0) + 1;
      }
    }
  }

  for (const courseSize of course) {
    let maxCount = 0;
    const candidates = [];

    for (const [menu, count] of Object.entries(courseMap)) {
      if (courseMap[menu] === 1) continue;
      if (menu.length === courseSize) {
        if (count > maxCount) {
          maxCount = count;
          candidates.length = 0;
          candidates.push(menu);
        } else if (count === maxCount && count > 1) {
          candidates.push(menu);
        }
      }
    }

    answer.push(...candidates);
  }

  return answer.sort();
}

function getCombinations(arr, selectedNum) {
  const results = [];
  if (selectedNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectedNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
