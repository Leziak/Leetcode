//Takes FOREVER after n>3, but "works". I'll try do redo this obviously.

const largestPalindrome = function(n) {
    let palindrome = 0;
    let min = Number('1' + '0'.repeat(n-1));
    let max = Number('1' + '0'.repeat(n));
    let i,j;
    for(i=min;i<max;i++){
        for(j=min;j<max;j++){
            if((j*i).toString().split('').reverse().join('') == (j*i).toString().split('').join('')) {
                if(j * i > palindrome) palindrome = j * i
            }
        }
    }
    return palindrome%1337;
};

console.log(largestPalindrome(4))