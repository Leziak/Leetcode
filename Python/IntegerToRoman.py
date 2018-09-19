class Solution:
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        nums_tuple = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
        nums_dict = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 
                     50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'}
        
        roman_num = ''
        
        for n in nums_tuple:
            if num // n:
                for iter in range(num // n):
                    roman_num += nums_dict[n]
                num = num % n
            
        return roman_num

print(Solution().intToRoman(2397))
