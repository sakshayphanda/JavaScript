/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head1 = l1;
    let head2 = l2;
    let l3 = null;
    const arr1 = [], arr2 = [];
    while(head1) {
        arr1.push(head1.val);
        head1 = head1.next;
    }
    while(head2) {
        arr2.push(head2.val);
        head2 = head2.next;
    }
    const result = [...arr1, ...arr2].sort(function(a, b){return a-b});
    console.log(result)
    result.forEach(i => {
        if(!l3) {
            l3 = new ListNode(i);
        } else {
            let temp = l3;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(i);
        }
    });
    return l3;
};