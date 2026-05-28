class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    prepareArray(arr){
        return arr.replaceAll(" ", "")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toLowerCase();
    }
    isPalindrome(s) {
        let preparedArr = this.prepareArray(s);
        let left = 0;
        let right = preparedArr.length - 1;
        while(left < right)
        {
            if(preparedArr[left] == preparedArr[right]){
                left++;
                right--;
                continue
            }
            else return false;
        }
        return true;
    }
}
