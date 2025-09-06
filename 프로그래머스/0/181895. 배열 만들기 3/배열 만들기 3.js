function solution(arr, intervals) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const [startPoint, endPoint] = intervals[i];
    result.push(arr.slice(startPoint, endPoint + 1));
  }
  return result.flat();
}