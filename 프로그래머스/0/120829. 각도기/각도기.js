function solution(angle) {
    // 예각일 경우
    if(angle > 0 && angle < 90){
        return 1 
    }
    // 직각일 경우
    if(angle === 90){
        return 2
    }
    // 둔각일 경우
    if(angle > 90 && angle < 180){
        return 3
    }
    //평각일 경우 
    if(angle === 180){
        return 4
    }
}