//Solution is basically the same as the PowerOfTwo one (you could make a function taking in a second parameter for the power to apply it for any set of numbers.

const isPowerOfFour = function(num) {
    let arr = [];
    for(let i = 0;i<1000;i++){
        arr.push(Math.pow(4,i))
    }

    return arr.includes(num)
};

console.log(isPowerOfFour(16))