class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let profit = 0;
       let buyPrice = prices[0];
       let sellPrice = prices[0];
       for(let i = 1; i < prices.length; i++){
        sellPrice = prices[i];
        if(sellPrice < buyPrice){
            buyPrice = sellPrice
        }
        if((sellPrice - buyPrice) > profit){
            profit = sellPrice - buyPrice
        }
       }
       return profit;
    }
}
