class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let arrayMap = new Map();
        for (let i = 0; i < nums.length; i++){
            arrayMap.set(nums[i], true) 
        }
        return arrayMap.size == nums.length ? false : true;
    }
}
