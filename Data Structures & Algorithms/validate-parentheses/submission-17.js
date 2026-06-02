class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    constructor()
        {
        this.closingBracketsMap = new Map([
                [")", "("],
                ["]", "["],
                ["}", "{"]
            ])
        this.openingBracketsStack = [];
        this.topItem = null;
        this.shouldPass = false; 
    }
    
    isOpeningTag(item){
        return this.closingBracketsMap.get(item) == undefined;
    }

    isCorrectClosingBracket(item){
        return this.closingBracketsMap.get(item) == this.topItem
    }

    resetTopItem(){
        this.topItem = this.openingBracketsStack[this.openingBracketsStack.length - 1];
    }

    isNotCorrectClosingTag(item){
        return this.closingBracketsMap.get(item) != this.topItem;
    }
    startsWithClosingTag(item){
        return !this.shouldPass && this.closingBracketsMap.get(item) != this.topItem;
    }
    
    isValid(s) {
        for (const item of s) {
            if(this.startsWithClosingTag(item)){
                break;
            }
            else if(this.isOpeningTag(item)){
                this.openingBracketsStack.push(item);
                this.topItem = item;
                if(!this.shouldPass) {
                    this.shouldPass = true;
                }
            }
            else if(this.isCorrectClosingBracket(item)){
                this.openingBracketsStack.pop();
                this.resetTopItem()
            }
            else if(this.isNotCorrectClosingTag(item)){
                this.shouldPass = false;
                break;
            }
        }
       return (this.openingBracketsStack.length == 0 && this.shouldPass) ? true : false;
    }
}