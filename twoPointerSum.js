function findTarget(arr) { 
    // sort 
    arr.sort((a,b)=>a-b);

    let i=0;
    let j=nums.length-1;
    while(i<j) {
        if(nums[i]+nums[j] === target) {
            return [i,j];
        }
        else if(nums[i]+nums[j] < target) { 
            ++i;
        }
        else {
            --j;
        }
    }

    return [-1, -1];
}

let nums = [2, 15, 11, 7, 9];
let target = 9;

let res = findTarget(nums);

console.log(res);