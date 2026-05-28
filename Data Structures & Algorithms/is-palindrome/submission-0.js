class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let lowerCaseS = s.replaceAll(" ", "").replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase()
        let left = 0;
        let right = lowerCaseS.length - 1;
        while(left < right)
        {
            if(lowerCaseS[left] == lowerCaseS[right]){
                left = left + 1;
                right = (lowerCaseS.length - 1) - left;
            }
            else return false;
        }
        return true;
    }
}
