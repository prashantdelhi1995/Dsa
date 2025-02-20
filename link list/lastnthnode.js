//remove last nth node js

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move first pointer `n + 1` steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches null
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node
    second.next = second.next.next;

    return dummy.next;
};