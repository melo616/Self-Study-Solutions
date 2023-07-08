nums = [2, 7, 8, 9, 15]
target = 9

# O(n2) time complexity due to having nested for loops
# def twoSum(nums, target):
#     n = len(nums)
#     answer = list()
#     for i in range(n):
#             for j in range(i + 1, n):
#                 if (nums[i] + nums[j] == target):
#                     answer.append(i)
#                     answer.append(j)
#     print(answer)

# twoSum(nums, target)