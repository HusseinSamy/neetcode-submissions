class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    const result = [];

    function backtrack(path, index){
        // Base case
        if(index === (nums.length)){
            result.push(path.slice());
            return;
        }
        // Logic
        path.push(nums[index]);
        backtrack(path, index + 1)
        // Backtracking step
        path.pop()
        backtrack(path, index + 1)

        }
    backtrack([],0)
    return result
    }
}
