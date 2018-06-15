const searchInsert = function(nums, target) {

    if(nums.includes(target)) return nums.indexOf(target)
    if(target > nums[nums.length-1]) return nums.length
    if(target < nums[0]) return 0
    for(let i=1;i<nums.length;i++){
        if(target > nums[i-1] && target < nums[i] ) return i
    }
};

console.log(searchInsert([1,3,5,6], 7))