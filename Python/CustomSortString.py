class Solution(object):
    def customSortString(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: str
        """
        vals = {ltr: (S.index(ltr) if ltr in S else 27) for ltr,  in T}
        T = list(T) 
        
        # Bubble sort to the rescue!
        for i in range(len(T)):
            for j in range(len(T) - i - 1):
                if vals[T[j]] > vals[T[j+1]]:
                    T[j], T[j+1] = T[j+1], T[j]
        return ''.join(T)
