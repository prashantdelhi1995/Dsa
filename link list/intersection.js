
class Solution {
    // Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2) {
        let h1=head1
        let h2= head2
        while(h1!==h2){
            h1= h1==null?head2:h1.next
            h2= h2==null? head1:h2.next
            
        }
        return h1
        // your code here
    }
}