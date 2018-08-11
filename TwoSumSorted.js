/* For some reason, the exercise demands the indices to start at 1, so I just incremented the right array indices by one each.
   So in this case, even though the correct array indices are 2 and 4, the function returns 3 and 5. */

const twoSum = function(numbers, target) {
    let i, j;
    for(i = 0; i < numbers.length;i++) {
        for (j = 0; j < numbers.length;j++) {
            if (j != i && numbers[i] + numbers[j] == target) {
                return [i + 1, j + 1];
            }
        }
    }
    return -1;
};

console.log(twoSum([1,2,3,4,5], 8))