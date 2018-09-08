# Considered too slow in edge cases, will have to redo this later.

class Solution:
    def minMoves2(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        min_step = 2 ** 31

        for num in nums:
            steps = 0
            for sec_num in nums:
                steps += abs(num - sec_num)
                if steps > min_step:
                    break
            if steps < min_step:
                min_step = steps

        return min_step
