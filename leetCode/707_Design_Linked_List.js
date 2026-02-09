class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
var MyLinkedList = function() {
    this.left = new ListNode(0);
    this.right = new ListNode(0);
    this.left.next = this.right;
    this.right.prev = this.left;
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.left.next;

    while (curr && index > 0) {
        curr = curr.next;
        index--;
    } 

    if (curr && curr !== this.right && index == 0) {
        return curr.val
    }
    
    return -1;  
  
    
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new ListNode(val);
    node.prev = this.left;
    node.next = this.left.next;
    this.left.next.prev = node;
    this.left.next = node;

    // const node = new ListNode(val);
    // const next = this.left.next;
    // const prev = this.left;
    // node.prev = prev;
    // node.next = next;
    // next.prev = node;
    // prev.next = node;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new ListNode(val);
    node.next = this.right;
    node.prev = this.right.prev;
    this.right.prev.next = node;
    this.right.prev = node;

    // const node = new ListNode(val);
    // const next = this.right;
    // const prev = this.right.prev;
    // node.prev = prev;
    // node.next = next;
    // next.prev = node;
    // prev.next = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const node = new ListNode(val);
    let curr = this.left.next;

    while (curr && index > 0) {
        curr = curr.next;
        index--;
    }

    if (curr && index === 0) {
        node.next = curr;
        node.prev = curr.prev;
        curr.prev.next = node;
        curr.prev = node
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.left.next;
    
    while (curr && index > 0) {
        curr = curr.next;
        index--;
    }

    if (curr && curr !== this.right && index === 0) {
        let prev = curr.prev;
        prev.next = curr.next;
        curr.next.prev = prev;    
    }
};


 
// Your MyLinkedList object will be instantiated and called as such:
// var obj = new MyLinkedList();
// var param_1 = obj.get(index);
// obj.addAtHead(val);
// obj.addAtTail(val);
// obj.addAtIndex(index,val);
// obj.deleteAtIndex(index);
 

// --- Твої незмінні дані ---
const commands = ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"];
const params = [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]];

// --- Допоміжна функція для друку списку (візуалізація) ---
function printList(list) {
    // Перевірка на існування списку та left/right (щоб не впало, якщо конструктор не спрацював)
    if (!list || !list.left) return "List not ready";
    
    let curr = list.left.next;
    let res = [];
    let safeGuard = 0; // Захист від нескінченного циклу
    
    // Біжимо, поки не дійдемо до хвоста (this.right)
    // Увага: тут може бути помилка, якщо this.right написано з помилкою в класі
    while (curr && curr !== list.right && safeGuard < 100) {
        res.push(curr.val);
        curr = curr.next;
        safeGuard++;
    }
    
    if (safeGuard >= 100) return "[Error: Infinite Loop detected]";
    return "[" + res.join(" <-> ") + "]";
}

console.log("--- СТАРТ ТЕСТУВАННЯ ---");

let myLinkedList = null;
let output = [];

for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    const arg = params[i];
    let result = null;

    try {
        if (cmd === "MyLinkedList") {
            myLinkedList = new MyLinkedList(); // Створюємо об'єкт
            result = null; 
        } else {
            // Викликаємо метод
            result = myLinkedList[cmd](...arg);
        }

        // Форматування результату (void -> null)
        if (result === undefined) result = null;
        output.push(result);

        console.log(`Крок ${i}: ${cmd}(${arg.join(', ')})`);
        console.log(`   Повернуло: ${result}`);
        // Тут ми намагаємося надрукувати список. Якщо в класі є помилки в назвах, тут це стане видно.
        try {
            console.log(`   Список:    ${printList(myLinkedList)}`);
        } catch (e) {
            console.log(`   Список:    [Не вдалося відобразити: ${e.message}]`);
        }
        console.log("-".repeat(30));

    } catch (error) {
        console.error(`🚨 КРИТИЧНА ПОМИЛКА на кроці ${i} [${cmd}]:`, error.message);
        output.push(null); // Щоб цикл продовжив роботу
    }
}

console.log("\nКінцевий масив output:", JSON.stringify(output));