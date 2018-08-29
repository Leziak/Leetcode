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
            if word not in B and A.count(word) < 2:
                words.append(word)
                count = 0
        for word in B:
            if word not in A and B.count(word) < 2:
                words.append(word)
        return words

print(Solution.uncommonFromSentences(Solution, "this sweet apple is sweet", "this apple is sour"))