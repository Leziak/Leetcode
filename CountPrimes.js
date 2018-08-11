// I am going to redo this later since it's actually too slow to pass the final tests.

const countPrimes = function(n) {
    let primes = 0;
    for(let i=2;i<n;i++) {
        let count = 2;
        while(true){
            if(i == count) primes++;
            if(i % count == 0) break;
            count++;
        }
        count = 2;
    }
    return primes;

};

console.log(countPrimes(10));
