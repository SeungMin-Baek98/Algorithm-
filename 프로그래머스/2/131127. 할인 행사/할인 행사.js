function solution(want, number, discount) {
  let wantFruit = new Map();

  let result = 0;

  // 과일의 종류와 갯수를 저장
  for (let i = 0; i < want.length; i++) {
    wantFruit.set(want[i], number[i]);
  }

  // 10일동안 할인 과일의 종류와 갯수를 체크
  for (let i = 0; i <= discount.length - 10; i++) {
    let discountFruit = new Map();

    // i번째부터 10일동안의 할인 과일의 종류와 갯수를 저장
    for (let j = i; j < i + 10; j++) {
      discountFruit.set(discount[j], (discountFruit.get(discount[j]) || 0) + 1);
    }

    let isValid = true;
    for (let [key, value] of wantFruit) {
      if (discountFruit.get(key) !== value) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      result++;
    }
  }

  return result;
}