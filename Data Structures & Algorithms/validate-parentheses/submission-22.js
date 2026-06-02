class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (const item of s) {
            if (item in closeToOpen) {
                if (stack.length > 0 && stack.at(-1) == closeToOpen[item]) stack.pop();
                else return false;
            } else {
                stack.push(item);
            }
        }
        return stack.length === 0;
    }
}
