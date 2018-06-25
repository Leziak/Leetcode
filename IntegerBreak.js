//Creates an array of twos and threes from any positive number.
//If the number equals 2, returns 1*1, else if the number equals 3, returns 2*1.

const integerBreak = function(n) {
    let arr = [];
    if(n==2) return 1;
    if(n==3) return 2;
    while(n>0){
        if(n%3==0) {
            n-=3;
            arr.push(3);
        } else {
            n-=2;
            arr.push(2)
        }
    }
    console.log(arr);
    return arr.reduce((a,b)=>a*b)
};

console.log(integerBreak(4))