function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];

    let a = arr[s];
    arr[s] = arr[e];
    arr[e] = a;
  }
  return arr;
}
