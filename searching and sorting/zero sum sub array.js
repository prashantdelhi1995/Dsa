//You are given an array arr[] of integers. Find the total count of subarrays 
// with their sum equal to 0.
class Solution {
    findSubarray(arr) {
        // code here.
    
 let ans = 0;
        let dict = new Map();
        let sum = 0;

        dict.set(0, 1); // Initialize for cases where sum itself is zero

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (dict.has(sum)) {
                ans += dict.get(sum);
            }

            dict.set(sum, (dict.get(sum) || 0) + 1);
        }

        return ans;
    

    }
}
