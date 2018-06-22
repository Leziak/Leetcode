const singleNonDuplicate = function(nums) {
    for(let i=0;i<nums.length;i+=2){
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }
    }
    return -1;
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))