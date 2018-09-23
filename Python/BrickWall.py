# Obviously too slow for the final tests, but "works".
class Solution:
    def leastBricks(self, wall):
        """
        :type wall: List[List[int]]
        :rtype: int
        """
        row_length = sum(wall[0])
        result = 200000
        
        if all(map(lambda x: len(x) == 1, wall)): return len(wall)
        if len(wall) == 1: return 0
        
        for n in range(0, row_length - 1):
            total = 0
            for row in wall:
                count = 0
                for val in row:
                    count += val
                    if count == n + 1:
                        break
                    elif count > n + 1:
                        total += 1
                        break
            if result > total:
                result = total
                
        return result
