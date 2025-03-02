Ceiling in a sorted array

class Solution {
    findCeil(arr, x) {
        let left=0
        let right=arr.length
        let ceil=-1
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]>=x){
                ceil=mid
                right=mid-1
            }else{
                left=mid+1
            }
        }
        return ceil
        
        // code here
        
    }
}