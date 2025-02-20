/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */remove dublicate from link list
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let temp1=list1
    let temp2=list2
    let output= new ListNode()
    let curr=output
    while(temp1!==null && temp2!==null){
        if(temp1.val<=temp2.val){
            output.next=temp1
            output=output.next
            temp1=temp1.next

        }
        else{
            output.next=temp2
            output=output.next
            temp2=temp2.next
        }
    }
    while(temp1!==null){
        output.next=temp1
        output=output.next
        temp1=temp1.next
    }
    while(temp2!==null){
        output.next=temp2
        output=output.next
        temp2=temp2.next
    }
    return curr.next
    
};