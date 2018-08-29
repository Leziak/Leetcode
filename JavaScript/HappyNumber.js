//A happy number is a number defined by the following process:
//Starting with any positive integer, replace the number by the sum of the squares of its digits,
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

const isHappy = function(n) {
    let arr = [];
    while(n !== 1 && !arr.includes(n)){
        arr.push(n);
        n = String(n).split('').reduce((a,b)=>{
            return a + Math.pow(Number(b), 2)
        }, 0)
    }
    return n === 1
};

console.log(isHappy(19))