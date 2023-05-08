const arr = [5, 10, 3, 2, 50, 80];

function checkPairWithGivenDifference(arr, num){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        // checking the number which can be subtracted from the current number to get the target number exists in map or not
        if(map.has(arr[i]-num)){
            return 1;
        } else {
            map.set(arr[i], true);
        }
    }
    return 0;
}

console.log(checkPairWithGivenDifference(arr, 78));

// TC : O(n)
// TC : O(n)