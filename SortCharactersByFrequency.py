# Too slow..

class Solution:
    def frequencySort(self, s):
        """
        :type s: str
        :rtype: str
        """
        s = list(s)
        for i in range(len(s)):
            for j in range(len(s) - 1):
                if s.count(s[j]) < s.count(s[j+1]) or (s.count(s[j]) == s.count(s[j+1]) and ord(s[j]) < ord(s[j+1])):
                    s[j], s[j+1] = s[j+1], s[j]
        return ''.join(s)
