 const arr =  [7,1,5,3,6,8];

function maxProfit(arr){
    let minValue = arr[0];
    let maxProfit = 0;

    for(let i=0; i<arr.length; i++){
        // checking the min value till i in arr
        minValue = minValue > arr[i] ? arr[i] : minValue;
        let profit = arr[i]-minValue;
        // checking the max profit
        maxProfit = maxProfit < profit ? profit : maxProfit; 
    }
    return maxProfit;
}

console.log(maxProfit(arr));

// TC : O(n)
// TC : O(1)