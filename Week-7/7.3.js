
const arr = [1, 0, 2, 1, 2, 0, 2, 1];

function sortArray(arr){
    let left = 0;
    let middle = 0;
    let right = arr.length-1;
    while(middle<=right){
        switch (arr[middle]){
            case 0:
               arr = swap(arr, middle, left);
               left++;
               middle++;
               break;
            case 1: 
                middle++;
                break;
            case 2:
                arr = swap(arr, middle, right);
                right--;
                break;
        }
    }
    return arr;
}

console.log(sortArray(arr));

function swap(arr , i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    return arr;
}

// TC : O(n)
// TC : O(1)