class Solution:
    def matrixReshape(self, nums, r, c):
        """
        :type nums: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        flat_nums = sum(nums, [])
        res_nums = []

        if (len(flat_nums)) != r * c:
            return nums

        for i in range(r):
            column = []
            for j in range(c):
                column.append(flat_nums[j])
            flat_nums = flat_nums[c:]
            res_nums.append(column)

        return res_nums

print(Solution.matrixReshape(Solution, [[1,2], [3,4,5,6]], 2, 3))