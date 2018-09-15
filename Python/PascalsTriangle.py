class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if not numRows: return []
        
        matrix = [[1]]
        
        if numRows == 1: return matrix
        
        for i in range(numRows - 1):
            cell = []
            for j in range(len(matrix[i]) + 1):
                if j == 0: 
                    cell.append(matrix[i][0])
                elif j == len(matrix[i]):
                    cell.append(matrix[i][len(matrix[i]) - 1])
                else:
                    cell.append(matrix[i][j - 1] + matrix[i][j])
            matrix.append(cell)
        return matrix

print(Solution().generate(10))
