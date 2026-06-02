class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closingBracketsMap = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"]
        ]);
        const openingBracketsStack = [];
        let topItem = openingBracketsStack[openingBracketsStack.length - 1];
        let shouldPass = false; 
        for (const item of s) {
            if(closingBracketsMap.get(item) == undefined){
                openingBracketsStack.push(item);
                topItem = item;
                if(!shouldPass) {
                    shouldPass = true;
                }
                console.log('from if')
                console.log('openingBracketsStack: ', openingBracketsStack)
                console.log('topItem: ', topItem)
            }
            else if(closingBracketsMap.get(item) == topItem){
                console.log('from else if')
                console.log('top Item : ', topItem)
                console.log('current closing bracket', item)
                openingBracketsStack.pop();
                topItem = openingBracketsStack[openingBracketsStack.length - 1];
                continue;
            }
            else if(closingBracketsMap.get(item) != topItem){
                shouldPass = false;
                break   
            } ;
        }
        console.log(openingBracketsStack)
       return (openingBracketsStack.length == 0 && shouldPass) ? true : false;
    }
}
