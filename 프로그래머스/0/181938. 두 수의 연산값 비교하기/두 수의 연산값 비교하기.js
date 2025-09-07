function solution(a, b) {
  const sum = +(String(a) + String(b));
  const mul = 2 * a * b;
  let result = 0;

  if (sum === mul) {
    result = sum;
    return result;
  }

  if (sum < mul) {
    result = mul;
    return result;
  }

  if (sum > mul) {
    result = sum;
    return result;
  }
}
