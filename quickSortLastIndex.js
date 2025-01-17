function partitionIndex(arr, left, right){
    let partition= arr[right]
    let i=left-1
    for(let j=left; j<=right-1; j++){
        if(arr[j]<partition){
            i++
            swap(arr, i,j)
            
        }
        
    }
    swap(arr,i+1, right)
        return i+1
    }

function swap(arr, i, j){
    [arr[i],arr[j]]= [arr[j], arr[i]] 
}
function quickSort(arr, low, high){
    if(low>high){
        return
    }
    let pi= partitionIndex(arr, low, high)
    quickSort(arr,low, pi-1 )
    quickSort(arr, pi+1, high)
}
let arr=[3,90,1,3,2,100]
quickSort(arr,0,arr.length-1)
console.log(arr)