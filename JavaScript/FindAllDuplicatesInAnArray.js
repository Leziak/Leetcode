const findDuplicates = function(nums) {
    let obj = {};
    let arr = [];
    for(let num of nums) {
        if(!obj[num]) obj[num] = 1
        else obj[num]++
    }
    for(let num in obj) {
        if(obj[num] === 2) arr.push(Number(num));
    }
    return arr;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))