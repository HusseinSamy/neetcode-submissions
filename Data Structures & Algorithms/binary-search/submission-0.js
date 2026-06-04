class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let startIdx = 0;
        let endIdx = nums.length - 1;
        while (startIdx <= endIdx){
        let mid = Math.floor((startIdx + endIdx) / 2);
        console.log("start : ", nums[startIdx])
        console.log("mid : ", nums[mid])
        console.log("end : ", nums[endIdx])
        console.log("target : ", target)
            if(target === nums[mid]){
                return mid
            }

            else if(target < nums[mid]){
                endIdx = mid - 1;
            }

            else {
                startIdx = mid + 1;
            }
        }
        return -1;
    }
}
