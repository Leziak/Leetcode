# Just flattened it, sorted it again and retrieved the kth element

class Solution:
    def kthSmallest(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
        return sorted([item for sublist in matrix for item in sublist])[k - 1]

print(Solution().kthSmallest([[1,5,9], [10,11,13], [12,13,15]], 8))
