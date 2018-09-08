# Used a list because I wasn't explicitly asked to reverse the linked list (which I did in another problem, only to verify if the linked list is a palindrome or not.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        nodes_list = []
        
        if not head:
            return True
        
        while head:
            nodes_list.append(head.val)
            head = head.next
        return nodes_list == nodes_list[::-1]
        
        
