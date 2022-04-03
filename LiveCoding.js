function twoSum(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        //inner loop to handle adding the other number to get the target
        for(let j=0; j<nums.length; j++){
            if((nums[i]+nums[j] ===target) && (!result.includes(nums[i]) && !result.includes(nums[j]))){
                result.push(nums[i], nums[j]);
            }
        }
    }
    console.log('result', result);
}
twoSum([2, 7, 11, 15], 18);

