function solution(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
  })
  
  return sum / numbers.length
}