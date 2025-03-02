// User function Template for javascript
class Solution {
    findStepKeyIndex(arr, k, x) {
        let i=0
        let n= arr.length
        while(i<n){
            if(arr[i]==x){
                return i
            }
            console.log("k nd x", k, x)
           // let step=Math.max(1, Math.floor(Math.abs(arr[i]-x)/k))
            let step = Math.max(1, Math.floor(Math.abs(arr[i] - x) / k));
            console.log("step",step)
            i+=step
        }
        return -1
        // code here
    }
}