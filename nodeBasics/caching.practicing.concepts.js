// // export default function caching () {
//     //LRU
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

    //LFU



    //TTL   TBE
// мусорозбірник(якийсь загальний час, коли воно чистить кеш)
// додавання елементу в кеш з його ttl, ключем і значенням
    
// class Node {
//     constructor (value, deleteTime) {
//         this.value = value;
//         this.deleteTime = deleteTime;
//     }
// }
// class TBECache {
//     constructor (timelimit) {
//         this.cache = new Map();
//         this.timestamp = timelimit;

//         const timer = setInterval(() => {
//             this.garbadgeCollect();
//         }, this.timestamp)
//     }
    
//     put (key, value) {
//         const deleteTime = Date.now() + this.timestamp;
//         const node = new Node(value, deleteTime);
//         this.cache.set(key, node);
//         return node.value;
//     }

//     get (key) {
//         if (!this.cache.has(key)) return -1;
        
//         const node = this.cache.get(key);

//         if (Date.now() >= node.deleteTime) {
//             this.cache.delete(key);
//             return -1;
//         }      
//         return node.value;   
//     }

//     garbadgeCollect () {
//         let deleteCounLog = 0;

//         for (const [key, node] of this.cache) {

//             if (Date.now() >= node.deleteTime) {
//                 this.cache.delete(key);
//                 deleteCounLog++
//             }
//         }

//         if (deleteCounLog > 0) {
//             console.log('GarbageCollector deleted: ', deleteCounLog);
//         }
//     }
// }

// const cache = new TBECache(10000);

// // console.log('Cache:', cache);
// console.log('Put (1, 1):', cache.put(1, 1));
// console.log('Put (2, 2):', cache.put(2, 2));
// console.log('Put (3, 3):', cache.put(3, 3));
// console.log('Put (2, 2):', cache.put(4, 4));
// console.log('Put (2, 2):', cache.put(4, 5));
// console.log('Get (1):', cache.get(3));



// LFU
