class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=>a-b)
        let nextNumber = -1;
        let currentNumber = -1;
        for(let i = 0; i < nums.length; i++){
            nextNumber = nums[i+1];
            currentNumber = nums[i]
            if(currentNumber == nextNumber){
                return true;
            }
        }
        return false;
    }
}
