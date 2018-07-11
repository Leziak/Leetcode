const arrayPairSum = function(nums) {
    let count = 0;
    nums = nums.sort((a,b) => a-b)
    for(let i=0;i<nums.length;i+=2){
        count+= nums[i] > nums[i+1] ? nums[i+1] : nums[i]
    }
    return count;
};

console.log(arrayPairSum([1,5,7,2,4,8]))