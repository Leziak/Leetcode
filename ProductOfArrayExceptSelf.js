const productExceptSelf = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        let skip = i;
        let product = 1;
        for(let j=0;j<nums.length;j++) {
            if(j == i) continue
            product *= nums[j]
        }
        arr.push(product);
    }
    return arr
};

console.log(productExceptSelf([1,2,3,4,5]))