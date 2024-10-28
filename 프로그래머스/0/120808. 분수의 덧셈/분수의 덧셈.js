const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b);
};

function solution(numer1, denom1, numer2, denom2) {
   let denum = numer1 * denom2 + numer2 * denom1
   let numer = denom1 * denom2
   let gcd = getGCD(denum, numer)
   
   return [denum / gcd, numer / gcd]
}