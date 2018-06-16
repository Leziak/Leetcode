//Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

const isUgly = function(num) {
    if(num < 1) return false;
    while(num !== 3 && num !== 2 && num !== 5 ){
        if(num%2==0){
            num /= 2
        } else if(num%3==0){
            num /= 3
        } else if(num%5==0){
            num /= 5
        } else {
            break;
        }
    }
    if(num === 3 || num === 2 || num === 5 || num === 1) return true
    return false
};

console.log(isUgly(14));