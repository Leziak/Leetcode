class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        str = [letter for letter in s.lower() if letter in 'abcdefghijklmnopqrstuvwxyz0123456789']
        return str == str[::-1]
