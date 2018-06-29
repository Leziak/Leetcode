const majorityElement = function(nums) {
    let obj = {};
    for(let el of nums){
        if(!obj[el]) obj[el] = 1
        else obj[el]++
    }
    let res = Object.keys(obj).filter(el=>obj[el]>nums.length/3)
    return res.map(el=>Number(el))
};

console.log(majorityElement([2,5,3,3,5,5,3,2]))