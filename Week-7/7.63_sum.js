function closestSum(arr, target) {
    let closestSum = 999999;
    arr.sort((a,b) => a-b);
	
    for(let i=0; i<arr.length-2; i++){
        let left = i+1;
        let right = arr.length - 1;
        let closest = 9999999999;
        while(left<right){
            let currSum = arr[i]+arr[left] + arr[right];
            if(Math.abs(currSum - target) < Math.abs(closest - target)){
                closest = currSum;
            }
            if(currSum > target){
                right--;
            } else if(currSum < target){
                left++;
            } else {
                closest = currSum;
                return closest;
            }
        }
        if(Math.abs(closest - target) < Math.abs(closestSum - target)){
            closestSum = closest
        }
    }
    
    return closestSum;
};

console.log(closestSum([-1, 2, 1, 4], 1));