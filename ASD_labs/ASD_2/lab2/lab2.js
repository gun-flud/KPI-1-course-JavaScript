
class ListNode {
    constructor (val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const values = [];

var sortList = function(head) {
    if (!head) return null;

           
};


const arrayToListNode = (arr) => {
    if (!arr.length) return null;

    const head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

const listNodeToArray = (head) => {
    const array = [];
    let curr = head;

    while(curr) {
        array.push(curr.val);
        curr = curr.next;
        
    }
    return array;
}



console.log(listNodeToArray(arrayToListNode([3, 8, 5, 1, 4, 7, 6, 2])));
// [-1, 5, 3, 4, 0]
// [-1, 5, 3, 4, 0, -5, 10, 2]