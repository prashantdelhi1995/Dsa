/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp= head
    let newNode= null
    while(temp != null){
        let nxt=temp.next
        temp.next=newNode
       
        newNode=temp
         temp=nxt

        


    }
    return newNode
    
};