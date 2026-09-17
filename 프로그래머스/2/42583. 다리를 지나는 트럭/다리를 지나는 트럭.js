function solution(bridge_length, weight, truck_weights) {
  // 다리위에 있는 트럭 배열 생성
  // 누적합을 이용하여 "weight" 초과 여부를 결정하여 트럭이 다리위에 올라갈 수 있는지 판단 플래그
  const truckOnBridge = Array.from({ length: bridge_length - 1 }).fill(0);
  // 첫 번쨰 트럭은 무조건 다리위에 올라갈 수 있으므로 올려놈
  const firstTruck = truck_weights.shift();
  truckOnBridge.push(firstTruck);
  // 첫 번째 트럭이 이미 올라가있으므로 시간은 1초부터 시작
  let time = 1;

  // 반복문 조건도 대기열 트럭이랑 다리위에 있는 트럭이 둘다 없어야지 종료
  while (
    truck_weights.length > 0 ||
    truckOnBridge.reduce((acc, cur) => acc + cur, 0) > 0
  ) {
    //시간 증가
    time++;

    // 1초가 지났으므로 맨 앞 트럭 이동
    truckOnBridge.shift();

    // 다리 현재무게
    const currentWeight = truckOnBridge.reduce((acc, cur) => acc + cur, 0);

    // 트럭위에 올라갈 수 플래그
    const isPossibleToOnBridge =
      truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight;

    if (isPossibleToOnBridge) {
      // 가능하다면 다음 트럭 shift() -> push()
      const nextTruck = truck_weights.shift();
      truckOnBridge.push(nextTruck);
    } else {
      // 불가능하다면 0을 Push()
      truckOnBridge.push(0);
    }
  }
  return time;
}
