// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
// slow selution
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// const reverseList = (head) => {
//     if (!head) return null;
//     const reversedArray = [];
//     let curr = head;
//     while (curr) {
//         reversedArray.push(curr.val);
//         curr = curr.next;
//     }
//     console.log('реверс'+reversedArray);
//     head = new ListNode(reversedArray.pop());
//     curr = head;
//     while (reversedArray.length > 0) {
//         curr.next = new ListNode(reversedArray.pop());
//         curr = curr.next;
//         console.log('попи'+reversedArray);
//     }
//     console.log('все що залишилось'+reversedArray);
//     return head;
// };


//better way

const reverseList = (head) => {
    let previous = null;
    let current = head;
    let nextTemp = null

    while (current) {
        nextTemp = previous;
        previous = current;
        current = current.next;
        previous.next = nextTemp;
    }

    return previous;
};

/** хелпер перетворювач масиву в лістнод
 * @param {Array} arr
 * @return {ListNode} head
 */
const arrayToListNode = (arr) => {
    if (!arr.length) return null;

    const head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
};

/** хелпер перетворювач лістнод в масив
 * @param {ListNode} head
 * @return {Array} arr
 */
const ListNodeToArray = (head) => {
    const arr = [];
    let curr = head;

    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
};

console.log(ListNodeToArray(reverseList(arrayToListNode([1, 2, 3, 4, 5]))));
console.log(ListNodeToArray(reverseList(arrayToListNode([1, 2]))));
console.log(ListNodeToArray(reverseList(arrayToListNode([]))));
