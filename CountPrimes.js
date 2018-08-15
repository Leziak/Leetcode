// I am going to redo this later since it's actually too slow to pass the final tests.

var countPrimes = function(n) {
    let count = 0;

    const is_prime = n => {
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i == 0) return false
        }
        return true
    }

    for(let j = 2; j < n; j++) {
        if(is_prime(j)) count++
    }

    return count;
};

console.log(countPrimes(10));
