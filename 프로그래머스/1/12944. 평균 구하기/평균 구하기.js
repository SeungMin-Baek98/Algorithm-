function solution(arr) {
    const newArr = [...arr]
    const sum = newArr.reduce((accumulator,currentValue) =>{
        return accumulator + currentValue; 
    })
    const result = sum / newArr.length;
    return result
}