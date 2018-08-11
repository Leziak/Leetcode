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