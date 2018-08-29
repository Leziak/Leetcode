const containsNearbyDuplicate = (nums, k) => {
	for(let i=0;i<nums.length;i++){
		for(let j=0;j<nums.length;j++){
			if(nums[i] == nums[j] && i != j){
				if(i > j){
					if(i - j <= k) return true
				} else if(j > i){
					if(j - i <= k) return true
				}		
			}	
		}
	}
	return false
}

console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,2,3,1], 3))
