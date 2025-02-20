1.find the mid of linllist
2. reverse the second firstHalf
3. after that mix 





var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the linked list
    let p1 = head;
    let p2 = head;
    while (p2 !== null && p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    // Step 2: Reverse the second half of the list
    let preMiddle = p1;
    let preCurrent = p1.next;
    preMiddle.next = null; // Break the first half

    let prev = null;
    let current = preCurrent;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    let secondHalf = prev; // Head of the reversed second half

    // Step 3: Merge two halves alternately
    let firstHalf = head;
    while (secondHalf !== null) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        firstHalf = temp1;
        secondHalf = temp2;
    }
};
