//Works for the purposes of the exercise, but gets really slow on big numbers.

const isPerfectSquareLoop = function(num) {
    let i = 0;
    if(num==1) return true
    while(i<=num/2){
        if(i*i==num) return true
        i++;
    }
    return false
};

console.log(isPerfectSquareLoop(81))

//Recursive version of the same function (I have to practice this stuff a bit more).

const isPerfectSquareRec = function(num, i=1) {
    if(i*i == num || num == 1) return true
    else if(i>num/2) return false
    return isPerfectSquareRec(num, i+1)
};

console.log(isPerfectSquareRec(16))