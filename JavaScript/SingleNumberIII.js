const singleNumber = function(nums) {
    let obj = {};
    for(let el of nums) {
        if(!obj[el]) obj[el] = 1;
        else obj[el]++;
    }
    return Object.keys(obj).filter(el => {
        return obj[el] == 1
    }).map(el => Number(el));
};

console.log(singleNumber([1,2,1,3,2,5]))