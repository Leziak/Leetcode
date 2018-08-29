const dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max)
    nums.splice(index, 1);
    let secondMax = Math.max(...nums);
    console.log(max, secondMax)
    return max >= 2 * secondMax ? index : -1
};

console.log([1,2,3,6])