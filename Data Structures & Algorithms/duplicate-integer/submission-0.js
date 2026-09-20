class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};
        for(let i = 0; i<nums.length; i++) {
            if (obj[nums[i]]) {
                return obj[nums[i]];
            } else {
                obj[nums[i]] = true;
            }
        }
        return false;
    }
}
