function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // ????
};




/** хелпер перетворювач масиву в лістнод
 * @param {Array} arr1, arr2
 * @return {ListNode} head
 */
const arrayToListNode = (arr1, arr2) => {
    const buildList = (arr) => {
        if (!arr.length) return null;

        const list = new ListNode(arr[0]);
        let curr = list;

        for (let i = 1; i < arr.length; i++) {
            curr.next = new ListNode(arr[i]);
            curr = curr.next;
        }

        return list;
    }

    return [buildList(arr1), buildList(arr2)];
}

/** лістнод в масив назад
 * @param {Array} arr
 * @return {ListNode} head
 */
const ListNodeToArray = (head) => {
    const array = [];
    let current = head;

    while (current) {
        array.push(current.val);
        current = current.next;
    }

    return array;
}

// --- ТЕСТИ ---

// Тест 1: Звичайний кейс
console.log("Test 1:", ListNodeToArray(mergeTwoLists(...arrayToListNode([1, 2, 4], [1, 3, 4])))); 
// Очікується: [1, 1, 2, 3, 4, 4]

// Тест 2: Обидва порожні (раніше падав з помилкою spread ...null)
console.log("Test 2:", ListNodeToArray(mergeTwoLists(...arrayToListNode([], [])))); 
// Очікується: []

// Тест 3: Один порожній (раніше повертав зайвий 0)
console.log("Test 3:", ListNodeToArray(mergeTwoLists(...arrayToListNode([], [0])))); 
// Очікується: [0] 