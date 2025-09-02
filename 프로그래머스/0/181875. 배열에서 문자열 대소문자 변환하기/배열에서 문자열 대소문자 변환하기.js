function solution(strArr) {
    return strArr.map((el,idx) => {
        return idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
    })
}