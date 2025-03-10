//https://leetcode.com/problems/find-peak-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left=0; 
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(mid-1>0 && nums[mid]<nums[mid-1]){
            right=mid-1
        }
        else if(mid <nums.length && nums[mid]<nums[mid+1]){
            left=mid+1
        }
        else{
            return mid
        }
    }
    return -1
    
};