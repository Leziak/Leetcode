class Solution:
    def uncommonFromSentences(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: List[str]
        """
        A, B = A.split(), B.split()
        words = []
        for word in A:
            count = 0
            for duplicate in A:
                if duplicate == word:
                    count += 1
            if word not in B and count < 2:
                words.append(word)
                count = 0
        for word in B:
            count = 0
            for duplicate in B:
                if duplicate == word:
                    count += 1
            if word not in A and count < 2:
                words.append(word)
        return words

print(Solution.uncommonFromSentences(Solution, "this sweet apple is sweet", "this apple is sour"))