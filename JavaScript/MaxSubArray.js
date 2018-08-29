//Far too slow according to leetcode, I will have to redo this later without the nested loop.

const maxSubArray = function(nums) {
    let arr = [];
    for(let i = 0;i<nums.length;i++){
        let num = i
        for(let j = num+1;j<=nums.length;j++){
            arr.push(nums.slice(num, j).reduce((a,b)=>a+b))
        }
    }
    return Math.max(...arr);
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))