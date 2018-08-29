const arrangeCoins = function(n) {
    let stair_count = 0;
    let coin_count = 0;
    let add = 1;
    while(coin_count<n){
        coin_count += add
        add++;
        if(coin_count<=n) stair_count++;
    }
    return stair_count;
};

console.log(arrangeCoins(34239))