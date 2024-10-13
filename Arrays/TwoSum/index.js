var twoSum = function (nums, target) {
    let checked = new Map();
    if (nums.length) {
        for (let i = 0; i < nums.length; i++) {
            let reminder = target - nums[i];
            if(checked.size && checked.has(reminder)){
                return [checked.get(reminder), i]
            }
            checked.set(nums[i], i)
        }
    }

};

console.log(twoSum([2,7,11,15],9))

console.log(twoSum([3,2,4],6))