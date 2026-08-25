function solution(bridge_length, weight, truck_weights) {
  //[0,0]
  const bridge = Array.from({ length: bridge_length }).fill(0);

  let currentWeight = 0;
  let time = 0;

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;

    // 1초 동안 트럭들이 이동하고 맨 앞 트럭 이동
    const exitedTruck = bridge.shift();
    // 이동했으니간 현재 무게에서 제거
    currentWeight -= exitedTruck;

    // 대기중인 트럭에서 첫번째 요소 꺼냄
    const nextTruck = truck_weights[0];
    // bridge에 진입할수있는지 검증
    const isPossibleToPass = currentWeight + nextTruck <= weight;

    if (isPossibleToPass) {
      const passTruckWeight = truck_weights.shift();
      bridge.push(passTruckWeight);
      currentWeight += passTruckWeight;
    } else {
      bridge.push(0);
    }
  }

  return time;
}