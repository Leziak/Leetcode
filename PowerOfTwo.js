const isPowerOfTwo = function(n) {
    let nums = [];
    for(let i = 0; i<50;i++){
        nums.push(Math.pow(2, i))
    }
    return nums.includes(n);
};


console.log(isPowerOfTwo(8388608))