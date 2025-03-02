var findPeakElement = function(arr) {
    let left=0
      let right=arr.length-1
      while(left<=right){
          let mid=Math.floor((left+right)/2)
          if(mid>=0 && arr[mid] < arr[mid-1]){
              right=mid-1
  
          }
          else if(mid<=arr.length-1 && arr[mid] < arr[mid+1]){
              left=mid+1
          }else{
              return mid
          }
      }
      return -1
      
  };