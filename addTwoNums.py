from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

l1_values = [9, 9, 9, 9, 9, 9, 9]
l2_values = [9, 9, 9, 9]

# Convert l1_values to a linked list
l1 = ListNode(l1_values[0])
current = l1
for val in l1_values[1:]:
    current.next = ListNode(val)
    current = current.next

# Convert l2_values to a linked list
l2 = ListNode(l2_values[0])
current = l2
for val in l2_values[1:]:
    current.next = ListNode(val)
    current = current.next

# Expected: [8, 9, 9, 9, 0, 0, 0, 1]
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        result = ListNode(0)
        pointer = result

        while l1 or l2 or carry:
            firstNum = l1.val if l1 else 0
            secondNum = l2.val if l2 else 0

            sum = firstNum + secondNum + carry
            num = sum % 10
            carry = sum // 10

            pointer.next = ListNode(num)
            pointer = pointer.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return result.next

solution = Solution()
result = solution.addTwoNumbers(l1, l2)
while result:
    print(result.val, end=" ")
    result = result.next
