/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[]
    let output=new Array(nums1.length)
    let map= new Map()
    for(let i=0; i<nums2.length; i++){
        while(stack.length>0 && stack[stack.length-1]<nums2[i]){
            map.set(stack.pop(), nums2[i])

        }
        stack.push(nums2[i])

    }
    for(let i of stack){
        map.set(i,-1)
    }
    for(let i=0; i<nums1.length; i++){
        output[i]=map.get(nums1[i])
    }

    return output
};