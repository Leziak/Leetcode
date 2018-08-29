const thirdMax = function(nums) {
    let obj = {}
    let arr = [];
    nums = nums.sort((b,a)=>a-b)
    nums.forEach(num => {
        if(!obj[num]){
            obj[num] = true
            arr.push(num);
        }
    })
    return arr.length > 2 ? arr[2] : arr[0]
};

console.log(thirdMax[1,1,2])