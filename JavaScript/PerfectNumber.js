const checkPerfectNumber = function(num) {
    let count = 0;
    for(let i=1;i<num;i++){
        if(num%i==0) count+=i
    }
    if(!num) return false
    return count == num

};

console.log(checkPerfectNumber(28))