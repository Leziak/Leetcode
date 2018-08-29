const findNthDigit = n => {
    let str = '';
    for(let i=1;i<=n;i++) str+= String(i)
    return Number(str[n-1]);
}

console.log(findNthDigit(11));

