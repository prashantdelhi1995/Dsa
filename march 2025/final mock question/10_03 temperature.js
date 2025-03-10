/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack=[]
    let output=new Array(temperatures.length).fill(0)
    for(let i=temperatures.length-1; i>=0;i--){
        while(stack.length && temperatures[stack[stack.length-1]]<=temperatures[i]){
            stack.pop()
        } 
        if(stack.length>0){
            output[i]=stack[stack.length-1]-i
        }
        stack.push(i)
    }
    return output
};