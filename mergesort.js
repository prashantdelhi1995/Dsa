let arr=[2,30,9,3,12]
divide(arr,0,arr.length-1)
console.log(arr)
function divide(arr,left, right){
    if(left>=right){
        return
    }
    let mid=Math.floor((left+right)/2)
    divide(arr,left,mid)
    divide(arr, mid+1, right)
    conquere(arr,mid,left,right)
    
}
function conquere(arr,mid,left,right){
    let idx1=left
    let idx2=mid+1
  

    let merge= new Array(right-left+1).fill(0)
    let i=0
    while(idx1<=mid && idx2<=right){
        if(arr[idx1]<=arr[idx2]){
            merge[i]=arr[idx1]
            i++;
            idx1++
        }
        else{
            merge[i]=arr[idx2]
            i++;
            idx2++
        }
    }
    while(idx1<=mid){
        merge[i]=arr[idx1]
        i++;
        idx1++
    }
     while(idx2<=right){
        merge[i]=arr[idx2]
        i++;
        idx2++
    }
    console.log(merge)
    for(let j=0,k=left; j<merge.length; j++,k++){
        arr[k]=merge[j]
    }
    console.log(arr)
    
}