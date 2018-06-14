const mySqrt = function(x) {
    return Number(String(x**(1/2)).match(/\d+/))
};

console.log(mySqrt(8))