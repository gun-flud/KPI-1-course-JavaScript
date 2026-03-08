
class ListNode {
    constructor (val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// var sortList = function(head) {
//     if (!head) return null;

//     let step = 0;
//     let curr = head.next;

//     while(curr) {
//         curr = curr.next;
//         step++;
//     }

//     curr = head;
//     for (let i = 2; i < step; i++) {
//         const list1 = 
//     }

//     let dummyHead = new ListNode(0);

//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             dummyHead.next = list1;
//         } else {
//             dummyHead.next = list2;
//         }
//     }          
// };

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// var sortList = function(head) {
//     if (!head) return null;
    
//     let length = 1;
//     let curr = head.next;
//     while(curr) {
//         curr = curr.next;
//         length++;
//     }

//     const dummy = new ListNode(0);
//     let step = 1;
//     curr = head;
//     dummy.next = curr;

//     while (step <= length / 2) {
//         let i = step;
//         let tail = curr; // head
//         while (curr) {
//             if(i === 0) {
//                 splitFUnc;
//                 i = step;
//             }
//             tail = tail.next;

//             i--;
//         }
//         step++;
//     }

//     const mergeSort = (list1, list2) => {
//         while (list1 && list2) {

//         }
//     }
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function(head) {
    if (!head || !head.next) return null;
    // цикл: (порахує довжин масива)
    // цикл: (ходитиме по всьому списку збільшуючи step*2)
    // функція: (обрізає 2 шматочки довжиною step) return tail.next.val
    // функція: (порівнює list1 list2 та сортує)

     // функція: (обрізає 2 шматочки довжиною step) return tail.next.val
    const splitNode = (head, size) => {
        if (!head) return null;
        let curr = head;

        // for (let i = 1; i <= size; i++) {
        //     if (!curr.next) break;
        //     console.log(curr.val, curr.next.val);
        //     curr = curr.next;
            
        // }
        for (let i = 1; i < size; i++) {
            if (!curr.next) break;
            console.log(curr.val, curr.next.val);
            curr = curr.next;
            
        }

        const nextChunk = curr.next;
        // console.log(nextChunk);
        curr.next = null;
        return nextChunk;
        // const tail = curr;
        // curr = null;
        // return tail;
    }

// функція: (порівнює list1 list2 та сортує) return start;
    const sortNodes = (list1, list2) => {
        const localDummy = new ListNode(0);
        let move = localDummy;

        while (list1 && list2) {

            if (list1.val < list2.val) {
                move.next = list1;
                move = list1;
                list1 = list1.next;

            } else {
                move.next = list2;
                move = list2;
                list2 = list2.next;
            }
        }
        move.next = list1 || list2;
        return localDummy.next; // start of the merged list
    }

    // цикл: (порахує довжин масива)
    let length = 1;
    let curr = head.next;
    // let curr = head.next;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // цикл: (ходитиме по всьому списку збільшуючи step*2)
    curr = head;
    let dummy = new ListNode(0);
    dummy.next = curr;
    let step = 1;

    while (step < length) {
        curr = dummy.next;
        let tail = dummy;

        while (curr) {
            const list1 = curr;
            const list2 = splitNode(curr, step); // return tail of list1
            curr = splitNode(list2, step); // return tail of list2

            const sortedHead = sortNodes(list1, list2);
            tail.next = sortedHead;

            while (tail.next) {
                tail = tail.next;
            }
        }

        step *= 2;
    }
    return dummy.next;
};



// 3, 8, 5, 1, 4, 7, 6, 2
// 3, 5 8                  
// 3 5 1 8
// 3 5 1 4 8
// 3 5 1 4 7 8
// 3 5 1 4 7 6 8
// 3 5 1 4 7 6 2 8

// 3 5    1 4 > 1 3 4 5
// 7 6    2 8 > 2 6 7 8
// 1 3 4 5    2 6 7 8 > 1 2 3 4 5 6 7 8


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
// 3 5 1 4 
// 1 3 4 5
console.log(listNodeToArray(sortList(arrayToListNode([3, 8, 5, 1, 4, 7, 6, 2]))));
// console.log(listNodeToArray(arrayToListNode([])));
// [-1, 5, 3, 4, 0]
// [-1, 5, 3, 4, 0, -5, 10, 2]