class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;

        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor (capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(node) {
        const firstEl = this.head.next;

        this.head.next = node;
        node.prev = this.head;
        node.next = firstEl;
        firstEl.prev = node;
    }

    remove (node) {
        const nextEl = node.next;
        const prevEl = node.prev;

        nextEl.prev = prevEl;
        prevEl.next = nextEl;

    }

    put (key, value) {
        if (this.cache.has(key)) {
            const oldNode = this.cache.get(key);
            this.cache.delete(oldNode.key);
            this.remove(oldNode);
        }

        if (this.cache.size >= this.capacity) {
            const oldNode = this.tail.prev;
            this.cache.delete(oldNode.key);
            this.remove(oldNode);
        } 

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.add(newNode);

        // return [this.cache.get(key).value, this.cache.size];
    }

    get (key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        this.remove(node);
        this.add(node);

        return this.cache.get(key).value;
    } 
  
}




/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


//     class Node {
//         constructor (key, value) {
//             this.key = key || null;
//             this.value = value || null;
//             this.prev = null;
//             this.next = null;
//         }
//     }

//     class LRUCache {

//         constructor (capacity){
//             this.cache = new Map();
//             this.capacity = capacity;

//             this.head = new Node(0, 0);
//             this.tail = new Node(0, 0);

//             this.head.next = this.tail;
//             this.tail.prev = this.head;
//         }

//         add(node) {
//             const firstEl = this.head.next;
//             //const node = new Node(key, value);

//             this.head.next = node;
//             node.prev = this.head;
//             node.next = firstEl;
//             firstEl.prev = node;
//         }

//         remove(node) {
//             const previousVal = node.prev;
//             const nextVal = node.next;

//             previousVal.next = nextVal;
//             nextVal.prev = previousVal;
//         }

//         put (key, value) {
//             if (this.cache.has(key)) {
//                 const oldNode = this.cache.get(key);
//                 this.remove(oldNode);

//                 this.cache.delete(key);
//             }

//             if (this.cache.size >= this.capacity) {
//                const nodeToRemove = this.tail.prev;
//                this.remove(nodeToRemove);

//                this.cache.delete(nodeToRemove.key);
//             }

//             const node = new Node(key, value);
//             this.cache.set(key, node);
//             this.add(node);

//             return [this.cache.get(key).value, this.cache.size];
//         }

//         get (key) {
//             if (this.head.next === this.tail) return;

//             if (this.cache.has(key)) {
//                 const node = this.cache.get(key);

//                 this.remove(node);
//                 this.add(node);
//             } else {
//                 return -1
//             }

//                 return [this.cache.get(key).value, this.cache.size];
//         }
//     }
// const cache = new LRUCache(2);

// console.log('Cache:', cache);
// console.log('Put (1, 1):', cache.put(1, 1));
// console.log('Put (2, 2):', cache.put(2, 2));
// console.log('Put (3, 3):', cache.put(3, 3));
// console.log('Put (2, 2):', cache.put(4, 4));
// console.log('Put (2, 2):', cache.put(4, 5));
// console.log('Get (1):', cache.get(3));