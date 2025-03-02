   //https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/
   // 1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
   Find Pair Given Difference

Given an array, arr[] and an integer x, return true if there exists a pair
 of elements in the array whose absolute difference is x, otherwise, 
 return false.

Examples:

Input: arr[] = [5, 20, 3, 2, 5, 80], x = 78
Output: true
Explanation: Pair (2, 80) have an absolute difference of 78.
   
   
   // // code here
        // for(let i=0; i<arr.length; i++){
        //     for(let j=0; j<arr.length; j++){
        //         if(i==j)continue
        //         if(arr[i]-arr[j]==x){
        //             return true
        //         }
        //     }
            
        // }
        // return false
        arr.sort((a,b)=>a-b)
        let i=0;
        let j=0;
        let n=arr.length
        while(i<n && j <n){
            if(i!==j && arr[j]-arr[i]==x){
                return true
            }
            else if(arr[j]-arr[i]<x){
                j++
            }
            else{
                i++
            }
        }
        return false
    }