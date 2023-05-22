const array = [8, -5, 7, 9, -10, 1, -20, 8, -3];

let maxSum = 0;

function calculateMaxSubArraySum(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        // checking if the sum on the left is greater than zero
        if(arr[i] + sum > 0){
            sum += arr[i];
            maxSum = max(maxSum, sum);
        } else {
            sum = 0;
        }
    }
    console.log(maxSum);
}

function max(num1, num2){
    return num1 > num2 ? num1 : num2;
}

calculateMaxSubArraySum(array);

// TC : O(n)
// SC : O(1)