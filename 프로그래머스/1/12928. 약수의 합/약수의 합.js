function solution(n) {
    const arr = []
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            arr.push(i)
        }
    }
    const result = arr.reduce((accumulator,currentValue) => {
        return accumulator + currentValue
    },0)
    return result
}