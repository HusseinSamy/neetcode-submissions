class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let arrayMap = new Map();
        for (let i = 0; i < nums.length; i++){
            let currentMapValue = arrayMap.get(nums[i]);
            if(currentMapValue >= 0) return true;
            arrayMap.set(nums[i], 0) 
        }
        return false
    }
}
