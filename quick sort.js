function quicksort(arr, low, high){
    if(low<high){
        let pivotIndex=pi(arr,low, high)
        quicksort(arr,low,pivotIndex-1)
        quicksort(arr,pivotIndex+1, high)
    }
    
}
function pi(arr, low, high){
    let i=low
    let j= high
    let pivot=arr[low]
    while(i<j){
        while(arr[i]<=pivot && i<=high){
            i++
        }
        while(arr[j]>pivot && j>=low){
            j--
        }
        if(i<j){
             swap(arr,i, j)
        }
       
    }
    swap(arr,low,j)
    return j
}
function swap(arr, index1,index2){
    [arr[index1],arr[index2]]=[arr[index2], arr[index1]]
}
 let arr=[3,1,90,2,11]
 quicksort(arr,0,arr.length-1 )
 console.log(arr)

