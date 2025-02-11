
//Given a linked list where nodes can contain values
//  0s, 1s, and 2s only. The task is to segregate 0s, 1s, 
// and 2s linked list such that all zeros segregate to the head side,
//  2s at the end of the linked list, and 1s in the middle of 0s and 2s.
class Solution {
    segregate(head) {
        let zeroHead = new Node(-1);
        let oneHead = new Node(-1);
        let twoHead = new Node(-1);
        let zero = zeroHead;
        let one = oneHead;
        let two = twoHead;
        
        let current = head;
        while (current !== null) {
            if (current.data === 0) {
                zero.next = new Node(current.data);
                zero = zero.next;
            } else if (current.data === 1) {
                one.next = new Node(current.data);
                one = one.next;
            } else {
                two.next = new Node(current.data);
                two = two.next;
            }
            current = current.next;
        }
        
        // Link 0's tail to 1's head or 2's head
        zero.next = oneHead.next ? oneHead.next : twoHead.next;
        // Link 1's tail to 2's head
        one.next = twoHead.next;
        // The new head is the first node of 0s, 1s, or 2s
        return zeroHead.next || oneHead.next || twoHead.next;
    }
}