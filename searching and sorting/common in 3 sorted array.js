//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const brr = readLine().split(' ').map(x => parseInt(x));
        const crr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.commonElements(arr, brr, crr);

        if (res.length === 0)
            console.log(-1);
        else
            console.log(res.join(' '));

        console.log("~");
    }
}
// } Driver Code Ends




// User function Template for javascript

class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        
      let n1=arr1.length
      let n2=arr2.length
      let n3=arr3.length
     let prev1 = -Infinity, prev2 = -Infinity, prev3 = -Infinity;
     let i=0, j=0,k=0;
     let ans=[]
     while(i<n1 && j<n2 && k<n3){
         while(arr1[i]==prev1 && i<n1)
         i++
          while(arr2[j]==prev2 && j<n2)
         j++
          while(arr3[k]==prev3 && k<n3)
         k++
     
     if(arr1[i]==arr2[j] && arr2[j]==arr3[k]){
         ans.push(arr1[i])
         prev1=arr1[i]
         prev2=arr2[j]
         prev3=arr3[k]
         i++
         j++
         k++
     }
     else if( arr1[i]<arr2[j] || arr1[i]<arr3[k]){
         prev1=arr1[i]
         i++
     }
     else if(arr2[j]<arr1[i] || arr2[j]<arr3[k]){
         prev2=arr2[j]
         j++
     }else{
         prev3=arr3[k]
         k++
     }
        
    }
    return ans

      
        // Code Here
    }
   
}