function solution(n)
{
    const arr = [n];
    const newArr = arr.toString().split('').map(Number)
    const result = newArr.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    })
    return result
}