class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    isDuplicated(nums, target, currentIndex){
        let low = 0;
        let high = nums.length - 1;
        while(low <= high){
            let mid = Math.round((low + high) / 2);
            console.log("mid: ", mid)
            console.log("high: ", high)
            console.log("low: ", low)
            if(nums[mid] == target && mid != currentIndex) return true;
            console.log("target: ", target)
            console.log("mid value: ", nums[mid])
            if(target < nums[mid]){
                high = mid - 1;
            }
            else low = mid + 1;
        }
        return false;
    }

    hasDuplicate(nums) {
        // nums.sort((a,b)=>a-b)
        let arrayMap = new Map();
        for (let i = 0; i < nums.length; i++){
            let currentMapValue = arrayMap.get(nums[i]);
            if(currentMapValue >= 0) return true;
            arrayMap.set(nums[i], 0) 
        }
        return false

        // O(n) Time Complexity
        // let nextNumber = -1;
        // let currentNumber = -1;
        // for(let i = 0; i < nums.length; i++){
        //     nextNumber = nums[i+1];
        //     currentNumber = nums[i]
        //     if(currentNumber == nextNumber){
        //         return true;
        //     }
        // }
        // return false;
    }
}
