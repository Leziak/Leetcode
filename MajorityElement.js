const majorityElement = function(nums) {
    let obj = {};
    for(let el of nums){
        if(!obj[el]) obj[el] = 1
        else obj[el]++
    }
    return Number(Object.keys(obj).find(el=>obj[el]>nums.length/2))
};

console.log(majorityElement([3,2,2,3,2,3,3,3]))