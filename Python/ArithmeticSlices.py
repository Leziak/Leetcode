class Solution:
    def numberOfArithmeticSlices(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        slices = []
        for i in range(len(A) - 1):
            diff = abs(A[i] - A[i + 1])
            count = 1
            for j in range(i, len(A) - 1):
                if abs(A[j] - A[j + 1]) == diff:
                    count += 1
                    if count >= 3:
                        slices.append(A[i:j+2])
                else:
                    break
        slices = list(filter(lambda s: s[1] - s[0] == s[2] - s[1] , slices))
        return len(slices)
