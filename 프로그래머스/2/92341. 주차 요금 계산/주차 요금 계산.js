function solution(fees, records) {
  var answer = [];
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  // 1. 차량 번호별로 입차 시간과 출차 시간 기록
  const parkingRecords = {};

  records.forEach((record) => {
    const [time, carNumber, action] = record.split(" ");

    if (parkingRecords[carNumber] === undefined) {
      parkingRecords[carNumber] = [];
    }
    parkingRecords[carNumber].push({ time, action });
  });

  // 2. 차량 번호별로 총 주차 시간 계산
  const totalParkingTime = {};

  for (const carNumber in parkingRecords) {
    const records = parkingRecords[carNumber];

    let totalTime = 0;
    let inTime = null;

    records.forEach(({ time, action }) => {
      if (action === "IN") {
        inTime = time;
      } else if (action === "OUT" && inTime) {
        const [inHour, inMinute] = inTime.split(":").map(Number);
        const [outHour, outMinute] = time.split(":").map(Number);

        const parkingTime = (outHour - inHour) * 60 + (outMinute - inMinute);
        totalTime += parkingTime;
        inTime = null; // 출차 후 입차 시간 초기화
      }
    });

    // 출차하지 않은 차량은 23:59로 간주
    if (inTime) {
      const [inHour, inMinute] = inTime.split(":").map(Number);
      const parkingTime = (23 - inHour) * 60 + (59 - inMinute);
      totalTime += parkingTime;
    }

    totalParkingTime[carNumber] = totalTime;
  }

  // 3. 차량 번호 오름차순으로 정렬 후 요금 계산
  const sortedCarNumbers = Object.keys(totalParkingTime).sort((a, b) => a - b);

  sortedCarNumbers.forEach((carNumber) => {
    const totalTime = totalParkingTime[carNumber];
    let fee = basicFee;

    if (totalTime > basicTime) {
      fee += Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
    }

    answer.push(fee);
  });

  return answer;
}
