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
                console.log('from startsWithClosingTag')
                break;
            }
            else if(this.isOpeningTag(item)){
                this.openingBracketsStack.push(item);
                this.topItem = item;
                if(!this.shouldPass) {
                    this.shouldPass = true;
                }
                console.log('from isOpeningTag')
                console.log('openingBracketsStack: ', this.openingBracketsStack)
                console.log('topItem: ', this.topItem)
            }
            else if(this.isCorrectClosingBracket(item)){
                this.openingBracketsStack.pop();
                this.resetTopItem()
                console.log('from isCorrectClosingBracket')
                console.log('top Item : ', this.topItem)
                console.log('current closing bracket', item)
            }
            else if(this.isNotCorrectClosingTag(item)){
                console.log('from isNotCorrectClosingTag')
                this.shouldPass = false;
                break;
            }
        }
        console.log(this.openingBracketsStack)
       return (this.openingBracketsStack.length == 0 && this.shouldPass) ? true : false;
    }
}